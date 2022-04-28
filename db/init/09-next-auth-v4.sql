BEGIN;
--- fk violations
DELETE FROM sessions WHERE user_id NOT IN (SELECT id FROM users);

DROP POLICY IF EXISTS select_if_organization on message;
DROP POLICY IF EXISTS select_if_organization on category;
DROP POLICY IF EXISTS select_if_organization on tag;
DROP POLICY IF EXISTS select_if_organization on message_tag;
DROP POLICY IF EXISTS select_if_organization on organization_user;
DROP POLICY IF EXISTS select_if_organization_invited on organization;
DROP POLICY IF EXISTS select_if_organization on user_config;
DROP POLICY IF EXISTS select_if_organization on organization;
DROP POLICY IF EXISTS insert_if_author on message;
DROP POLICY IF EXISTS update_if_author on message;
DROP POLICY IF EXISTS delete_if_author on message;
DROP POLICY IF EXISTS select_if_author on message;
DROP POLICY IF EXISTS insert_category_if_author on category;
DROP POLICY IF EXISTS update_category_if_author on category;
DROP POLICY IF EXISTS delete_category_if_author on category;
DROP POLICY IF EXISTS insert_tag_if_author on tag;
DROP POLICY IF EXISTS update_tag_if_author on tag;
DROP POLICY IF EXISTS delete_tag_if_author on tag;
DROP POLICY IF EXISTS insert_message_tag_if_author on message_tag;
DROP POLICY IF EXISTS update_message_tag_if_author on message_tag;
DROP POLICY IF EXISTS delete_message_tag_if_author on message_tag;
DROP POLICY IF EXISTS insert_user_config_if_author on user_config;
DROP POLICY IF EXISTS update_user_config_if_author on user_config;
DROP POLICY IF EXISTS delete_message_tag_if_author on message_tag;
DROP POLICY IF EXISTS insert_user_config_if_author on user_config;
DROP POLICY IF EXISTS update_user_config_if_author on user_config;
DROP POLICY IF EXISTS delete_user_config_if_author on user_config;
DROP POLICY IF EXISTS insert_if_author on config_category;
DROP POLICY IF EXISTS update_if_author on config_category;
DROP POLICY IF EXISTS delete_if_author on config_category;
DROP POLICY IF EXISTS select_if_author on config_category;
DROP POLICY IF EXISTS select_if_organization on stripe;
DROP POLICY IF EXISTS select_user_config_if_author on user_config;
DROP POLICY IF EXISTS delete_if_organization_owner ON organization_user;
DROP POLICY IF EXISTS select_if_organization_owner ON organization_user;
DROP FUNCTION IF EXISTS create_user_config;
DROP FUNCTION IF EXISTS sort_category;
DROP FUNCTION IF EXISTS create_organization_user;
DROP FUNCTION IF EXISTS create_invite;
DROP FUNCTION IF EXISTS delete_organization_user;
DROP FUNCTION IF EXISTS organization_owner;
\! echo "Alter table accounts...";
/* ACCOUNT */
ALTER TABLE accounts RENAME COLUMN "user_id" TO "userId";
ALTER TABLE accounts RENAME COLUMN "provider_id" TO "provider";
ALTER TABLE accounts RENAME COLUMN "provider_account_id" TO "providerAccountId";
ALTER TABLE accounts RENAME COLUMN "access_token_expires" TO "expires_at";
ALTER TABLE accounts RENAME COLUMN "provider_type" TO "type";

/* Do conversion of TIMESTAMPTZ to BIGINT */
ALTER TABLE accounts ALTER COLUMN "expires_at" TYPE TEXT USING CAST(extract(epoch FROM "expires_at") AS BIGINT)*1000;

/* Keep id as SERIAL with autoincrement when using ORM. Using new v4 uuid format won't work because of incompatibility */
/* ALTER TABLE accounts ALTER COLUMN "id" TYPE TEXT; */
/* ALTER TABLE accounts ALTER COLUMN "userId" TYPE TEXT; */
ALTER TABLE accounts ALTER COLUMN "type" TYPE TEXT;
ALTER TABLE accounts ALTER COLUMN "provider" TYPE TEXT;
ALTER TABLE accounts ALTER COLUMN "providerAccountId" TYPE TEXT;

ALTER TABLE accounts ADD CONSTRAINT fk_user_id FOREIGN KEY ("userId") REFERENCES users(id);
ALTER TABLE accounts
DROP COLUMN IF EXISTS "compound_id";
/* The following two timestamp columns have never been necessary for NextAuth.js to function, but can be kept if you want */
ALTER TABLE accounts
DROP COLUMN IF EXISTS "created_at",
DROP COLUMN IF EXISTS "updated_at";

