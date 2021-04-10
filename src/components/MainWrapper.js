import { useState, useEffect } from "react";
import MessageBoard from "../components/MessageBoard";
import Sidebar from "../components/Sidebar";
import { API } from "aws-amplify";
import { listCategorys, listMessages } from "../../graphql/queries";

// this component pulls categories from AWS API
export default function MainWrapper() {
  // set state to hold categories
  const [categories, setCategories] = useState([]);

  // set state to hold messages
  const [messages, setMessages] = useState([]);

  // fetch categories upon component load
  useEffect(() => {
    fetchCategories();
    fetchMessages();
  }, []);

  // fetch call to Graphql API
  async function fetchCategories() {
    const categoryData = await API.graphql({
      query: listCategorys,
    });
    setCategories(categoryData.data.listCategorys.items);
  }

  async function fetchMessages() {
    const messageData = await API.graphql({
      query: listMessages,
    });
    // console.log(messageData);
    setMessages(messageData.data.listMessages.items);
  }

  return (
    <div className="mainWrapper">
      <Sidebar categories={categories} />
      <MessageBoard messages={messages} />
    </div>
  );
}
