import AddNotes from "./components/AddNotes";
import CardContainer from "./components/CardContainer";
import Header from "./components/Header";

function App() {
  return (
    <div className="bg-dark w-100 vh-100">
      <Header />
      <div className="container">
        <div className="row d-flex justify-content-center">
          <AddNotes />
          <CardContainer />
        </div>
      </div>
    </div>
  );
}

export default App;
