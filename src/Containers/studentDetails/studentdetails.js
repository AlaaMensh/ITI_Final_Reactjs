import React, { Component } from 'react';
import Student from '../Student/student';
import {getStudentById} from "../../actions";
import {deleteByID} from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";  
import "./studentDetails.css";





class StudentDetails extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            student:{}
         }
        console.log("0000000000000000" ,this.props)
        this.props.getStudentById(this.props.match.params.id)
    }
     async componentDidMount(){
            console.log("kk: ",this.props);
          await this.props.getStudentById(this.props.match.params.id)
          this.setState({student:this.props.student})
         console.log("lll: ",this.props.student);

    }

    async confimation(){
       let resp=  window.confirm("are you sure");
       if(resp){
          await this.props.deleteByID(this.props.match.params.id);
          this.props.history.push("/")
       }
       
    }
    render() { 
        return (  
            <div className="container mt-5 ">
                <div className="row justify-content-center">
                    <div className="col-10 bg-light mt-3 align-items-center text-center">
                   
                        <div className="row justify-content-center mt-5">
                            <div className="col-12 col-md-8">
                                <div className="row border-bottom ">
                                    <div className="col-6 border-right p-3">
                                       <span className="header">Name :</span>
                                    </div>
                                    <div className="col-4 p-3">
                                        <span className="header-details">{this.state.student.name} </span>
                                    </div>
                                </div>
                                <div className="row border-bottom text-center">
                                    <div className="col-6 border-right p-3">
                                    <span className="header">Email :</span>
                                    </div>
                                    <div className="col-4 p-3">
                                        <span className="header-details">{this.state.student.email} </span>
                                    </div>
                                </div>
                                <div className="row border-bottom text-center">
                                    <div className="col-6 border-right p-3">
                                    <span className="header">Phone :</span>
                                    </div>
                                    <div className="col-4 p-3">
                                        <span className="header-details">{this.state.student.phone} </span>
                                    </div>
                                </div>
                                <div className="row border-bottom ">
                                    <div className="col-6 border-right p-3">
                                    <span className="header">Age :</span>
                                    </div>
                                    <div className="col-4 p-3">
                                        <span className="header-details">{this.state.student.age} </span>
                                    </div>
                                </div>
                                <div className="row border-bottom">
                                    <div className="col-6 border-right p-3">
                                    <span className="header">Gender :</span>
                                    </div>
                                    <div className="col-4 p-3">
                                        <span className="header-details">{this.state.student.gender} </span>
                                    </div>
                                </div>
                                <div className="row border-bottom">
                                    <div className="col-6 border-right p-3">
                                    <span className="header">City :</span>
                                    </div>
                                    <div className="col-4 p-3">
                                        <span className="header-details">{this.state.student.city} </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center mt-5 ">
                            <button className=" delete-btn rounded-pill " onClick={()=>{
                                this.confimation();
                            }}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
 
const mapactiontoprops = (disptch) =>{
    return bindActionCreators({getStudentById ,deleteByID } ,disptch);
}
const mapstatetoprops = (state) =>{
    console.log("lllllllllllllll",state);
    return {student : state.Students}
}

export default connect(mapstatetoprops , mapactiontoprops)(StudentDetails);