
import './App.css';
// import Login from './Components/Login';
// import Signup from './Components/Signup';
// import ModalForm from './Container/ModalForm';
import Dialogue from './Container/Dialogue'
import UserDash from './userDash'
import DeliveryDash from './delivery'

import {PrivateRoute} from './Components/PrivateRoute'
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
     <Router>
      {/* <Route exact path='/'><SignInOutContainer/></Route> */}
      <PrivateRoute exact path="/user" component={UserDash} />
      <PrivateRoute exact path="/delivery" component={DeliveryDash} />
     <Route exact path="/" component={Dialogue} />
     <Route exact path="/login" component={Dialogue} />
    </Router>
   
    </div>
  );
}

export default App;
