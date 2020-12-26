import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import RecipeDetails from "./components/recipeDetails/recipeDetails";


function App() {
    return (
        <Router >
            <div className="App" >
                <Switch >
                    <Route path="/recipe/:id"
                        component={RecipeDetails}
                    />
                    <Route path=""
                        component={Dashboard}
                    />
                </Switch>
            </div>
        </Router>
    );
}

export default App;