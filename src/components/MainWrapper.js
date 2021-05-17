import Nav from "../components/Nav";
import { graphql, useFragment } from 'react-relay';


// this component pulls categories from AWS API
export default function MainWrapper({ messages }) {
  const data = useFragment(
    graphql`
      fragment MainWrapperFragment_messages on query_root {
        messages_connection {
          edges {
            node {
              message
            }
          }
        }
      }
    `, messages
  );

  return (
    <section className="originContainer">
      <Nav />
      <div className="mainWrapper" style={{ color: "black" }}>
        {data.messages_connection.edges[0].node.message}
      </div>
    </section>
  );
}
