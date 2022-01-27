BEGIN;

CREATE FUNCTION tile(organization_id INTEGER, tag_id INTEGER[])
RETURNS setof public.message AS $$
    SELECT message.*
    FROM public.message
    INNER JOIN public.message_tag ON message_tag.message_id = message.id
    INNER JOIN UNNEST($2) as tagInput(tag_id) ON message_tag.tag_id = tagInput.tag_id
    WHERE message.organization_id = $1;
$$ LANGUAGE sql STABLE;
COMMIT;