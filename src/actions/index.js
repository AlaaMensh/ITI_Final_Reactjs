import axios from 'axios';
const baseUrl = "http://localhost:4200/students";

export async function getAllStudents(){


   var payload=null;
    try{
        let response = await fetch(`${baseUrl}`);
        payload = await response.json();
        // console.log("jjjjjjjjjjjjjjjjjjjjj",payload);
    }catch(e){
        console.log(e);
    }
    return {
        type:"ALLstudents",
        payload
    }
    
}
export async function getStudentById (id){

   var payload=null;
    try{
        let response = await fetch(`${baseUrl}/${id}`);
        payload = await response.json();
        console.log("id", id , " " , payload);
        
    }catch(e){
        console.log(e);
    }
    return {
        type:"StudentDetails",
        payload
    }
    
}

export async function deleteByID (id){

   var payload=null;
    try{
        await axios.delete(`${baseUrl}/${id}`)
        .then(res => {
          console.log(res);
          console.log(res.data);
          payload ="success";
        })
        .catch(err=>{payload="fail"})
        
        
    }catch(e){
        console.log("erorrrrrrrrrr");
    }
    return {
        type:"deletebyid",
        payload
    }
    
}
export async function addstudent (student){

   var payload=null;
    try{
        await axios.post(baseUrl,  student )
        .then(res => {
          console.log(res);
          console.log(res.data);
          payload ="success";
        }).catch(err=>{payload="fail"})
        
    }catch(e){
        console.log("erorrrrrrrrrr");
    }
    return {
        type:"addstudent",
        payload
    }
    
}

export async function UpdateStudent(student){

    var payload=null;
     try{
         console.log("studentid: ",student);
         await axios.put(`${baseUrl}/${student.id}` , student )
         .then(res => {
           console.log(res);
           console.log(res.data);
           payload ="successApdated";
         })
         .catch(err=>{payload="fail To update"})
         
         
     }catch(e){
         console.log("erorrrrrrrrrr");
     }
     return {
         type:"updatestudent",
         payload
     }
     
 }