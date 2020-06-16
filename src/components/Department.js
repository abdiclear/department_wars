import React, { Component } from 'react';

class Department extends Component {

    render() {
        const tasks = this.props.data.map((task, i) =>
            
            <tr key={i} >
                <td >{task.name}</td>
                <td>{task.task}</td>
            </tr>

        );

        return (
            <table className="table table-hover table-bordered table-striped">
                <thead className="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Task</th>
                    </tr>
                </thead>
                <tbody>
                   {tasks} 
                </tbody>
            </table>

        )
    }
}

export default Department; 