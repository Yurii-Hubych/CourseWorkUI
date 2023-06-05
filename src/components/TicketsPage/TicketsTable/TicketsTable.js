import "./TicketsTable.css";
import {useEffect, useState} from "react";
import api from "../../../api/axiosConfig";

const TicketsTable = () => {

    const [tickets, setTickets] = useState([]);

    const getTickets = async () =>{
        try {
            const response = await api.get("tickets");
            console.log(response.data)
            setTickets(response.data);
        }catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        getTickets();
    }, [])

    const handleTicketDeleteClick = async (itemId) => {
        try {
            const response = await fetch(`https://coursework-8hlk.onrender.com/tickets/${itemId}`, {
                method: 'DELETE'
            });
            // обробка відповіді сервера
            const data = await response.text();
            console.log(data);
            setTickets(tickets.filter(item => item.idString !== itemId));
        } catch (error) {
            console.log(error);
        }
    };

    const [searchFlightNumber, setSearchFlightNumber] = useState('');
    const [searchDepartureDate, setSearchDepartureDate] = useState('');

    const handleSearch = () => {
        const filtered = tickets.filter(ticket => {
            return (!searchFlightNumber || ticket.flightNumber.toString().startsWith(searchFlightNumber)) && (!searchDepartureDate || ticket.departureDate.split('T')[0].startsWith(searchDepartureDate));
        });
        setFilteredTickets(filtered);
    }


    useEffect(() => {
        handleSearch();
    }, [searchFlightNumber, searchDepartureDate]);

    useEffect(() => {
        setFilteredTickets(tickets);
    }, [tickets]);

    const [filteredTickets, setFilteredTickets] = useState([]);

    return (
        <div className="main-part">
            <div className="control-panel">
                <div>
                    <p>Пошук за номером рейсу</p>
                    <input type="text" value={searchFlightNumber} onChange={event => setSearchFlightNumber(event.target.value)} />
                </div>
                <div>
                    <p>Пошук за датою вильоту</p>
                    <input type="text" value={searchDepartureDate} onChange={event => setSearchDepartureDate(event.target.value)} />
                </div>
            </div>
            <table className="tickets-table">
                <th className="table-head">
                    <td className="first-td">№</td>
                    <td>Прізвище</td>
                    <td>Ім'я</td>
                    <td>По-батькові</td>
                    <td>Дата вильоту</td>
                    <td>Номер рейсу</td>
                    <td>Пункт призначення</td>
                    <td></td>
                </th>
                <tbody>
                {filteredTickets.map((ticket, index) => (
                    <tr key={ticket.idString} className="table-row">
                        <td data-label="№"><p>{index + 1}</p></td>
                        <td data-label="Прізвище"><p>{ticket.secondName}</p></td>
                        <td data-label="Ім'я"><p>{ticket.firstName}</p></td>
                        <td data-label="По-батькові"><p>{ticket.middleName}</p></td>
                        <td data-label="Дата вильоту"><p>{ticket.departureDate.split('T')[0]}</p></td>
                        <td data-label="Номер рейсу"><p>{ticket.flightNumber}</p></td>
                        <td data-label="Пункт призначення"><p>{ticket.destination}</p></td>
                        <td data-label="" key={ticket.idString} onClick={() => handleTicketDeleteClick(ticket.idString)}><p>Видалити</p></td>
                    </tr>

                ))}
                </tbody>
            </table>
        </div>
    )
}

export default TicketsTable