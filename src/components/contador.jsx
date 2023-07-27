import React from "react";
import '../css/contador.css'


function Contador ({ number }) {
    return (
        <div className="contador">
            {number}
        </div>
    )
}

export default Contador