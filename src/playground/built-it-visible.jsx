let visibility = false;

const toggleVisibility = () => {
  visibility = !visibility;
  renderApp();
};

const renderApp = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={toggleVisibility}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && (
        <div>
          <p>Show me, show mee!</p>
        </div>
      )}
    </div>
  );
  ReactDOM.render(template, document.querySelector("#app"));
};

renderApp();