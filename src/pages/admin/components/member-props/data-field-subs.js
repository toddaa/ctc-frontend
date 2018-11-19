import React from 'react';

const DataFieldSubs = (props) => { 
    var emailProgram = props.value.programs?"Program Emails":"";
    var emailFundraising = props.value.fundraising?"Fundraising Emails":"";
    if (props.value.programs || props.value.fundraising){
        return(
            <li className="list-group-item">
                <span className="fieldLabel">{props.name}:</span>
                <div className="fieldContent">
                    <span className="font-weight-bold">{emailProgram}</span>
                    <span className="font-weight-bold">{emailFundraising}</span>
                </div>
            </li>
        );
    } else {
        return(
            null
        );
    }
}

export default DataFieldSubs;