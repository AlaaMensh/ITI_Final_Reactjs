import React, { Component } from 'react';
import Student from "../../Containers/Student/student";
import "./students.css";

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
 
     renderStudents = () =>{
        
            return this.props.filtered.map((student) =>{
                     return(
                         <Student location={this.props.location} key={student.id} student={student} history={this.props.history} />
                     )
                     
                })   
    }
    render() { 
        return (
            <div className="container">
                <div className="row">
                <table class="table table-striped" >
            <thead>
                <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col" colSpan="3">Actions</th>
                </tr>
            </thead>
            <tbody>
               
                  {this.renderStudents(this.props)}
            </tbody>
            </table> 
                </div>
            </div>

            // <div className="container">
            //     <div className="row justify-content-center">
            //         {this.renderStudents(this.props)}
            //     </div>
            // </div>
          );
    }
}
 
export default Students;
