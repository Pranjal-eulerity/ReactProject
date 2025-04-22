import BlogPost from "./components/BlogPost";
import MainView from "./components/pages";
import UserCard from "./components/UserCard";

function App() {
  return (
    <div className="App">
      <MainView />
      <UserCard/>
      <BlogPost/>
    </div>
  );
}

export default App;
