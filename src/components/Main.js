import React, { Component } from 'react';
import './colors.css';
import { connect } from 'react-redux';

class Main extends Component {

    render() {

        const hrCSS = "lead " + this.props.hrData[2];
        const salesCSS = "lead " + this.props.salesData[2];
        const itCSS = "lead " + this.props.itData[2];
        const rdCSS = "lead " + this.props.rdData[2];
        const adminCSS = "lead " + this.props.adminData[2];

        return (
            <div className="jumbotron jumbotron-fluid">
                <div className="container">
                    <h1 className="display-4">Status</h1>
                    <h3 className={hrCSS}>HR Staff is: {this.props.hrData[1]}</h3>
                    <h3 className={salesCSS}>Sales Staff is: {this.props.salesData[1]}</h3>
                    <h3 className={itCSS}>IT Staff is: {this.props.itData[1]}</h3>
                    <h3 className={rdCSS}>R&D Staff is: {this.props.rdData[1]}</h3>
                    <h3 className={adminCSS}>Admin Staff is: {this.props.adminData[1]}</h3>
                </div>

            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        hrData: state.hr,
        salesData: state.sales,
        itData: state.it,
        rdData: state.rd,
        adminData: state.admin
    }
}

export default connect(mapStateToProps)(Main);