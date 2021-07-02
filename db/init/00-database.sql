\connect smooms;

CREATE TABLE public.category (
    id SERIAL PRIMARY KEY,
    organization_id INT NOT NULL CONSTRAINT category_organization_id_fkey REFERENCES public.organization(id) ON DELETE CASCADE,
    name TEXT,
    color TEXT
);

CREATE TABLE public.message (
    id SERIAL PRIMARY KEY,
    organization_id INT NOT NULL CONSTRAINT message_organization_id_fkey REFERENCES public.organization(id) ON DELETE CASCADE,
    content TEXT
);

CREATE TABLE public.tag (
    id SERIAL PRIMARY KEY,
    name TEXT,
    category_id INTEGER NOT NULL CONSTRAINT tag_category_id_fkey REFERENCES public.category(id) ON DELETE CASCADE
);

CREATE TABLE public.message_tag (
    message_id INTEGER NOT NULL CONSTRAINT message_tag_message_id_fkey REFERENCES public.message(id) ON DELETE CASCADE,
    tag_id INTEGER NOT NULL CONSTRAINT message_tag_tag_id_fkey REFERENCES public.tag(id) ON DELETE CASCADE
);

-- User that owns the organization
CREATE TABLE public.organization (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL CONSTRAINT organization_user_id_fkey REFERENCES public.user(id) ON DELETE CASCADE,
    slug TEXT
);

-- Filter messages shown to user based on organization
-- Note that owner of organization must appear in this table, to limit joins 
-- No foreign keys. Want to keep messages on user delete
CREATE TABLE public.organization_user (
  organization_id INTEGER NOT NULL CONSTRAINT organization_user_organization_id_fkey REFERENCES public.organization(id) ON DELETE CASCADE,
  user_id INTEGER NOT NULL CONSTRAINT organization_user_user_id_fkey REFERENCES public.user(id) ON DELETE CASCADE
)

-- email to organization
-- first step of invite. User enters email on organization invite page.
CREATE TABLE public.invite (
  id SERIAL PRIMARY KEY,
  organization_id INTEGER NOT NULL CONSTRAINT invite_organization_id_fkey REFERENCES public.organization(id) ON DELETE CASCADE,
  email TEXT
)

-- nextauth

CREATE TABLE accounts
  (
    id                   SERIAL,
    compound_id          VARCHAR(255) NOT NULL,
    user_id              INTEGER NOT NULL,
    provider_type        VARCHAR(255) NOT NULL,
    provider_id          VARCHAR(255) NOT NULL,
    provider_account_id  VARCHAR(255) NOT NULL,
    refresh_token        TEXT,
    access_token         TEXT,
    access_token_expires TIMESTAMPTZ,
    created_at           TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at           TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
  );

CREATE TABLE sessions
  (
    id            SERIAL,
    user_id       INTEGER NOT NULL,
    expires       TIMESTAMPTZ NOT NULL,
    session_token VARCHAR(255) NOT NULL,
    access_token  VARCHAR(255) NOT NULL,
    created_at    TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at    TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
  );

CREATE TABLE users
  (
    id             SERIAL,
    name           VARCHAR(255),
    email          VARCHAR(255),
    email_verified TIMESTAMPTZ,
    image          TEXT,
    created_at     TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at     TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
  );

CREATE TABLE verification_requests
  (
    id         SERIAL,
    identifier VARCHAR(255) NOT NULL,
    token      VARCHAR(255) NOT NULL,
    expires    TIMESTAMPTZ NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
  );

CREATE UNIQUE INDEX compound_id
  ON accounts(compound_id);

CREATE INDEX provider_account_id
  ON accounts(provider_account_id);

CREATE INDEX provider_id
  ON accounts(provider_id);

CREATE INDEX user_id
  ON accounts(user_id);

CREATE UNIQUE INDEX session_token
  ON sessions(session_token);

CREATE UNIQUE INDEX access_token
  ON sessions(access_token);

CREATE UNIQUE INDEX email
  ON users(email);

CREATE UNIQUE INDEX token
  ON verification_requests(token);

-- RLS

create function current_user_id() returns text as $$
  select current_setting('user.id', true)::text;
$$ language sql stable;

ALTER TABLE public.message ENABLE ROW LEVEL SECURITY;

ALTER TABLE public.tag ENABLE ROW LEVEL SECURITY;

ALTER TABLE public.category ENABLE ROW LEVEL SECURITY;