ALTER TABLE accounts
ADD COLUMN IF NOT EXISTS "token_type" TEXT NULL,
ADD COLUMN IF NOT EXISTS "scope" TEXT NULL,
ADD COLUMN IF NOT EXISTS "id_token" TEXT NULL,
ADD COLUMN IF NOT EXISTS "session_state" TEXT NULL;
/* Note: These are only needed if you're going to be using the old Twitter OAuth 1.0 provider. */
/* ALTER TABLE accounts
ADD COLUMN IF NOT EXISTS "oauth_token_secret" TEXT NULL,
ADD COLUMN IF NOT EXISTS "oauth_token" TEXT NULL; */
\! echo "Alter table users...";
/* USER */
ALTER TABLE users RENAME COLUMN "email_verified" TO "emailVerified";

/* Keep id as SERIAL with autoincrement when using ORM. Using new v4 uuid format won't work because of incompatibility */
/* ALTER TABLE users ALTER COLUMN "id" TYPE TEXT; */
ALTER TABLE users ALTER COLUMN "name" TYPE TEXT;
ALTER TABLE users ALTER COLUMN "email" TYPE TEXT;
ALTER TABLE users ALTER COLUMN "image" TYPE TEXT;
/* Do conversion of TIMESTAMPTZ to BIGINT and then TEXT */
ALTER TABLE users ALTER COLUMN "emailVerified" TYPE TEXT USING CAST(CAST(extract(epoch FROM "emailVerified") AS BIGINT)*1000 AS TEXT);
/* The following two timestamp columns have never been necessary for NextAuth.js to function, but can be kept if you want */
ALTER TABLE users
DROP COLUMN IF EXISTS "created_at",
DROP COLUMN IF EXISTS "updated_at";
\! echo "Alter table sessions...";
/* SESSION */
ALTER TABLE sessions RENAME COLUMN "session_token" TO "sessionToken";
ALTER TABLE sessions RENAME COLUMN "user_id" TO "userId";

/* Keep id as SERIAL with autoincrement when using ORM. Using new v4 uuid format won't work because of incompatibility */
/* ALTER TABLE sessions ALTER COLUMN "id" TYPE TEXT; */
/* ALTER TABLE sessions ALTER COLUMN "userId" TYPE TEXT; */
ALTER TABLE sessions ALTER COLUMN "sessionToken" TYPE TEXT;
ALTER TABLE sessions ADD CONSTRAINT fk_user_id FOREIGN KEY ("userId") REFERENCES users(id);
/* Do conversion of TIMESTAMPTZ to BIGINT and then TEXT */
ALTER TABLE sessions ALTER COLUMN "expires" TYPE TEXT USING CAST(CAST(extract(epoch FROM "expires") AS BIGINT)*1000 AS TEXT);
ALTER TABLE sessions DROP COLUMN IF EXISTS "access_token";
/* The following two timestamp columns have never been necessary for NextAuth.js to function, but can be kept if you want */
ALTER TABLE sessions
DROP COLUMN IF EXISTS "created_at",
DROP COLUMN IF EXISTS "updated_at";
\! echo "Alter table verification_requests...";
/* VERIFICATION REQUESTS */
ALTER TABLE verification_requests RENAME TO verification_tokens;
/* Keep id as ORM needs it */
/* ALTER TABLE verification_tokens DROP COLUMN IF EXISTS id; */
ALTER TABLE verification_tokens ALTER COLUMN "identifier" TYPE TEXT;
ALTER TABLE verification_tokens ALTER COLUMN "token" TYPE TEXT;
/* Do conversion of TIMESTAMPTZ to BIGINT and then TEXT */
ALTER TABLE verification_tokens ALTER COLUMN "expires" TYPE TEXT USING CAST(CAST(extract(epoch FROM "expires") AS BIGINT)*1000 AS TEXT);
/* The following two timestamp columns have never been necessary for NextAuth.js to function, but can be kept if you want */
ALTER TABLE verification_tokens
DROP COLUMN IF EXISTS "created_at",
DROP COLUMN IF EXISTS "updated_at";
\! echo "create policy 1...";
CREATE POLICY select_if_organization
  on message
  for select 
  USING ( organization_id IN (
    SELECT organization_id 
      FROM organization_user
      INNER JOIN sessions ON (sessions."userId" = organization_user.user_id)    
      WHERE sessions."sessionToken" = current_user_id()
  ));
\! echo "create policy 2...";
CREATE POLICY select_if_organization
  on category
  for select 
  USING ( organization_id IN (
    SELECT organization_id
      FROM organization_user
      INNER JOIN sessions ON (sessions."userId" = organization_user.user_id)    
      WHERE sessions."sessionToken" = current_user_id()
  ));


  CREATE POLICY select_if_organization
  on tag
  for select 
  USING ( category_id IN (
    SELECT category.id
      FROM category
      INNER JOIN organization_user ON (organization_user.organization_id = category.organization_id)
      INNER JOIN sessions ON (sessions."userId" = organization_user.user_id)    
      WHERE sessions."sessionToken" = current_user_id()
  ));

