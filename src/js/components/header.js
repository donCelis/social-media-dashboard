import on from "../../tools/on";

const header = () => {
  /* 
    //includes => className -> devuelve un string
    //contains => classList -> devuelve un arreglo
    //console.log(e.target.className.includes("btn"));
    //console.log(e.target.classList.contains("btn"));
  */

  //DOMContentLoaded
  //readystatechange
  on(
    "DOMContentLoaded",
    "",
    () => {
      const currentTheme = localStorage.theme;
      if (currentTheme) {
        document.querySelector("html").dataset.theme = currentTheme;
        if (currentTheme === "light") {
          document.getElementById("checkbox").checked = true;
        }
      }
    },
    true
  );

  on(
    "change",
    "checkbox",
    (e) => {
      let state = "";
      e.target.checked
        ? ((state = "light"), (localStorage.theme = "light"))
        : ((state = "dark"), (localStorage.theme = "dark"));
      document.querySelector("html").dataset.theme = state;
    },
    false
  );

  return `
  <header class="header">
    <div class="container">
      <section class="header__content pt-4 pb-4"> 
        <article>
          <h4 class="m-0">
            Social Media Dashboard
          </h4>
          <small class="m-0">
            Total Followers: 23,004
          </small>
        </article>
        <div class="theme-switch-wrapper">
          <strong>Dark Mode</strong>
          <label class="theme-switch" for="checkbox">
            <input type="checkbox" id="checkbox">
            <div class="slider round"></div>
          </label>
        </div>
      </section>
    </div>
  </header>
`;
};

export default header;