ALTER TABLE public.message_tag ENABLE ROW LEVEL SECURITY;

ALTER TABLE public.organization_user ENABLE ROW LEVEL SECURITY;

ALTER TABLE public.organization ENABLE ROW LEVEL SECURITY;

-- these selects might be creating errors with create message function. Can't select ID.

CREATE POLICY select_if_organization
  on message
  for select 
  USING ( organization_id IN (
    SELECT organization_id 
      FROM organization_user
      INNER JOIN sessions ON (sessions.user_id = organization_user.user_id)    
      WHERE sessions.session_token = current_user_id()
  ));

-- messages without message_tags are blocked by select_if_organization policy
-- allow untagged messages to be selected
-- needed to insert message, then select the id for message tag insert
CREATE POLICY select_for_insert
  on message
  for select 
  USING ( id IN (
    SELECT message_tag.message_id
      FROM message_tag
      WHERE message_tag.message_id IS NULL
  ));

DROP POLICY select_for_user

CREATE POLICY select_if_organization
  on category
  for select 
  USING ( organization_id IN (
    SELECT organization_id
      FROM organization_user
      INNER JOIN sessions ON (sessions.user_id = organization_user.user_id)    
      WHERE sessions.session_token = current_user_id()
  ));

-- join category to get org id
  CREATE POLICY select_if_organization
  on tag
  for select 
  USING ( id IN (
    SELECT organization_id
      FROM organization_user
      INNER JOIN sessions ON (sessions.user_id = organization_user.user_id)    
      WHERE sessions.session_token = current_user_id()
  ));

CREATE POLICY select_if_organization
  on message_tag
  for select 
  USING ( message_id IN (
    SELECT message.id 
      FROM message
      INNER JOIN organization_user ON (organization_user.organization_id = message.organization_id) 
      INNER JOIN sessions ON (sessions.user_id = organization_user.user_id)
      WHERE sessions.session_token = current_user_id()))

CREATE POLICY select_if_organization
  on organization_user
  for select 
  USING ( organization_user.user_id IN (
    SELECT sessions.user_id 
      FROM sessions     
      WHERE sessions.session_token = current_user_id()))

CREATE POLICY select_if_server
  on organization
  for select
  USING ( (SELECT current_user_id() = 'server'))

CREATE POLICY insert_if_server
  ON organization
  FOR INSERT
  WITH CHECK ( (SELECT current_user_id() = 'server'))

CREATE POLICY select_if_server
  on organization_user
  for select
  USING ( (SELECT current_user_id() = 'server'))

CREATE POLICY insert_if_server
  ON organization_user
  FOR INSERT
  WITH CHECK ( (SELECT current_user_id() = 'server'))

-- RLS message

create policy insert_if_author
  on message
  for insert
  with check (EXISTS (SELECT * FROM sessions WHERE sessions.session_token = current_user_id()));

create policy update_if_author
  on message
  for update
  using (EXISTS (SELECT * FROM sessions INNER JOIN organization ON (organization.id = message.organization_id AND organization.user_id  = sessions.user_id) WHERE sessions.session_token = current_user_id()));

create policy delete_if_author
  on message
  for delete
  using (EXISTS (SELECT * FROM sessions INNER JOIN organization ON (organization.id = message.organization_id AND organization.user_id  = sessions.user_id) WHERE sessions.session_token = current_user_id()));


-- RLS category

create policy insert_category_if_author
  on category
  for insert
  with check (EXISTS (SELECT * FROM sessions WHERE sessions.session_token = current_user_id()));

create policy update_category_if_author
  on category
  for update
  using (EXISTS (SELECT * FROM sessions INNER JOIN organization ON (organization.id = category.organization_id AND organization.user_id  = sessions.user_id) WHERE sessions.session_token = current_user_id()));

create policy delete_category_if_author
  on category
  for delete
  using (EXISTS (SELECT * FROM sessions INNER JOIN organization ON (organization.id = category.organization_id AND organization.user_id  = sessions.user_id) WHERE sessions.session_token = current_user_id()));

-- RLS tag

create policy insert_tag_if_author
  on tag
  for insert
  with check (EXISTS (SELECT * FROM sessions WHERE sessions.session_token = current_user_id()));

