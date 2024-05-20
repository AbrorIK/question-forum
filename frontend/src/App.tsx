import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { useState } from "react";
import { Overview } from "./components/Overview";
import { QuestionForum } from "./components/QuestionForum";
import { Users } from "./components/Users";
import axios from "axios";

function App() {
  const [currentPage, setCurrentPage] = useState("Overview");

  const navBarItems = ["Overview", "Question Forum", "Users"];
  const menuItems = ["Settings", "Profile", "Sign out"];

  // Function to handle navigation based on selected nav item
  const handleNavigation = (item: string) => {
    setCurrentPage(item);
  };

  // Render different main pages based on current page state
  const renderMainPage = () => {
    switch (currentPage) {
      case "Question Forum":
        return <QuestionForum />;
      case "Users":
        return <Users />;
      default:
        return <Overview />;
    }
  };

  return (
    <div>
      <Header
        navBarItems={navBarItems}
        menuItems={menuItems}
        handleNavigation={handleNavigation}
      />
      {renderMainPage()}
      <Footer />
    </div>
  );
}

export default App;
