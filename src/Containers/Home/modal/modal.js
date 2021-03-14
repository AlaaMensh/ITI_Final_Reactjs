import React, { Component } from 'react';
import { Modal, Button ,Form } from "react-bootstrap";
import {addstudent} from "../../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";  
import "./modal.css";

class Model extends Component {

    constructor(props) {
        super(props);
        this.state = {  
            name:"",
            city:"", 
            email:"",
            phone:"",
            age:0,
            gender:""

        }
    }
    componentDidMount(){
        console.log("$$$$$$$$$$$$$$" , this.props);
    }
    submit = ()=>{
     
        // console.log("name: ",document.getElementById("name").value);
       
        if(!this.state.name || !( /[a-zA-Z]$/.test(this.state.name))){
                
            window.alert("name is required and must be characters");
        }
        else if(!this.state.city){
            window.alert("name is required and must be characters");
        }
        else if( !this.state.email ||  !( /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(this.state.email))  ){
            window.alert("email is required Invalid Email");
        }
        else if(!this.state.age || this.state.age < 20 || this.state.age > 60 ){
            window.alert("age is required and must be (20 - 60) ");
        }
        else if(!this.state.phone ){
            window.alert("phone is required");
        }
        else if( (this.state.name) && (this.state.age && this.state.age>20 && this.state.age<60) &&  (this.state.phone) ){
            var student = {
                name:this.state.name,
                city:this.state.city,
                email: this.state.email,
                phone:this.state.phone,
                age:this.state.age,
                gender:this.state.gender,

            }
            console.log(student);
            this.props.addstudent(student);
            window.alert("added successifuly");
           window.location.reload();
        }
        else{
            window.alert("name ,  email , age , city ,  phone are required");

            
        }
       

    }

    render() { 
        return ( 
            <Modal  show={this.props.show} onHide={this.props.onHide}>
                        <Modal.Header closeButton>
                        <Modal.Title className="modal-header">Add New Student</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                        <Form className="modal-text">
                            <Form.Group >
                                <Form.Label>Name</Form.Label>
                                <Form.Control id="name" type="text"   placeholder="Enter Name"  onChange={(e)=>{
                                    this.setState({name:e.target.value})
                                }} />
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>City</Form.Label>
                                <Form.Control id="city" type="text"  placeholder="Enter City" onChange={(e)=>{
                                    this.setState({city:e.target.value})
                                }}/>
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" onChange={(e)=>{
                                    this.setState({email:e.target.value})
                                }} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Phone</Form.Label>
                                <Form.Control type="text" placeholder="Phone" onChange={(e)=>{
                                    this.setState({phone:e.target.value})
                                }} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>age</Form.Label>
                                <Form.Control type="number" placeholder="Age" onChange={(e)=>{
                                    this.setState({age:e.target.value})
                                }} />
                            </Form.Group>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label className="m-3">Gender</Form.Label>
                                <br></br>
                                <input className="m-4" type="radio" name="gender" value="male" onClick={(e)=>{
                                    this.setState({gender:e.target.value})
                                }} />male<br></br>
                              
                                <input className="m-4" type="radio" value="female" name="gender"  onClick={(e)=>{
                                    this.setState({gender:e.target.value})
                                }} />female
                                
                            </Form.Group>
                            <Button variant="primary" type="button" onClick={()=>{
                                this.submit()
                            }}>
                                ADD
                            </Button>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.onHide}>Close</Button>
                        </Modal.Footer>
                    </Modal>

         );
    }
}
 
const mapactiontoprops = (disptch) =>{
    return bindActionCreators({addstudent} ,disptch);
}

export default connect(null , mapactiontoprops)(Model);