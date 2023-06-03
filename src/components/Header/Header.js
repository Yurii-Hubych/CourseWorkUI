import "./Header.css";
import { useNavigate } from "react-router-dom";

const Header = () => {

    const navigate = useNavigate();

    const goToMainPageClick = () => {
        navigate('/');
    }

    const goToAddTicketPageClick = () => {
        navigate('/addTicket');
    }

    return (
        <div className="header">
            <div>Skyrocket flights</div>
            <div onClick={goToMainPageClick}>Головна сторінка</div>
            <div onClick={goToAddTicketPageClick}>Створити заявку</div>
        </div>
    )
}

export default Header