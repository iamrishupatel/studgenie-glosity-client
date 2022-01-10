import Navigation from "./components/Navigation";
import NoticeBoard from "./components/NoticeBoard";
import { useState } from "react";
import Calendar from "react-calendar";
import Events from "./components/Events";
import Header from "./components/Header";
import { HiOutlineExternalLink } from "react-icons/hi";

function App() {
  const [value] = useState(new Date());
  const [isNavOpen, setIsNavOpen] = useState(false);
  const openNav = () => {
    setIsNavOpen(true);
  };
  return (
    <div className="dashboard">
      <Navigation isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <main>
        <Header openNav={openNav} />
        <h1>Dashboard</h1>
        <div className="dashboard__notices">
          <NoticeBoard />
          <Calendar
            className="dashboard__calendar"
            defaultView="month"
            value={value}
          />
        </div>

        <div className="dashboard__events">
          <div className="dashboard__events-header">
            <h3>Important Events</h3>
            <p>
              See all Events <HiOutlineExternalLink />
            </p>
          </div>
          <Events />
        </div>
      </main>
    </div>
  );
}

export default App;
