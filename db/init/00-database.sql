\connect smooms;

CREATE TABLE public.category (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    name TEXT,
    color TEXT
);

CREATE TABLE public.message (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    content TEXT
);

CREATE TABLE public.tag (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    name TEXT,
    category_id INTEGER NOT NULL CONSTRAINT tag_category_id_fkey REFERENCES public.category(id) ON DELETE CASCADE
);

CREATE TABLE public.message_tag (
    id SERIAL PRIMARY KEY,
    message_id INTEGER NOT NULL CONSTRAINT message_tag_message_id_fkey REFERENCES public.message(id) ON DELETE CASCADE,
    tag_id INTEGER NOT NULL CONSTRAINT message_tag_tag_id_fkey REFERENCES public.tag(id) ON DELETE CASCADE
);

ALTER TABLE message_tag ADD CONSTRAINT messagefk FOREIGN KEY (message_id) REFERENCES message (id) ON DELETE CASCADE;

ALTER TABLE message_tag ADD CONSTRAINT tagfk FOREIGN KEY (tag_id) REFERENCES tag (id) ON DELETE CASCADE;

ALTER TABLE tag ADD CONSTRAINT categoryfk FOREIGN KEY (category_id) REFERENCES category (id) ON DELETE CASCADE;

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

CREATE POLICY select_public on message for select USING (true);

-- RLS message

create policy insert_if_author
  on message
  for insert
  with check (EXISTS (SELECT * FROM accounts INNER JOIN sessions ON (accounts.user_id = sessions.user_id) WHERE sessions.session_token = current_user_id()));

create policy update_if_author
  on message
  for update
  using (EXISTS (SELECT * FROM accounts INNER JOIN sessions ON (accounts.user_id = sessions.user_id) WHERE message.user_id = sessions.user_id AND sessions.session_token = current_user_id()));

create policy delete_if_author
  on message
  for delete
  using (EXISTS (SELECT * FROM accounts INNER JOIN sessions ON (accounts.user_id = sessions.user_id) WHERE message.user_id = sessions.user_id AND sessions.session_token = current_user_id()));


-- RLS category

create policy insert_category_if_author
  on category
  for insert
  with check (EXISTS (SELECT * FROM accounts INNER JOIN sessions ON (accounts.user_id = sessions.user_id) WHERE sessions.session_token = current_user_id()));

create policy update_category_if_author
  on category
  for update
  using (EXISTS (SELECT * FROM accounts INNER JOIN sessions ON (accounts.user_id = sessions.user_id) WHERE category.user_id = sessions.user_id AND sessions.session_token = current_user_id()));

create policy delete_category_if_author
  on category
  for delete
  using (EXISTS (SELECT * FROM accounts INNER JOIN sessions ON (accounts.user_id = sessions.user_id) WHERE category.user_id = sessions.user_id AND sessions.session_token = current_user_id()));

-- RLS tag

create policy insert_tag_if_author
  on tag
  for insert
  with check (EXISTS (SELECT * FROM accounts INNER JOIN sessions ON (accounts.user_id = sessions.user_id) WHERE sessions.session_token = current_user_id()));

create policy update_tag_if_author
  on tag
  for update
  using (EXISTS (SELECT * FROM accounts INNER JOIN sessions ON (accounts.user_id = sessions.user_id) WHERE tag.user_id = sessions.user_id AND sessions.session_token = current_user_id()));

create policy delete_tag_if_author
  on tag
  for delete
  using (EXISTS (SELECT * FROM accounts INNER JOIN sessions ON (accounts.user_id = sessions.user_id) WHERE tag.user_id = sessions.user_id AND sessions.session_token = current_user_id()));

-- RLS message_tag

create policy insert_message_tag_if_author
  on message_tag
  for insert
  with check (EXISTS (SELECT * FROM accounts INNER JOIN sessions ON (accounts.user_id = sessions.user_id) WHERE sessions.session_token = current_user_id()));

create policy update_message_tag_if_author
  on message_tag
  for update
  using (EXISTS (SELECT * FROM accounts INNER JOIN sessions ON (accounts.user_id = sessions.user_id) INNER JOIN message ON(message.user_id = sessions.user_id) WHERE message_tag.message_id = message.id AND sessions.session_token = current_user_id()));

create policy delete_message_tag_if_author
  on message_tag
  for delete
  using (EXISTS (SELECT * FROM accounts INNER JOIN sessions ON (accounts.user_id = sessions.user_id) INNER JOIN message ON(message.user_id = sessions.user_id) WHERE message_tag.message_id = message.id AND sessions.session_token = current_user_id()));

-- graphile mutations

CREATE FUNCTION public.create_message(content text)
RETURNS public.message
AS $$
  INSERT INTO public.message (user_id, content)
    SELECT a.user_id, content FROM accounts a JOIN sessions s ON a.user_id=s.user_id WHERE s.session_token = current_setting('user.id', true)
  RETURNING *;
$$ LANGUAGE sql VOLATILE STRICT;

CREATE FUNCTION public.create_category(name text, color text)
RETURNS public.category
AS $$
  INSERT INTO public.category (user_id, name, color)
    SELECT a.user_id, name, color FROM accounts a JOIN sessions s ON a.user_id=s.user_id WHERE s.session_token = current_setting('user.id', true)
  RETURNING *;
$$ LANGUAGE sql VOLATILE STRICT;

CREATE FUNCTION public.create_tag(name text, category_id Int)
RETURNS public.tag
AS $$
  INSERT INTO public.tag (user_id, name, category_id)
    SELECT a.user_id, name, category_id FROM accounts a JOIN sessions s ON a.user_id=s.user_id WHERE s.session_token = current_setting('user.id', true)
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