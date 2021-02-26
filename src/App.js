import "./App.css";
import Aboutus from "./components/Aboutus";
import { BrowserRouter as Router, Route ,Switch} from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu";
import Calculator from "./components/Calculator";
import Coordonnées from "./components/Coordonnées";
import Footer from "./components/Footer";
import Homepage from "./components/Homepage";
import Header from "./components/Header";
import LegalNotice from "./components/LegalNotice";
import MailForm from "./components/MailForm";
import SignIn from "./components/SignIn";
import React from "react";
import Result from "./components/Result";
import SignUp from "./components/SignUp";
import Solutions from "./components/Solutions";
import UserPage from "./components/UserPage";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

function App(props) {
  return (
    <AuthProvider>
      
        <Router>
        <div className="App">
          <Header />
          <Switch>
          <Route path="/" exact component={Homepage} />
          <Route path="/Calculator" component={Calculator} />
          <Route path="/Result" component={Result} />
          <Route path="/Solutions" component={Solutions} />
          {/* <Route 
          path="/Solutions/:index"  
          render={routeProps => <Solutions {...props} {...routeProps}/>} /> */}

          <Route 
          path="/Solutions/:test" 
          component={Solutions} />

          <Route path="/Aboutus" component={Aboutus} />
          <Route path="/Form" component={MailForm} />
          <Route path="/Coordonnees" component={Coordonnées} />
          <Route path="/BurgerMenu" component={BurgerMenu} />
          <Route path="/LegalNotice" component={LegalNotice} />
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <PrivateRoute path="/userpage" component={UserPage} />
          </Switch>
          <Footer />
          </div>
        </Router>

    </AuthProvider>
  );
}
export default App;
