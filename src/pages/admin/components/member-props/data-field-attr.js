import React from 'react';

const DataFieldAttrs = (props) => { 
    var teenBoard = props.value.teen_board?"Teen Board":"";
    var apprentice = props.value.apprentice?"Apprentice":"";
    if (props.value.teen_board || props.value.apprentice){
        return(
            <li className="list-group-item">
                <span className="fieldLabel">{props.name}:</span>
                <div className="fieldContent">
                    <span className="font-weight-bold">{teenBoard}</span>
                    <span className="font-weight-bold">{apprentice}</span>
                </div>
            </li>
        );
    } else {
        return(
            null
        );
    }
}

export default DataFieldAttrs;