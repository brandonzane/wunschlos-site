import React from 'react';

const Copyright = () => {
    return (
        <div className="copyright">
            <p>© 2022 Wunschlos <a className="secondary-semibold" href={ process.env.PUBLIC_URL + "/contacts" }> | CONTACT US |</a></p>
        </div>
    );
};

export default Copyright;
