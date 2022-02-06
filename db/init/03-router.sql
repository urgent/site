BEGIN;

CREATE FUNCTION tile(organization_id INTEGER, tag_id INTEGER[])
RETURNS setof public.message AS $$
-- filter as much as possible across indexes
with message_filter AS (
    SELECT message.*, message_tag.tag_id
    FROM public.message
    INNER JOIN public.message_tag ON message_tag.message_id = message.id
    WHERE message.organization_id = $1
    AND message_tag.tag_id = any($2)
),
-- aggregate to get unique array of tags
message_flat AS (
    SELECT message_filter.id, array_agg(message_filter.tag_id) AS message_tag_ids
    FROM message_filter
    GROUP BY (message_filter.id)
),
-- AND condition on tags, need all tags to match
message_ids AS (
    SELECT message_flat.id FROM message_flat WHERE message_tag_ids @> $2
)
-- get messages
SELECT message.* FROM message INNER JOIN message_ids ON message.id = message_ids.id;
$$ LANGUAGE sql STABLE;
COMMIT;