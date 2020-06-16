import React, { Component } from 'react';
import { connect } from 'react-redux';
import adminstrated from '../../actions/AdminActions';
import { bindActionCreators } from 'redux';
import Department from '../Department';

class AdminSection extends Component {

    administrating = () => {
        this.props.adminstrated();
    }

    render() {

        return (
            <div>
                <h1>Adminstration Department</h1>
                <Department data={this.props.data[0]} />
                <button className="btn btn-primary" onClick={this.administrating}>Do Admin Things</button>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.sales
    }
}

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        adminstrated: adminstrated
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(AdminSection);