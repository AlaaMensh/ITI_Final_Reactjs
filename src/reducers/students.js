export function Students(state = null , action){
console.log(action);


    switch(action.type){
        case "ALLstudents":{
            return action.payload;
        }
        case "StudentDetails":{
            return action.payload;
        }  
        case "deletebyid":{
            return action.payload
        }
        case "addstudent":{
            // console.log("3333333333333333333333333333")
            return action.payload
        }
        case "updatestudent":{
            console.log("3333333333333333333333333333")
            return action.payload
        }
        default:{
            return state
        }
    }

}
