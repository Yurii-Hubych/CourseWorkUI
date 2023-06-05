import React, { useState } from "react";
import "./AddTicketForm.css"

const AddTicketForm = () => {
    const [flightNumber, setFlightNumber] = useState('');
    const [destination, setDestination] = useState('');
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');
    const [middleName, setMiddleName] = useState('');
    const [departureDate, setDepartureDate] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const ticketData = {
            firstName,
            secondName,
            middleName,
            departureDate,
            destination,
            flightNumber: parseInt(flightNumber)
        };
        console.log(JSON.stringify(ticketData))
        try {
            const response = await fetch('https://coursework-8hlk.onrender.com/tickets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ticketData)
            });
            const data = await response.json();
            // обробка відповіді сервера
            clearForm();
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    const clearForm = () => {
        setFlightNumber('');
        setDestination('');
        setFirstName('');
        setSecondName('');
        setMiddleName('');
        setDepartureDate('');
    }

    const [flightNumberError, setFlightNumberError] = useState(null);

    const handleFlightNumberChange = (event) => {
        let value = event.target.value;
        if (value < -9223372036854775808) {
            value = -9223372036854775808;
        } else if (value > 9223372036854775807) {
            value = 9223372036854775807;
            setFlightNumberError('Номер рейсу не може бути таким великим');
        } else {
            setFlightNumberError(null);
        }
        setFlightNumber(value);
    };

    return (
        <form className="add-ticket-form" onSubmit={handleSubmit}>
            <label className="add-ticket-form-field1">
                Номер рейсу:
                <input type="number" value={flightNumber} onChange={handleFlightNumberChange} />
                {flightNumberError && <div>{flightNumberError}</div>}
            </label>
            <br />
            <label className="add-ticket-form-field2">
                Пункт призначення:
                <input type="text" value={destination} onChange={event => setDestination(event.target.value)} />
            </label>
            <br />
            <label className="add-ticket-form-field3">
                Ім'я:
                <input type="text" value={firstName} onChange={event => setFirstName(event.target.value)} />
            </label>
            <br />
            <label className="add-ticket-form-field4">
                Прізвище:
                <input type="text" value={secondName} onChange={event => setSecondName(event.target.value)} />
            </label>
            <br />
            <label className="add-ticket-form-field5">
                По-батькові:
                <input type="text" value={middleName} onChange={event => setMiddleName(event.target.value)} />
            </label>
            <br />
            <label className="add-ticket-form-field6">
                Дата вильоту:
                <input type="date" value={departureDate} onChange={event => setDepartureDate(event.target.value)} />
            </label>
            <br />
            <input type="submit" value="Submit" className="add-ticket-form-submit" />
        </form>
    )
}

export default AddTicketForm;
