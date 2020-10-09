const stat = ({ name = "", icon = "", counter = 0, rank = 0, state = "" }) => {
  let stateClass = state ? "success" : "danger";
  state = stateClass;
  return `
  <div class="col-sm-12 col-md-6 col-lg-3 mb-4">
    <div class="stats__item fade-hover">
      <div class="stats__item-header">
        <p class="m-0">${name}</p>
        <img class="img-fluid" src="${icon}" alt="Social Icon">
      </div>
      <div class="stats__item-body">
        <h3 class="m-0">${counter}</h3>
        <small class="${state}">${rank}%</small>
      </div>
    </div>
  </div>
  `;
};

export default stat;
