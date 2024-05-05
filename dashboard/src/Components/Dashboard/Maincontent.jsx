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
            <h1>Dashboard</h1>
            <div className="analyse">
                <div className="sales">
                    <div className="status">
                        <div className="info">
                            <h3>Total Sales</h3>
                            <h1>PHP65,024</h1>
                        </div>
                        <div className="progresss">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="percentage">
                                <p>+81%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="visits">
                    <div className="status">
                        <div className="info">
                            <h3>Waiting List</h3>
                            <h1>900</h1>
                        </div>
                        <div className="progresss">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="percentage">
                                <p>+9%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="searches">
                    <div className="status">
                        <div className="info">
                            <h3>Completed Flights</h3>
                            <h1>1,923</h1>
                        </div>
                        <div className="progresss">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="percentage">
                                <p>+11.8%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <LineChart /> 
            

            {/* Today's Flight */}
             <div className="recent-orders">
                <h2>Today's Flight</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Destination</th>
                            <th>Flight Number</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map((order, index) => (
                           <tr key={index}>
                           <td>{order.destinationName}</td>
                           <td>{order.flightNumber}</td>
                           <td>{order.flightDate}</td>
                           <td className={getStatusColor(order.status)}>{order.status}</td>
                           <td className="primary">Details</td>
                       </tr>
                        ))}
                    </tbody>
                </table>
                <a href="#">Show All</a>
            </div>
            {/* End of Today's Flight */}
        </main>
    );
}

export default MainContent;

