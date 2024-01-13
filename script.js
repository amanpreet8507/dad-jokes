import Header from "./components/Header/header.js";
import MainContent from "./components/MainContent/main-content.js";

const body = `${Header()}
${MainContent()}`;

let root = document.querySelector(".body");
root.innerHTML = body;

