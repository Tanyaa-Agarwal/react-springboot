import ListUserComponent from "./components/ListUserComponent";
import HeaderComponent from "./components/HeaderComponent";
import {BrowserRouter as Router,Route,Switch} from "react-router-dom";
import AddUserComponent from "./components/AddUserComponent";

function App() {
  return (
    <div>
        <Router>
            <HeaderComponent />
            <div className="container">
                <Switch>
                    <Route exact path="/" component={ListUserComponent}></Route>
                    <Route path="/add-user" component={AddUserComponent}></Route>
                    <Route path="/edit-user/:id" component={AddUserComponent}></Route>
                </Switch>
            </div>

        </Router>



    </div>
  );
}

export default App;

