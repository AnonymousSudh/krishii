import { Route, Switch } from "react-router-dom";
import Home from './login/Home'
import Login from './login/Login'
import About from './components/About'
import ContactUs from "./components/ContactUs";
import Goverment_plan from "./components/Goverment_plan";
import Calender_menu from "./components/Calender_menu";
import Sell_crops from "./components/Sell_crops";
import Buy_crops from "./components/Buy_crops";
import signup from "./login/Signup"
import logout from "./components/Logout"

import './style/login.css'
// import './style/navbar.css'
import Signup from './login/Signup'

import extra_information from "./components/extra_information";
import adminpanel from "./components/adminpanel";
import enterotp from "./login/Enterotp";

function App() {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/home" component={Home}/>
        <Route exact path="/login" component={Login}/>
        <Route exact path="/Goverment_plan" component={Goverment_plan}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/ContactUs" component={ContactUs}/>
        <Route exact path={"/Sell_crops"} component={Sell_crops}/>
        <Route exact path={"/Buy_crops"} component={Buy_crops}/>
        <Route exact path={"/Enter_details"} component={extra_information}/>
        <Route exact path={"/adminpanel"} component={adminpanel}/>
        <Route exact path={"/signup_email"} component={signup}/>
        <Route exact path={"/enterotp"} component={enterotp}/>
        <Route exact path="/logout" component={logout}/>

      </Switch>
    
    </>
  );
}

export default App;
