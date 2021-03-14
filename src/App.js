import logo from './logo.svg';
import {BrowserRouter as Router , Link , Switch , Route} from "react-router-dom";
import Home from "./Containers/Home/home";
import StudentDetails from "./Containers/studentDetails/studentdetails";
import './App.css';
import {applyMiddleware , createStore } from "redux";
import {Provider} from "react-redux";
import promiseMW from "redux-promise"
import reducers from "./reducers";

import thunk from 'redux-thunk';
import Updatestudent from './Containers/Student/updateStudent/updatestudent'
import { UpdateStudent } from './actions';





const  App = () => {
  const createStoreWithMDW = applyMiddleware(promiseMW)(createStore)
  return (
<Provider store = {createStoreWithMDW(reducers)}>
  <Router>

    <div className="container--fluid ">
      <div className="row">
        <nav className=" w-100 navbar navbar-expand-lg fixed-top navbar-light bg-light">
          <ul className="navbar-nav mr-auto">
            <li><Link to={'/'} className="nav-link"> 
            <img src="//educlever.beplusthemes.com/university/wp-content/uploads/2018/09/logo-1.png"/> </Link></li>
          </ul>
        </nav>
      </div>
      <div className="row mt-2">
      <Switch>
          <Route exact path="/" component={Home} />
          <Route  path="/student/:id" component={StudentDetails} />
          <Route  path="/update/:id" component={Updatestudent} />
      </Switch>
      
      </div>
    </div>
    
      
     
       

    
  </Router>
</Provider>
  );
}

export default App;
