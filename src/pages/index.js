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
  }
`;

const InsertMessageTagMutation = graphql`
  mutation pagesMessageTagMutation($input:CreateMessageTagInput!, $connections: [ID!]!) {
    createMessageTag(input: $input) {
      messageTag @appendNode(connections: $connections, edgeTypeName: "MessageTagsEdge") {
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

const pagesFragment = graphql`
          fragment pagesFragment_messages on Query {
            allOrganizations {
              __id
              edges {
                node {
                  rowId
                  slug
                }
              }
            }
            allMessages {
              __id
              @connection(key: "pagesFragment_allMessages")
              edges {
                node {
                  rowId
                  content
                  messageTagsByMessageId {
                    __id
                    edges {
                      node {
                        __id
                        tagId
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

function Home({ preloadedQuery }) {
  const query = usePreloadedQuery(HomeQuery, preloadedQuery);
  const data = useFragment(pagesFragment, query);
  // show editor
  const [mode, setMode] = useState('view')
  // filter based on tags
  const [tagFilter, setTagFilter] = useState([])
  // add action button in message card, "+ button"
  const [focusedMessage, setFocusedMessage] = useState(false)
  const [focusedOrganization, setFocusedOrganization] = useState(2)
  const [isMessageTagPending, insertMessageTag] = useMutation(InsertMessageTagMutation);

  function navEditClick() {
    if (mode === "edit") {
      setMode('view')
    }
    else {
      setMode('edit')
    }
  }

  function navOrgClick(e) {
    setFocusedOrganization(e.target.value)
  }

  return (
    <>
      <Nav organizations={data.allOrganizations} editClick={navEditClick} navOrgClick={navOrgClick} focusedOrganization={focusedOrganization} />
      <Sidebar
        tagFilter={tagFilter}
        tagClick={(tagId, tagFilter) => {
          // add message to tag if in edit mode, and a message is focused.
          if (mode === "edit" && focusedMessage) {
            const [messageId, connectionId] = focusedMessage;

            insertMessageTag({
              variables: {
                input: {
                  messageId,
                  tagId: tagId
                },
                connections: [connectionId]
              },
              updater: store => { },
            });
            setFocusedMessage(false)
            // filter messages if not in edit mode
          } else {
            if (tagFilter.includes(tagId)) {
              setTagFilter(tagFilter.filter(active => active !== tagId))
            } else {
              setTagFilter([...tagFilter, tagId])
            }
          }
        }}
        edit={mode === 'edit'}
        categories={query}
        messages={data.allMessages}
      />
      <Grid
        as="main"
        gridRow="body"
        gridColumn="content"
        pt={2}
        mx="auto"
        sx={{ textAlign: "center" }}
        width="100%"
      >
        <Tiles edit={mode === 'edit'} tagFilter={tagFilter} messages={data.allMessages} focusedMessage={focusedMessage} setFocusedMessage={setFocusedMessage} focusedOrganization={focusedOrganization} />
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