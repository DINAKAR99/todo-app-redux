import logo from "./logo.svg";
import "./App.css";
import { Container } from "react-bootstrap";
import AddToDo from "./components/AddToDo";
import DisplayTodos from "./components/DisplayTodos";
import { Provider } from "react-redux";
import store from "./redux/store";
import EditableText from "./components/EditableText";

function App() {
  return (
    <Provider store={store}>
      <Container className="py-3">
        <AddToDo />
        <DisplayTodos />
      </Container>
    </Provider>
  );
}

export default App;
