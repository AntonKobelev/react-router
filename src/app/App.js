import NavBar from "./components/navBar";
import { Route } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Posts from "./components/posts";

function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Route exact path="/" component={Home}></Route>
      <Route path="/dashboard" component={Dashboard}></Route>
      <Route path="/login" component={Login}></Route>
      <Route path="/posts" component={Posts}></Route>
    </div>
  );
}

export default App;
