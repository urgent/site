BEGIN;
CREATE FUNCTION organization_member() 
RETURNS SETOF int AS $$
    SELECT organization_id FROM organization_user JOIN sessions ON organization_user.user_id = sessions."userId" WHERE sessions."sessionToken" = current_user_id()
$$ LANGUAGE sql STABLE
SECURITY DEFINER; -- infinite recursion

CREATE POLICY "select_if_organization_member" on organization_user FOR SELECT
      USING (organization_id IN (SELECT organization_member()));
COMMIT;