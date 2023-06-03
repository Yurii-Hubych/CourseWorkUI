import './App.css';
import Layout from "./components/Layout";
import {Route, Routes} from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import AddTicketPage from "./components/AddTicketPage/AddTicketPage";

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="/addTicket" element={<AddTicketPage />} />
          </Route>
      </Routes>
    </div>
  );
}

export default App;
