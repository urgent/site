BEGIN;
DROP FUNCTION IF EXISTS router_tags;
CREATE FUNCTION router_tags(tag_id INTEGER[])
RETURNS setof public.tag AS $$
    SELECT tag.*
    FROM public.tag
    INNER JOIN UNNEST($1::integer[]) AS tag_id(tag_id) ON tag.id = tag_id.tag_id
$$ LANGUAGE sql STABLE;
COMMIT;