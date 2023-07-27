import React from "react";
import '../css/button.css'

function Button ({ texto, isReset, fx }) {
    return (
        <button className={` btn ${isReset ? 'btn-reset' : 'btn-add'}` }
        onClick= {fx} >
            {texto}
        </button>
    )
}

export default Button