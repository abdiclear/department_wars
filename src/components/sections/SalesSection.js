import React, { Component } from 'react';
import { connect } from 'react-redux';
import sold from '../../actions/SalesActions';
import { bindActionCreators } from 'redux';
import Department from '../Department';

class SalesSection extends Component {

    selling = () => {
        this.props.sold();
    }

    render() {

        return (
            <div>
                <h1>Sales Department</h1>
                <Department data={this.props.data[0]} />
                <button className="btn btn-primary" onClick={this.selling}>Do Sales Things</button>
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
        sold: sold
    },dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps)(SalesSection);