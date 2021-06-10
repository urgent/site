create function current_user_id() returns text as $$
  select current_setting('user.id', true)::text;
$$ language sql stable;