import React from "react";
import "./HomePage.css"
import TicketsTable from "../TicketsPage/TicketsTable/TicketsTable";
import { useNavigate } from "react-router-dom";

const HomePage = () => {

    const navigate = useNavigate();

    const goToAddTicketPageClick = () => {
        navigate('/addTicket');
    }

    const goToAboutUsPageClick = () => {
        navigate('/aboutUs');
    }

    return (
        <div className="home-page">
            <div className="home-page-left-side">
                <div className="home-page-left-side-text">
                    <p>ARE YOU</p>
                    <p>READY FOR</p>
                    <p>TAKE-OFF?</p>
                </div>
                <div className="home-page-left-side-buttons">
                    <div className="home-page-left-side-button1" onClick={goToAddTicketPageClick}>Створити заявку</div>
                    <div className="home-page-left-side-button2" onClick={goToAboutUsPageClick}>Про нас</div>
                </div>
            </div>
        </div>
    )
}

export default HomePage;