import "./App.css";

function App() {
  const headerCssInReact = {
    color: "green",
  };

  return (
    <>
      <h1 className="headerCss">This is test</h1>
      <h1 style={headerCssInReact}>This is test</h1>
    </>
  );
}

export default App;
