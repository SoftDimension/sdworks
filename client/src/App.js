import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavigationSection/Navbar";
import LeftsideNav from "./components/NavigationSection/LeftsideNav";
import { Routes , Route } from "react-router-dom";
import HomePage from "./components/AllPages/HomePage";
import TodayPage from "./components/AllPages/TodayPage";
import ProjectPage from "./components/AllPages/ProjectPage";

function App() {
  return (
    <>
      <div className="flex">
        <LeftsideNav />

        <div className="w-full container mx-auto">
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/today" element={<TodayPage />} />
            <Route path="/project" element={<ProjectPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
