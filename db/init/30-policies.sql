ALTER TABLE public.message ENABLE ROW LEVEL SECURITY;

CREATE POLICY select_public on message for select USING (true);

-- message

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


-- category

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

-- tag

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

-- message_tag

create policy insert_message_tag_if_author
  on message_tag
  for insert
  with check (EXISTS (SELECT * FROM accounts INNER JOIN sessions ON (accounts.user_id = sessions.user_id) WHERE sessions.session_token = current_user_id()));

create policy update_message_tag_if_author
  on message_tag
  for update
  using (EXISTS (SELECT * FROM accounts INNER JOIN sessions ON (accounts.user_id = sessions.user_id) WHERE message.user_id = sessions.user_id AND message_tag.message_id = message.id AND sessions.session_token = current_user_id()));

create policy delete_message_tag_if_author
  on message_tag
  for delete
  using (EXISTS (SELECT * FROM accounts INNER JOIN sessions ON (accounts.user_id = sessions.user_id) WHERE message.user_id = sessions.user_id AND message_tag.message_id = message.id AND sessions.session_token = current_user_id()));