import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import LineChart from './LineChart';

function MainContent({ orders, userCount, userPercent}) {
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
                            <h4></h4>
                        </div>
                        <div className="progresss">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="percentage">
                                <p className='mb-0'>+81%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="visits">
                    <div className="status">
                        <div className="info">
                            <h3>Users</h3>
                            <h4>{userCount}</h4>
                        </div>
                        <div className="progresss">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="percentage">
                                <p className='mb-0'>{userPercent}%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="searches">
                    <div className="status">
                        <div className="info">
                            <h3>Flights Delayed</h3>
                            <h4></h4>
                        </div>
                        <div className="progresss">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div className="percentage">
                                <p className='mb-0'>+11.8%</p>
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
                <Link to="/flights" href="#">Show All</Link>
            </div>
            {/* End of Today's Flight */}
        </main>
    );
}

export default MainContent;