CREATE POLICY select_if_organization
  on message_tag
  for select 
  USING ( organization_id IN (
    SELECT organization_user.organization_id 
      FROM organization_user
      INNER JOIN sessions ON (sessions."userId" = organization_user.user_id)
      WHERE sessions."sessionToken" = current_user_id()));

CREATE POLICY select_if_organization
  on organization_user
  for select 
  USING ( organization_user.user_id IN (
    SELECT sessions."userId" 
      FROM sessions     
      WHERE sessions."sessionToken" = current_user_id()));

CREATE FUNCTION organization_owner()
RETURNS SETOF int AS $$
  SELECT organization.id
  FROM organization
  INNER JOIN sessions ON (sessions."userId" = organization.user_id)
  WHERE sessions."sessionToken" = current_user_id()
$$ LANGUAGE sql STABLE
SECURITY DEFINER; -- Bypass RLS

CREATE POLICY select_if_organization_invited
  on organization
  for select 
  USING ( organization.id IN (
    SELECT organization_user.organization_id
      FROM organization_user
      INNER JOIN sessions ON (sessions."userId" = organization_user.user_id)
      WHERE sessions."sessionToken" = current_user_id()));
\! echo "create policy 3...";
CREATE POLICY select_if_organization
  on user_config
  for select 
  USING ( user_config.user_id IN (
    SELECT sessions."userId" 
      FROM sessions     
      WHERE sessions."sessionToken" = current_user_id()));

CREATE POLICY select_if_organization
  on organization
  for select 
  USING ( organization.user_id IN (
    SELECT sessions."userId" 
      FROM sessions     
      WHERE sessions."sessionToken" = current_user_id()));

-- RLS message

create policy insert_if_author
  on message
  for insert
  with check (EXISTS (SELECT * FROM sessions WHERE sessions."sessionToken" = current_user_id()));

create policy update_if_author
  on message
  for update
  using (message.organization_id IN (SELECT organization_id FROM organization_user INNER JOIN sessions ON (sessions."userId" = organization_user.user_id) WHERE sessions."sessionToken" = current_user_id()));

create policy delete_if_author
  on message
  for delete
  using (message.organization_id IN (SELECT organization_id FROM organization_user INNER JOIN sessions ON (sessions."userId" = organization_user.user_id) WHERE sessions."sessionToken" = current_user_id()));-- RLS category
\! echo "create policy 4...";
create policy insert_category_if_author
  on category
  for insert
  with check (EXISTS (SELECT * FROM sessions WHERE sessions."sessionToken" = current_user_id()));

create policy update_category_if_author
  on category
  for update
  using (category.organization_id IN (SELECT organization_id FROM organization_user INNER JOIN sessions ON (sessions."userId" = organization_user.user_id) WHERE sessions."sessionToken" = current_user_id()));

create policy delete_category_if_author
  on category
  for delete
  using (category.organization_id IN (SELECT organization_id FROM organization_user INNER JOIN sessions ON (sessions."userId" = organization_user.user_id) WHERE sessions."sessionToken" = current_user_id()));


-- RLS tag

create policy insert_tag_if_author
  on tag
  for insert
  with check (EXISTS (SELECT * FROM sessions WHERE sessions."sessionToken" = current_user_id()));

create policy update_tag_if_author
  on tag
  for update
  using (tag.category_id IN (
    SELECT category.id
    FROM category 
    INNER JOIN organization_user ON (category.organization_id = organization_user.organization_id)
    INNER JOIN sessions ON (sessions."userId" = organization_user.user_id) 
    WHERE sessions."sessionToken" = current_user_id()
  ));

create policy delete_tag_if_author
  on tag
  for delete
  using (tag.category_id IN (
    SELECT category.id
    FROM category 
    INNER JOIN organization_user ON (category.organization_id = organization_user.organization_id)
    INNER JOIN sessions ON (sessions."userId" = organization_user.user_id) 
    WHERE sessions."sessionToken" = current_user_id()
  ));

-- RLS message_tag
\! echo "create policy 5...";
create policy insert_message_tag_if_author
  on message_tag
  for insert
  with check (EXISTS (SELECT * FROM sessions WHERE sessions."sessionToken" = current_user_id()));

create policy update_message_tag_if_author
  on message_tag
  for update
  using (message_tag.tag_id IN (
    SELECT tag.id
    FROM tag
    INNER JOIN category ON (tag.category_id = category.id) 
    INNER JOIN organization_user ON (category.organization_id = organization_user.organization_id)
    INNER JOIN sessions ON (sessions."userId" = organization_user.user_id) 
    WHERE sessions."sessionToken" = current_user_id()
  ));

