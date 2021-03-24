import React from "react";
import MessageBoard from "../components/MessageBoard";
import Sidebar from "../components/Sidebar";


export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <MessageBoard />
      <Sidebar />
    </div>
  )
}
