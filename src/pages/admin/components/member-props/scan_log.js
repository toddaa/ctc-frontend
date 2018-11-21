import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TabPane, CardTitle } from 'reactstrap';
import Moment from 'moment';

const LogRow = (props) => { 
    //console.log(props.log)
    //var entryNames = new Array("","Front Door","Back Door");
    return(
        <div>
            <h5 className="card-title">{props.log.entry}</h5>
        </div>
    );
}

class ScanLog extends Component {
	constructor(props, context){
		super(props, context);
		//console.log(this.props.scanlog)
	}
    //state = {}

  render() {
    //if (this.state.allLogs != null){
        const logRows = this.props.scanlog
        //.sort((a, b) => a.timeM  - b.timeM )
        .map(h =>
        <LogRow key={h.id.toString()} log={h} />);

    //}

    return (
        <TabPane tabId="3">
            <CardTitle>SCAN LOG</CardTitle>
            {logRows}
        </TabPane>
    );
  }
}


const mapStateToProps = ({ scanlog }) => ({
	scanlog,
});


export default connect(mapStateToProps)(ScanLog);