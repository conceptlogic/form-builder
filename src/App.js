import ElementTray from "./ElementTray";
import FormCanvas from "./FormCanvas";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Form Elements</h1>
        <p>
          Drag elements on to the form canvas to build and customize your form.
        </p>
      </header>

      <ElementTray />

      <h1>Form Canvas</h1>
      <FormCanvas />
    </div>
  );
};

export default App;
