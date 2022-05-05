CREATE POLICY select_if_server
  on stripe
  for select
  USING ( (SELECT current_user_id() = 'server'));

CREATE POLICY update_if_server
  on stripe
  for update
  USING ( (SELECT current_user_id() = 'server'));