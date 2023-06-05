import './App.css';
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AddTicketPage from "./components/AddTicketPage/AddTicketPage";
import TicketsPage from "./components/TicketsPage/TicketsPage";
import AboutUsPage from "./components/AboutUsPage/AboutUsPage";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<HomePage/>} />
              <Route path="/aboutUs" element={<AboutUsPage/>}/>
              <Route path="tickets" element={<TicketsPage/>}/>
              <Route path="/addTicket" element={<AddTicketPage />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
