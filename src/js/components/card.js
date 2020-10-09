const card = ({
  name = "",
  icon = "",
  user = "",
  counter = 0,
  rank = 0,
  selector = "",
  state = "",
  text = "",
}) => {
  let stateClass = state ? "success" : "danger";
  state = stateClass;
  return `
    <div class="col-sm-12 col-md-6 col-lg-3 my-4">
      <article class="followers__card ${selector} fade-hover">
        <small>
          <span
            ><img
              class="img-fluid"
              src="${icon}"
              alt="${name}"
          /></span>
          ${user}
        </small>
        <div class="my-3">
          <h1>${counter}</h1>
          <p>${text}</p>
        </div>
        <h6 class="${state}">${rank} Today</h6>
      </article>
    </div>
  `;
};

export default card;