create policy delete_message_tag_if_author
  on message_tag
  for delete
  using (message_tag.tag_id IN (
    SELECT tag.id
    FROM tag
    INNER JOIN category ON (tag.category_id = category.id) 
    INNER JOIN organization_user ON (category.organization_id = organization_user.organization_id)
    INNER JOIN sessions ON (sessions."userId" = organization_user.user_id) 
    WHERE sessions."sessionToken" = current_user_id()
  ));

-- RLS user_config

create policy insert_user_config_if_author
  on user_config
  for insert
  with check (EXISTS (SELECT * FROM sessions WHERE sessions."sessionToken" = current_user_id()));

create policy update_user_config_if_author
  on user_config
  for update
  using (user_config.user_id in (SELECT sessions."userId" FROM sessions WHERE sessions."sessionToken" = current_user_id()));

create policy delete_user_config_if_author
  on user_config
  for delete
  using (user_config.user_id in (SELECT sessions."userId" FROM sessions WHERE sessions."sessionToken" = current_user_id()));

CREATE FUNCTION public.create_user_config(default_organization Int)
RETURNS public.user_config
AS $$
  WITH deleted_rows AS (
    DELETE FROM user_config WHERE user_id in (SELECT "userId" FROM sessions WHERE sessions."sessionToken" = current_user_id())
  ),
  moved_rows AS (
    INSERT INTO public.user_config(user_id, default_organization)
      SELECT sessions."userId", $1 FROM sessions WHERE sessions."sessionToken" = current_user_id()
    ON CONFLICT (user_id) 
    DO 
      UPDATE SET default_organization = $1
    RETURNING *
  )

  SELECT * FROM moved_rows
   
$$ LANGUAGE sql VOLATILE STRICT;

create policy insert_if_author
  on config_category
  for insert
  with check (EXISTS (SELECT * FROM sessions WHERE sessions."sessionToken" = current_user_id()));

create policy update_if_author
  on config_category
  for update
  using (config_category.user_id IN (SELECT "userId" FROM sessions WHERE sessions."sessionToken" = current_user_id()));

create policy delete_if_author
  on config_category
  for delete
  using (config_category.user_id IN (SELECT "userId" FROM sessions WHERE sessions."sessionToken" = current_user_id()));

create policy select_if_author
  on config_category
  for select 
  using (config_category.user_id IN (SELECT "userId" FROM sessions WHERE sessions."sessionToken" = current_user_id()));

-- categoryIds Int[], sort Int[]

CREATE FUNCTION public.sort_category(category_ids integer[], sort integer[])
RETURNS void
AS $$

  INSERT INTO public.config_category (user_id, category_id, sort)
    SELECT s."userId", category_id, sort_index
    FROM  UNNEST($1, $2) as input(category_id, sort_index)
    CROSS  JOIN sessions s
    WHERE s."sessionToken" = current_user_id()
  ON CONFLICT (user_id, category_id) 
  DO UPDATE SET sort = EXCLUDED.sort

$$ LANGUAGE sql VOLATILE STRICT;

CREATE FUNCTION public.create_invite(organization_id Int, email text)
RETURNS public.invite
AS $$
  INSERT INTO invite(organization_id, email) VALUES($1, $2)
  RETURNING *;                                                      
$$ LANGUAGE sql VOLATILE STRICT;
\! echo "create policy 6...";
CREATE FUNCTION public.delete_organization_user(organization_id Int, user_id Int)
RETURNS public.organization_user
AS $$
  DELETE FROM organization_user WHERE organization_id=$1 AND user_id=$2 
  RETURNING *;                                                      
$$ LANGUAGE sql VOLATILE STRICT;


CREATE POLICY select_if_organization ON public.stripe USING ((user_id IN ( SELECT organization.user_id
   FROM ((public.organization
     JOIN public.organization_user ON ((organization.id = organization_user.organization_id)))
     JOIN public.sessions ON ((sessions."userId" = organization_user.user_id)))
  WHERE ((sessions."sessionToken")::text = public.current_user_id()))));

CREATE POLICY select_user_config_if_author ON public.user_config FOR SELECT USING ((user_id IN ( SELECT sessions."userId"
   FROM public.sessions
  WHERE ((sessions."sessionToken")::text = public.current_user_id()))));

CREATE POLICY delete_if_organization_owner ON public.organization_user FOR DELETE USING ((organization_id IN ( SELECT public.organization_owner() AS organization_owner)));

CREATE POLICY select_if_organization_owner ON public.organization_user FOR SELECT USING ((organization_id IN ( SELECT public.organization_owner() AS organization_owner)));

COMMIT;