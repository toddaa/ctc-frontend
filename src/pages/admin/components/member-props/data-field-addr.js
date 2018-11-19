import React from 'react';

const DataFieldAddr = (props) => { 
    return(
        <li className="list-group-item">
            <span className="fieldLabel">{props.name}:</span>
            <div className="fieldContent">
                <span className="font-weight-bold">{props.value.address1}</span>
                <span className="font-weight-bold">{props.value.address2}</span>
                <span className="font-weight-bold">{props.value.city}, {props.value.state}  {props.value.zip}</span>
                <span className="font-weight-bold">{props.value.country}</span>
            </div>
        </li>
    );
}

export default DataFieldAddr;