create policy update_tag_if_author
  on tag
  for update
  using (EXISTS (SELECT * FROM sessions INNER JOIN category ON (tag.category_id = category.id) INNER JOIN organization ON (organization.id = category.organization_id AND organization.user_id  = sessions.user_id) WHERE sessions.session_token = current_user_id()));

create policy delete_tag_if_author
  on tag
  for delete
  using (EXISTS (SELECT * FROM sessions INNER JOIN category ON (tag.category_id = category.id) INNER JOIN organization ON (organization.id = category.organization_id AND organization.user_id  = sessions.user_id) WHERE sessions.session_token = current_user_id()));

-- RLS message_tag

create policy insert_message_tag_if_author
  on message_tag
  for insert
  with check (EXISTS (SELECT * FROM sessions WHERE sessions.session_token = current_user_id()));

create policy update_message_tag_if_author
  on message_tag
  for update
  using (EXISTS (SELECT * FROM sessions INNER JOIN message ON (message.id = message_tag.message_id) INNER JOIN organization ON (organization.id = message.organization_id AND organization.user_id  = sessions.user_id) WHERE sessions.session_token = current_user_id()));

create policy delete_message_tag_if_author
  on message_tag
  for delete
  using (EXISTS (SELECT * FROM sessions INNER JOIN message ON (message.id = message_tag.message_id) INNER JOIN organization ON (organization.id = message.organization_id AND organization.user_id  = sessions.user_id) WHERE sessions.session_token = current_user_id()));

-- graphile mutations

CREATE FUNCTION public.create_category(organization_id int, name text, color text)
RETURNS public.category
AS $$
  INSERT INTO public.category (organization_id, name, color)
    VALUES(organization_id, name, color)
  RETURNING *;
$$ LANGUAGE sql VOLATILE STRICT;

CREATE FUNCTION public.create_tag(name text, category_id int)
RETURNS public.tag
AS $$
  INSERT INTO public.tag (name, category_id)
    VALUES(name, category_id)
  RETURNING *;
$$ LANGUAGE sql VOLATILE STRICT;

CREATE FUNCTION public.create_message_tag(message_id Int, tag_id Int)
RETURNS public.message_tag
AS $$
  INSERT INTO public.message_tag(message_id, tag_id)
    VALUES(message_id, tag_id)
  RETURNING *;
$$ LANGUAGE sql VOLATILE STRICT;

CREATE FUNCTION public.delete_message(message_id Int)
RETURNS public.message
AS $$
  DELETE FROM public.message
    WHERE id=message_id
  RETURNING *;
$$ LANGUAGE sql VOLATILE STRICT;

CREATE FUNCTION public.delete_tag(tag_id Int)
RETURNS public.tag
AS $$
  DELETE FROM public.tag
    WHERE id=tag_id
  RETURNING *;
$$ LANGUAGE sql VOLATILE STRICT;

CREATE FUNCTION public.delete_message_tag(tag_id Int)
RETURNS public.message_tag
AS $$
  DELETE FROM public.message_tag
    WHERE tag_id=tag_id
  RETURNING *;
$$ LANGUAGE sql VOLATILE STRICT;

CREATE FUNCTION public.create_message(organization_id int, content text, tags Int[])
RETURNS setof public.message
AS $$

-- insert to get primary key of message, for many to many message_id
WITH moved_rows AS (
  INSERT INTO public.message (organization_id, content)
    VALUES(organization_id, content)
  RETURNING *
),
-- many to many relation

moved_tags AS (
  INSERT INTO public.message_tag (message_id, tag_id)
  SELECT moved_rows.id, tagInput.tag_id
  FROM moved_rows, UNNEST($2) as tagInput(tag_id)
  RETURNING *
)

SELECT moved_rows.* FROM moved_rows LEFT JOIN moved_tags ON moved_rows.id = moved_tags.message_id

$$ LANGUAGE sql VOLATILE STRICT;

CREATE FUNCTION public.create_organization(user_id Int, slug Text)
RETURNS public.organization AS
$$

 -- insert for organization ID
  WITH moved_rows AS (
    INSERT INTO public.organization(user_id, slug) VALUES(user_id, slug)
    RETURNING *
  ),

  -- insert into organization_user
  moved_org_user AS (
    INSERT INTO public.organization_user (organization_id, user_id)
    SELECT moved_rows.id, user_id
    FROM moved_rows
    RETURNING *
  )

  SELECT * FROM moved_rows
$$ LANGUAGE sql VOLATILE STRICT;

DROP TABLE organization_tag;