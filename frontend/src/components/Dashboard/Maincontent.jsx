import React from 'react';

function MainContent() {
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

            {/* New Users Section */}
            <div className="new-users">
                <h2>New Users</h2>
                <div className="user-list">
                    <div className="user">
                        <img src="img/hasbullah.jpg" alt="user" />
                        <h2>Jack</h2>
                        <p>54 Min Ago</p>
                    </div>
                    <div className="user">
                        <img src="img/hasbullah.jpg" alt="user" />
                        <h2>Amir</h2>
                        <p>3 Hours Ago</p>
                    </div>
                    <div className="user">
                        <img src="img/hasbullah.jpg" alt="user" />
                        <h2>Ember</h2>
                        <p>6 Hours Ago</p>
                    </div>
                    <div className="user">
                        <img src="img/plus.png" alt="more" />
                        <h2>More</h2>
                        <p>New User</p>
                    </div>
                </div>
            </div>
            {/* End of New Users Section */}

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
                    <tbody></tbody>
                </table>
                <a href="#">Show All</a>
            </div>
            {/* End of Today's Flight */}
        </main>
    );
}

export default MainContent;