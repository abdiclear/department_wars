import React, { Component } from 'react';
import { connect } from 'react-redux';
import researched from '../../actions/RDActions';
import { bindActionCreators } from 'redux';
import Department from '../Department';

class RDSection extends Component {
    
    researching = () => {
        this.props.researched();
    }

    render() {

        return (
            <div className="table-responsive">
                <h1>Research and Development Department</h1>
                <Department data={this.props.data[0]} />
                <button className="btn btn-primary" onClick={this.researching}>Do Research/Develop Things</button>
            </div>

        )
    }
}

function mapStateToProps(state) {
    return {
        data: state.rd
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        researched: researched
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(RDSection)