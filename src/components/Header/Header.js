import "./Header.css";
import { useNavigate } from "react-router-dom";
import { ReactSVG } from 'react-svg';
import Logo from '../../resources/Logo.svg';

const Header = () => {

    const navigate = useNavigate();

    const goToMainPageClick = () => {
        navigate('/');
    }

    const goToAddTicketPageClick = () => {
        navigate('/addTicket');
    }

    const goToAboutUsPageClick = () => {
        navigate('/aboutUs');
    }

    const goToTicketsPageClick = () => {
        navigate('/tickets');
    }

    return (
        <div className="header">
            <div><img src={require("../../resources/logo-min.png")} alt="err" onClick={goToMainPageClick}/></div>
            <div className="align-header-left">
                <div onClick={goToMainPageClick}><p>Головна сторінка</p></div>
                <div onClick={goToAboutUsPageClick}><p>Про нас</p></div>
                <div onClick={goToTicketsPageClick}><p>Переглянути квитки</p></div>
                <div onClick={goToAddTicketPageClick}><p>Створити заявку</p></div>
            </div>
        </div>
    )
}

export default Header