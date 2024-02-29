import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import React from "react";
import ReactDOM from "react-dom";

import Nav from "./Nav";
import Sidebar from "./Sidebar.js";
import Content from "./Content.js";
import Footer from "./Footer.js";

const navElement = document.getElementById("nav");
const nav = createRoot(navElement);
const sideBarElement = document.getElementById("sidebar");
const sideBar = createRoot(sideBarElement);
const contentElement = document.getElementById("content");
const content = createRoot(contentElement);
const footerElement = document.getElementById("footer");
const footer = createRoot(footerElement);

nav.render(<Nav />);
sideBar.render(<Sidebar />);
content.render(<Content />);
footer.render(<Footer />);
