import React from 'react'

function Icon(props) {
    return (
        <div className="icon" style={{ background: props.color }}>
            <div className="icon-pic"> {props.icon}</div>
            <p className="icon-text"> {props.name}</p>
        </div>
    )
}

export default Icon