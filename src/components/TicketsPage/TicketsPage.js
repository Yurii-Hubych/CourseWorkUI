import React from "react";
import "./TicketsPage.css"
import TicketsTable from "./TicketsTable/TicketsTable";

const TicketsPage = () => {
    return (
        <div className="add-ticket-page">
            <TicketsTable/>
        </div>
    )
}

export default TicketsPage;