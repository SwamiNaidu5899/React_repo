import { Component } from "react";


class TableComponent extends Component{
    render(){
        return(
            <div>
                <table border={1}>
                    <tr>
                        <th>S.no</th>
                        <th>Employee ID</th>
                        <th>Designation</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>The_Incog</td>
                        <td>React Dev</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Mr.Potatos</td>
                        <td>Designer</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Saahu</td>
                        <td>React Native Dev</td>
                    </tr>
                </table>
            </div>
        )
    }
}

export default TableComponent