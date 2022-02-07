import React, { useState } from 'react'
import { Textarea, Button, Stack } from "@chakra-ui/react"
import { graphql } from 'react-relay';
import useMutation from './useMutation'
import useStore from "../utils/store";
import dynamic from 'next/dynamic';
import { useRouter } from "next/router";

const InsertMessageMutation = graphql`
  mutation EditorInsertMessageMutation($input:CreateMessageInput!, $connections: [ID!]!) {
    createMessage(input: $input) {
      messages @appendNode(connections: $connections, edgeTypeName: "MessagesEdge") {
        rowId
        content
        organizationId
        loomSharedUrl
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
`;

const UpdateMessageMutation = graphql`
  mutation EditorUpdateMessageMutation($input:UpdateMessageInput!) {
    updateMessage(input: $input) {
      messages {
        rowId
        content
        loomSharedUrl
        organizationId
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
`;

const DynamicLoomSDK = dynamic(() => import('./LoomSDK'), {
  ssr: false,
});

export default function Editor({ id, connections }) {
  const router = useRouter();
  const { organization, tag } = router.query;
  const [isMessagePending, insertMessage] = useMutation(InsertMessageMutation);
  const [isUpdateMessagePending, updateMessage] = useMutation(UpdateMessageMutation);
  const [content, setContent] = useState("");
  const [loomSharedUrl, setLoomSharedUrl] = useState("");

  // Editor submit
  function onSubmit(event) {
    event.preventDefault();
    if (id) {
      updateMessage({
        variables: {
          input: {
            id,
            content,
            loomSharedUrl,
          },
        },
        updater: store => { },
      });
      // Reset the comment text
      setContent('');
    } else {
      insertMessage({
        variables: {
          input: {
            organizationId: organization,
            content,
            loomSharedUrl,
            tags: tag,
          },
          connections: [connections]
        },
        updater: store => { },
      });
      // Reset the comment text
      setContent('');
    }
  }

  return (
    <>
      <div data-cy="editor"><Textarea value={content} onChange={(e) => setContent(e.target.value)} /></div>
      <br /><br /><br />
      <Stack spacing={4} direction='row' align='center'>
        <Button data-cy="save" onClick={onSubmit} width="170px" borderRadius={20}>Save</Button>
        <DynamicLoomSDK {...{ loomSharedUrl, setLoomSharedUrl }} />
      </Stack>
    </>
  )
}