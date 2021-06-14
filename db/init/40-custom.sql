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