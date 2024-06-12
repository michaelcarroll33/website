import { BrowserRouter as Router, Route } 
from "react-router-dom";
import {HomePage} from './pages/HomePage';

export const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route path="/">
                    <HomePage/>
                </Route>
            </Switch>
        </Router>
    )
}