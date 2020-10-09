import { dataStats } from "../../db/data";
import stat from "./stat";

const stats = () => {
  return `
  <section class="stats py-4">
    <div class="container">
      <h4 class="mb-4">Overview - Today</h4>
      <section class="row">
        ${dataStats.map((element) => stat(element)).join("")}
      </section>
    </div>
  </section>
  `;
};

export default stats;
