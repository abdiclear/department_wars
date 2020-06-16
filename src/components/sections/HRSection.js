import React, { Component } from 'react';
import { connect } from 'react-redux';
import resourced from '../../actions/HRActions';
import { bindActionCreators } from 'redux';
import Department from '../Department';

class HRSection extends Component {
    
    resourcing = () => {
        this.props.resourced();
    }

    render() {

        return (
            <div>
                <h1>Human Resources Department</h1>
                <Department data={this.props.data[0]} />
                <button className="btn btn-primary" onClick={this.resourcing}>Do Human Resource Things</button>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.hr
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        resourced: resourced
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HRSection);