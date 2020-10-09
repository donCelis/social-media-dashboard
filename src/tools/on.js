const on = (event, selector = "", process, state) => {
  document.addEventListener(
    event,
    (e) => {
      if (event === "DOMContentLoaded" || event === "readystatechange") {
        return process.call(this, e);
      } else {
        if (
          e.target.id.includes(selector) ||
          e.target.className.includes(selector)
        ) {
          return process.call(this, e);
          //return process.apply(this, [e]);
        }
      }
    },
    state
  );
};

export default on;
