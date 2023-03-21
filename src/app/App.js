import NavBar from "./components/navBar";
import { Route, Switch } from "react-router-dom";
import Home from "./components/home";
import Dashboard from "./components/dashboard";
import Login from "./components/login";
//import Posts from "./components/posts";
import Stats from "./components/stats";
import PostsList from "./components/postsList";
import Post from "./components/post";

const posts = [
  { id: 1, label: "post1" },
  { id: 2, label: "post2" },
  { id: 3, label: "post3" },
];

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
          path="/posts/:postId"
          render={(props) => <Post posts={posts} {...props} />}
        ></Route>
        <Route
          path="/posts"
          render={(props) => <PostsList posts={posts} {...props} />}
        ></Route>
      </Switch>
    </div>
  );
}

export default App;
