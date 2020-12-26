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

export const mockData = [
{
    id: 1,
    name: "Mix veg Pizza",
    description:"Pizza For Cheese Lovers Layered With Pizza Sauce And Topped With Diced Paneer And Sliced Capsicums",
    price:229,
    cals:"198 cal - 300 g",
    recipe:'',
    rImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/kotptvehz3qkf5jtgju5"
},
{
    id: 2,
    name: "Tandoori Chicken",
    description:"Succulent pieces of chicken marinated in a seasoned masala and cooked to perfection in a tandoor.",
    price:250,
    cals:"350 cal - 750 g",
    recipe:'',
    rImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/eghgf1glcaytmz18nkpi"
},
{
    id: 3,
    name: "Butter Chicken",
    description:"Butter Chicken is a delicious savory dish that is loaded with spicy marinated chicken, caramelized onions, and flavorful gravy",
    price:280,
    cals:"220 cal - 350 g",
    recipe:'',
    rImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/n2xdntdhn9d8z0kfmptv"
},
{
    id: 4,
    name: "Chicken Biryani",
    description:"A delightful preparation of richly flavored aromatic rice layered with marinated chicken pieces in a delicate blend of whole spices.",
    price:180,
    cals:"250 cal - 500 g",
    recipe:'',
    rImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/ifuvaulqdgqgoaqpgke0"
},
{
    id: 5,
    name: "Paneer Tikka",
    description:"Deep fried paneer cubes tossed with onion, ginger, green chilli, and soya, chilli sauce.",
    price:320,
    cals:"125 cal - 250 g",
    recipe:'',
    rImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/tckwslihlmfampghmr11"
}
]

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