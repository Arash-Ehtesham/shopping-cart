import React from 'react';
import spinner from "../assets/icons/spinner.gif"

const Loader = () => {
    return (
        <div style={{ width: "100%", textAlign: "center" }}>
            <img src={spinner} alt="loader" />
        </div>
    );
};

export default Loader;