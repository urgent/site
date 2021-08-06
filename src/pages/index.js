import React, { useState } from "react";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar"
import Tiles from "../components/Tiles"
import { withRelay } from 'relay-nextjs';
import { graphql, useFragment, usePreloadedQuery } from 'react-relay/hooks';
import { Grid } from '@chakra-ui/react'
import useMutation from '../components/useMutation'

// The $uuid variable is injected automatically from the route.
const HomeQuery = graphql`
  query pages_HomeQuery {
    ...SidebarFragment_categories
    ...pagesFragment_messages
    ...pagesFragment_organization
    ...pagesFragment_userConfig
  }
`;

const InsertMessageTagMutation = graphql`
  mutation pagesMessageTagMutation($input:CreateMessageTagInput!, $connections: [ID!]!) {
    createMessageTag(input: $input) {
      messageTag @appendNode(connections: $connections, edgeTypeName: "MessageTagsEdge") {
        messageId
        tagId
        tagByTagId {
          name
          categoryByCategoryId {
            color
          }
        }
      }
    }
  }
`;

const messageFragment = graphql`
          fragment pagesFragment_messages on Query {
            allMessages {
              __id
              @connection(key: "pagesFragment_allMessages")
              edges {
                node {
                  rowId
                  content
                  organizationId
                  messageTagsByMessageId {
                    __id
                    edges {
                      node {
                        __id
                        tagId
                        messageId
                        tagByTagId {
                          __id
                          rowId
                          name
                          categoryByCategoryId {
                            color
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
`;

const organizationFragment = graphql`
  fragment pagesFragment_organization on Query {
    allOrganizationUsers {
      __id
      edges {
        node {
          organizationByOrganizationId {
            rowId
            slug
          }
        }
      }
    }
  }
`;

const userConfigFragment = graphql`
  fragment pagesFragment_userConfig on Query {
    allUserConfigs {
      edges {
        node {
          defaultOrganization
        }
      }
    }
  }
`;

function Home({ preloadedQuery }) {
  const query = usePreloadedQuery(HomeQuery, preloadedQuery);
  const messages = useFragment(messageFragment, query);
  const organizations = useFragment(organizationFragment, query);
  const userConfig = useFragment(userConfigFragment, query);

  // show editor
  const [edit, setEdit] = useState(false)
  // filter based on tags
  const [tagFilter, setTagFilter] = useState([])
  // add action button in message card, "+ button"
  const [focusedMessage, setFocusedMessage] = useState(false)
  // if user config exists, use as default organization. If not, use first row in organization query
  let focusedOrganization, setFocusedOrganization
  if (userConfig.allUserConfigs?.edges[0]?.node.defaultOrganization > 0) {
    [focusedOrganization, setFocusedOrganization] = useState(userConfig.allUserConfigs?.edges[0]?.node.defaultOrganization)
  } else {
    [focusedOrganization, setFocusedOrganization] = useState(organizations.allOrganizationUsers?.edges[0]?.node?.organizationByOrganizationId.rowId)
  }
  console.log('1')
  const [isMessageTagPending, insertMessageTag] = useMutation(InsertMessageTagMutation);
  console.log('2')
  return (
    <>
      <Nav edit={edit} organizations={organizations.allOrganizationUsers} editClick={() => setEdit(!edit)} setFocusedOrganization={setFocusedOrganization} focusedOrganization={focusedOrganization} />
      <Sidebar
        tagFilter={tagFilter}
        tagClick={(tagId, tagFilter) => {
          // add message to tag if in edit mode, and a message is focused.
          if (edit && focusedMessage) {
            const [messageId, connectionId] = focusedMessage;
            console.log('3')
            insertMessageTag({
              variables: {
                input: {
                  messageId,
                  tagId: tagId,
                  organizationId: focusedOrganization
                },
                connections: [connectionId]
              },
              updater: store => { },
            });
            setFocusedMessage(false)
            // filter messages if not in edit mode
          } else {
            console.log('4')
            if (tagFilter.includes(tagId)) {
              setTagFilter(tagFilter.filter(active => active !== tagId))
            } else {
              setTagFilter([...tagFilter, tagId])
            }
          }
          console.log('5')
        }}
        edit={edit}
        categories={query}
        messages={messages.allMessages}
        focusedOrganization={focusedOrganization}
      />
      <Grid
        as="main"
        gridColumn="content"
        pt={2}
        mx="auto"
        sx={{ textAlign: "center" }}
        width="100%"
      >
        <Tiles edit={edit} tagFilter={tagFilter} messages={messages.allMessages} focusedMessage={focusedMessage} setFocusedMessage={setFocusedMessage} focusedOrganization={focusedOrganization} />
      </Grid>
    </>
  )
}

function Loading() {
  return <div>Loading...</div>;
}

export default withRelay(Home, HomeQuery, {
  // This property is optional.
  error: <>Error</>,
  // Fallback to render while the page is loading.
  // This property is optional.
  fallback: <Loading />,
  // Create a Relay environment on the client-side.
  // Note: This function must always return the same value.
  createClientEnvironment: () => getClientEnvironment(),
  // Gets server side props for the page.
  serverSideProps: async (ctx) => {

    // This is an example of getting an auth token from the request context.
    // If you don't need to authenticate users this can be removed and return an
    // empty object instead.

    return { token: ctx.req.cookies[process.env.COOKIE_NAME] };
  },
  // Server-side props can be accessed as the second argument
  // to this function.
  createServerEnvironment: async (
    ctx,
    // The object returned from serverSideProps. If you don't need a token
    // you can remove this argument.
    { token }
  ) => {
    const { createServerEnvironment } = await import('../lib/server_environment');
    return createServerEnvironment(token);
  },
});