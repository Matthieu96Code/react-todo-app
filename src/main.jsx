import React from "react";
import ReactDOM from "react-dom/client";
import '@/styles/app.css';

import TodoApp from '@/components/TodoApp';
import Navbar from "@/components/Navbar";
import Modal from "@/components/Modal";

const domContainer = document.getElementById("root");
const root = ReactDOM.createRoot(domContainer);
root.render(
  <React.StrictMode>
    <Navbar />
    <Modal />
    <TodoApp />
  </React.StrictMode>
);