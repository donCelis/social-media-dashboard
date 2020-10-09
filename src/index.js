import "./styles/app.scss";
import content from "./js/app";

const app = document.querySelector("#root");

const main = () => `${(app.innerHTML = content())}`;

main();
