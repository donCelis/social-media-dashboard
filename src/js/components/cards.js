import { dataCounter } from "../../db/data";
import card from "./card";

const cards = () => `
  <main class="followers">
    <div class="container">
      <section class="row text-center">
        ${dataCounter.map((element) => card(element)).join("")}
      </section>
    </div>
  </main>
`;

export default cards;
