import { Button ,Card } from 'react-bootstrap';
import {Link} from "react-router-dom";
import "./student.css";
import {deleteByID , UpdateStudent , getStudentById} from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"; 
import Updatestudent from "./updateStudent/updatestudent"; 
import { useState, useEffect } from 'react';
// import React from 'react';
import React, { Component } from 'react';
class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            isOpen:false,
            id:0
         }
    }
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    render() { 
        return (
        <tr>
            <td scope="row">{this.props.student.id}</td>
            <td>{this.props.student.name}</td>
            <td>{this.props.student.email}</td>
            <td className="" onClick={()=>{
                        this.props.history.push(`/student/${this.props.student.id}`)
                    }}>
            <div className="icon rounded-circle">
                <i className="fa fa-eye"></i>
                </div>
            </td>
            
            <td  onClick={()=>{
                 this.props.history.push(`/update/${this.props.student.id}`)
                
            }}>
            <div className="icon rounded-circle">
                <i class="fa fa-edit"></i> 
            
          </div>
            </td>

            <td onClick={()=>{
                this.props.deleteByID(`${this.props.student.id}`);
                window.location.reload();
    
            }}> <div className=" icon rounded-circle ">
                <i className="  fa fa-trash"></i>
                </div>
            </td>
           
            </tr>
      );
    }
}
 
const mapactiontoprops = (disptch) =>{
    return bindActionCreators({deleteByID } ,disptch);
}


export default connect(null , mapactiontoprops)(Student);



// const Student = (props) => {
//     const [show, setShow] = useState(false);

//     const handleClose = () => setShow(false);
//     const handleShow = () => setShow(true);
//     // console.log("histo: ", history)
//     console.log("ooooooooooooooooooooooo" ,show);
    
//     return ( 
//         <tr>
//         <th scope="row">{props.student.id}</th>
//         <td>{props.student.name}</td>
//         <td>{props.student.email}</td>
//         <td className="view-icon" onClick={()=>{
//                     props.history.push(`/student/${props.student.id}`)
//                 }}><i class="fa fa-eye"></i></td>
//         <td onClick={handleShow}>@mdo
//         <Updatestudent id={props.student.id} show={show} onHide={handleClose} />
//         </td>
//         <td onClick={()=>{
//             props.deleteByID(`${props.student.id}`);
//             window.location.reload();

//         }}>@mdo</td>
        
//         </tr>
 
//      );
// }
 
// const mapactiontoprops = (disptch) =>{
//     return bindActionCreators({deleteByID } ,disptch);
// }


// export default connect(null , mapactiontoprops)(Student);