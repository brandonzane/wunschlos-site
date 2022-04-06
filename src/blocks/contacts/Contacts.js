import React from 'react';

const Contacts = () => {
    return (
        <div className="contacts">
            <div className="contacts-items">
                <div className="contacts-item">
                    <div className="contacts-item-description">
                        <p>
                            <a href="mailto:info@digitol.co.zw">info@digitol.co.zw</a>
                        </p>
                        <p>
                            <a href="mailto:brandon@digitol.co.zw">brandon@digitol.co.zw</a>
                        </p>
                    </div>

                    <div className="contacts-item-title">
                        <h6>Email</h6>
                    </div>
                </div>

                <div className="contacts-item">
                    <div className="contacts-item-description">
                        <p>Suite 16, Thompson Office Block</p>
                        <p>17 Philips Avenue Belgravia, Harare</p>
                        <p>Zimbabwe</p>
                    </div>

                    <div className="contacts-item-title">
                        <h6>Address</h6>
                    </div>
                </div>

                <div className="contacts-item">
                    <div className="contacts-item-description">
                        <p>
                            <a href="tel:+263 788 583 311">+263 788 583 311</a>
                        </p>
                    </div>

                    <div className="contacts-item-title">
                        <h6>Phone</h6>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
