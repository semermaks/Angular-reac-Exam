import { BrowserRouter, Switch, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AddEdit from "./pages/AddEdit";
import Student from "./pages/Student";
import Home from "./pages/Home";
import View from "./pages/View";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer position="top-left" />
        <Switch>
          <Route path="/update/:id" component={AddEdit} />
          <Route exact path="/student" component={Student} />
          <Route exact path="/" component={Home} />
          <Route path="/view/:id" component={View} />
          <Route path="/addContact" component={AddEdit} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
