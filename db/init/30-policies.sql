ALTER TABLE public.message ENABLE ROW LEVEL SECURITY;

create policy insert_if_author
  on message
  for insert
  with check (EXISTS (SELECT * FROM accounts INNER JOIN sessions ON (accounts.user_id = sessions.user_id) WHERE sessions.session_token = current_user_id()));

create policy update_if_author
  on message
  for update
  using (EXISTS (SELECT * FROM accounts INNER JOIN sessions ON (accounts.user_id = sessions.user_id) WHERE message.user_id= sessions.user_id AND sessions.session_token = current_user_id()));

create policy delete_if_author
  on message
  for delete
  using (EXISTS (SELECT * FROM accounts INNER JOIN sessions ON (accounts.user_id = sessions.user_id) WHERE message.user_id= sessions.user_id AND sessions.session_token = current_user_id()));

 CREATE POLICY select_public on message for select USING (true);