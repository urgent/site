BEGIN;
ALTER TABLE message DROP COLUMN loomSharedUrl TEXT;
ALTER TABLE message ADD COLUMN loom_shared_url TEXT;

DROP FUNCTION create_message;

CREATE FUNCTION public.create_message(organization_id INT, content TEXT, tags INT[], loom_share_url TEXT DEFAULT NULL)
RETURNS setof public.message
AS $$

-- insert to get primary key of message, for many to many message_id
WITH moved_rows AS (
  INSERT INTO public.message (organization_id, content, loom_share_url)
    VALUES($1, $2, $4)
  RETURNING *
),

-- many to many relation
moved_tags AS (
  INSERT INTO public.message_tag (message_id, tag_id, organization_id)
  SELECT moved_rows.id, tagInput.tag_id, $1
  FROM moved_rows, UNNEST($3) as tagInput(tag_id)
  RETURNING *
)

SELECT moved_rows.* FROM moved_rows LEFT JOIN moved_tags ON moved_rows.id = moved_tags.message_id

$$ LANGUAGE sql VOLATILE STRICT;

COMMIT;