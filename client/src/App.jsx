import { Routes, Route } from "react-router-dom";
import Login from "./pages/login.jsx";
import Register from "./pages/Register.jsx";
import Home from "./pages/Home.jsx"; // <-- import Home
import PostList from "./pages/postList.jsx";
import PostView from "./pages/postView.jsx";
import PostForm from "./pages/postForm.jsx";
import Profile from "./pages/profile.jsx";
import Categories from "./pages/categories.jsx"; 
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 p-6">
        <Routes>
          <Route path="/" element={<Home />} /> {/* <-- default homepage */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/post-view/:id" element={<PostView />} />
          <Route path="/post-form" element={<PostForm />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
