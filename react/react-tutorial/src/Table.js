import React, { Component } from 'react';
import './index.css';

class Table extends Component {
    render () {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Hobby</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>孙悟空</td>
                        <td>打野</td>
                        <td>抢人头</td>
                    </tr>
                    <tr>
                        <td>男枪</td>
                        <td>打野</td>
                        <td>无情铁炮</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Table;