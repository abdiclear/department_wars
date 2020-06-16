import React, { Component } from 'react';
import { connect } from 'react-redux';
import coded from '../../actions/ITActions';
import { bindActionCreators } from 'redux';
import Department from '../Department';

class ITSection extends Component {
    
    coding = () => {
        this.props.coded();
    }

    render() {

        return (
            <div>
                <h1>IT Department</h1>
                <Department data={this.props.data[0]} />
                <button className="btn btn-primary" onClick={this.coding}>Do IT Things</button>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.it
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        coded: coded
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ITSection);