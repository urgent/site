import React from "react";
import MessagesDisplayKTL from "../components/MessagesDisplayKTL";
import CategorySidebarKTL from "../components/CategorySidebarKTL";

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <MessagesDisplayKTL />
      <CategorySidebarKTL />
    </div>
  )
}
