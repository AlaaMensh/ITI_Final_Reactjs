import React, { Component , createRef } from 'react';
import Search from "../../Components/search/search";
import Students from "../../Components/Students/students";
import {getAllStudents} from "../../actions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";  
import "./home.css";
import { Modal, Button ,Form } from "react-bootstrap";
import Model from "./modal/modal";


class Home extends Component {
    constructor(props) {
        super(props);
      
        this.props.getAllStudents();
        this.state = {  
            word:"",
            filtered:[],
            isOpen: false,
            student:{}
        }    
    } 

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });


    async componentDidMount(){   
        console.log("yes");
       await this.props.getAllStudents();
        this.setState({filtered:this.props.students})
       
    }
    async componentDidUpdate(){


    }


     getSearchName = (name) =>{
        this.setState({word:name});   
            this.setState((state) => {
                state.filtered = this.props.students.filter((item) => {
                    console.log(name.toLowerCase())
                    // console.log("$$$$" , item.name.toLowerCase().includes(name.toLowerCase()) )
                    return item.name.toLowerCase().includes(name.toLowerCase())
                })
                return state;
            })  

        
    }
 
     render() { 
        return ( 
            <div className="container--fluid  hero">
               <div className="row main-section align-items-center mt-5">
                    <div className= "col-md-8 col-lg-6 col-12 col-xl-6  main-section-text ml-md-5 ml-0 p-4 text-center d-flex flex-column justify-content-center align-items-center ">
                        <p className="main-section-text-header ">Education is the Key to Success</p>
                        <p className="main-section-text-para">Making an impacts in classrooms and communities. </p>
                        {/* <button class="  main-section-button">Start Now</button> */}
                    </div>
                </div>
                <div className=" container--fluid bg-light search-container">
                    <div className="row search-content justify-content-center align-items-center">
                        <div className="col-12 col-md-6 col-lg-4 ">
                        <Search getSearchName = {this.getSearchName}  />
                        </div>
                        <div className="col-12 col-md-6 d-flex flex-row justify-content-end ">
                          <span className="plus-icon" onClick={this.openModal}>  <i class=" fa fa-plus-square"></i> </span>
                        </div>
                    </div>
                </div>

                {/* <div className="row justify-content-center mt-2 align-items-center text-center">
                    <Search getSearchName = {this.getSearchName}  />
                </div> */}
                <div className="row  justify-content-center mt-2 align-items-center text-center">
                    <Students location={this.props.location} filtered={this.state.filtered} history={this.props.history}/>
                </div>
                <div className="row justify-content-center">
                        {/* <Button variant="primary" onClick={this.openModal}>
                        Launch demo modal
                        </Button> */}
                    <Model history={this.props.history} show={this.state.isOpen} onHide={this.closeModal} />
                   
                </div>
           
            </div>
        );
    }
}
 
const mapactiontoprops = (disptch) =>{
    return bindActionCreators({getAllStudents} ,disptch);
}
const mapstatetoprops = (state) =>{
    
    return {students : state.Students}
}

export default connect(mapstatetoprops , mapactiontoprops)(Home);