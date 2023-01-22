import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/NavigationSection/Navbar";
import LeftsideNav from "./components/NavigationSection/LeftsideNav";
import { Routes , Route, useNavigation, useLocation, useNavigate } from "react-router-dom";
import HomePage from "./components/AllPages/HomePage";
import TodayPage from "./components/AllPages/TodayPage";
import ProjectPage from "./components/AllPages/ProjectPage";
import LoginPage from "./components/AllPages/LoginPage";
import ProfilePage from "./components/AllPages/ProfilePage";
import { useEffect, useState } from "react";

function App() {
  // const location = useLocation();
  // console.log(location.pathname)
    // console.log(EmployeeDetails);
    const location = useLocation();
    const navigate = useNavigate();
    // console.log(location.pathname)
  
    const callAboutPage = async () => {
      try {
        const res = await fetch("/today", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-type": "application/json"
          },
          credentials: "include"
        });
  
        const data = await res.json();
  
        setuserData(data);
  
        if (!res.status === 200) {
          const error = new Error(res.error);
          throw error;
        } else if (res.status === 200) {
          navigate("/")
        }
      } catch (err) {
        console.log(err);
        navigate("/login");
      }
    }
  
    useEffect(() => {
  
      callAboutPage();
  
    }, []);
  
    const [toogletab, settoogletab] = useState(1);
    const [userData, setuserData] = useState({});
  
  return (
    <>
      <div className="flex">
        {location.pathname === "/login" ? null : <LeftsideNav />}

        <div className="w-full h-5/6 ml-5 container mx-auto">
        {location.pathname === "/login" ? null : <Navbar className="Navbar__Wrapper" /> }
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/today" element={<TodayPage />} />
            <Route path="/project" element={<ProjectPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
      {/* <Routes>
        
      </Routes> */}
    </>
  );
}

export default App;
