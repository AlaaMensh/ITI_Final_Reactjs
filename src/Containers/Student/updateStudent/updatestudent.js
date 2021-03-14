import React, { Component } from 'react';
import { Modal, Button ,Form } from "react-bootstrap";
import {addstudent} from "../../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux"; 
import "./updatestudent.css"; 
import {deleteByID , UpdateStudent , getStudentById} from "../../../actions";

class Updatestudent extends Component {

    constructor(props) {
        super(props);
        this.state = {  
          name:"",
          city:"", 
          email:"",
          phone:"",
          age:0,
          gender:"",
          studentbyid :{}
        }   
    }
      async componentDidMount(){
        await this.props.getStudentById(this.props.match.params.id);
          await this.setState({studentbyid : this.props.student});
        console.log("JJJJJJJJJJJJJJJ:   " ,this.props.student);
    }
    submit = async ()=>{

       if(this.state.name == ""){
           this.state.name = this.props.student.name;
        //    console.log("name: " , this.state.name);
       }
       if(this.state.city == ""){
           this.state.city = this.props.student.city;
       }
       if(this.state.email == ""){
           this.state.email = this.state.studentbyid.email;
       }
       if(this.state.age == 0){
           this.state.age = this.state.studentbyid.age;
       }
       
       if(this.state.phone == ""){
           this.state.phone = this.state.studentbyid.phone;
       }
       
       if(this.state.gender == ""){
           this.state.gender = this.state.studentbyid.gender;
       }
    
        // console.log("name: ",document.getElementById("name").value);
       
        if(!( /[a-zA-Z]$/.test(this.state.name))){
                console.log(this.state.email)
            window.alert("name must be characters");
        }
        else if(!( /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(this.state.email))  ){
            window.alert(" Invalid Email");
        }
        else if( this.state.age < 20 || this.state.age > 60 ){
            window.alert("age is required and must be (20 - 60) ");
        }
      
        else if((this.state.age>=20 && this.state.age<60)  ){

            var student = {
                id:this.state.studentbyid.id,
                name:this.state.name,
                city:this.state.city,
                email: this.state.email,
                phone:this.state.phone,
                age:this.state.age,
                gender:this.state.gender,
            }
            console.log(student);
          await  this.props.UpdateStudent(student);
            window.alert("Updated successifuly");
        //    window.location.reload();
        this.props.history.push("/")
        }
     
       

    }
    // closeModal = () =>  this.props.show = false ;

    render() { 
        console.log("$$$%%%%%%%" ,this.props.match.params.id);
        // console.log("$$$%%%%%%%" , this.props.student);

        return ( 
            // <div className="mt-5"> {this.props.student.name}</div>
                <div className="container mt-4">
                    <div className="row justify-content-center">
                        <div className="col-md-6 form col-8">
                            <div class="row ">
                                
                                <Form.Group className="col-12 col-md-6">
                                <Form.Label>Name</Form.Label>
                                <Form.Control  id="name" type="text" placeholder={this.state.studentbyid.name} onChange={(e)=>{
                                    this.setState({name:e.target.value})
                                }} />
                            </Form.Group>
                               
                                <div className="col-12 col-md-6">
                                <Form.Group>
                                <Form.Label>City</Form.Label>
                                <Form.Control id="city" type="text"  placeholder={this.state.studentbyid.city} onChange={(e)=>{
                                    this.setState({city:e.target.value})
                                }} />
                                </Form.Group>
                                </div>
                            </div>
                            <div class="row">
                                
                            <Form.Group  className="col-12 col-md-6">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder={this.state.studentbyid.email}  onChange={(e)=>{
                                    this.setState({email:e.target.value})
                                }} />
                            </Form.Group>
                               
                                <div className="col-12 col-md-6">
                                <Form.Group >
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" id="phone" placeholder={this.state.studentbyid.phone} onChange={(e)=>{
                                    this.setState({phone:e.target.value})
                                }} />
                            </Form.Group>
                                </div>
                            </div>
                            <div class="row">
                                
                            <Form.Group className="col-12 col-md-6" >
                                <Form.Label>age</Form.Label>
                                <Form.Control type="number" id="age" placeholder={this.state.studentbyid.age} onChange={(e)=>{
                                    this.setState({age:e.target.value})
                                }} />
                            </Form.Group>
                               
                                
                            </div>
                            <div className="row justify-content-center">
                            <button className="update-button rounded " type="button" onClick={()=>{
                                this.submit()
                            }}>
                                Update
                            </button>
                            </div>
                    
                        </div>
                    </div>
                </div>
                       
                      
                       

         );
    }
}
 const mapstatetoprops = (state) =>{
    return {student: state.Students}
}
const mapactiontoprops = (disptch) =>{
    return bindActionCreators({addstudent , getStudentById ,UpdateStudent } ,disptch);
}

export default connect(mapstatetoprops , mapactiontoprops)(Updatestudent);
