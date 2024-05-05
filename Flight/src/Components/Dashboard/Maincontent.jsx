import React from 'react';
import './admindash.css';
import LineChart from './LineChart';

function MainContent({ orders }) {
    const getStatusColor = (status) => {
        switch (status) {
            case 'Cancelled':
                return 'danger';
            case 'Delayed':
                return 'warning';
            case 'Departed':
                return 'success';
            default:
                return '';
        }
    };
    
    return (
        <main>
            <h1>Flight Managements</h1>

            <LineChart /> 
            

            {/* Today's Flight */}
             <div className="recent-orders">
                <h2>Today's Flight</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Flights From</th>
                            <th>AircraftID</th>
                            <th>Type</th>
                            <th>ETD</th>
                            <th>ETA</th>
                            <th>ATD</th>
                            <th>ATA</th>
                            <th>Status</th>
                            <th>Reason</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                           <tr key={index}>
                               <td>{order.destinationName}</td>
                               <td>{order.aircraftID}</td>
                               <td>{order.type}</td>
                               <td>{order.ETD}</td>
                               <td>{order.ETA}</td>
                               <td>{order.ATD}</td>
                               <td>{order.ATA}</td>
                               <td className={getStatusColor(order.status)}>{order.status}</td>
                               <td>{order.reason}</td>
                               <td className="primary">Details</td>
                           </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* End of Today's Flight */}
        </main>
    );
}

export default MainContent;


