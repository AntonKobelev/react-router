import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Posts from "./components/posts";
import Stats from "./components/stats";

function App() {
  return (
    <div>
      <NavBar />
      <h1>App</h1>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route path="/dashboard/stats" component={Stats}></Route>
        <Route path="/dashboard" component={Dashboard}></Route>
        <Route path="/login" component={Login}></Route>
        <Route
          path="/posts/:postId?/:display?" component={Posts}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
