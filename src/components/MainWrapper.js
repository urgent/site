import { useState, useEffect } from "react";
import MessageBoard from "../components/MessageBoard";
import Nav from "../components/Nav";
import Sidebar from "../components/Sidebar";

import { listCategories } from '../../graphql/listCategories';
import { listMessages } from '../../graphql/listMessages';

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

  }

  async function fetchMessages() {

  }

  return (
    <section className="originContainer">
      <Nav />
      <div className="mainWrapper">
        <Sidebar categories={categories} />
        <MessageBoard messages={messages} />
      </div>
    </section>
  );
}
