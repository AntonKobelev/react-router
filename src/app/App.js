import NavBar from "./components/navBar";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
import Posts from "./components/posts";
import Stats from "./components/stats";
import NotFound from "./components/notFound";

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
        <Route path="/posts/:postId?" component={Posts}></Route>
        <Route path="/404" component={NotFound}></Route>
        <Redirect from="/admin" to="/dashboard"></Redirect>
        <Redirect to="/404"></Redirect>
        
      </Switch>
    </div>
  );
}

export default App;
