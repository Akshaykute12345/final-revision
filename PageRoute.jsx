import {
    Switch,
    Route
} from 'react-router-dom';
import News from './../pages/News';
import Contact from './../pages/Contact';
import Home from './../pages/Home';
import ErrorPage from '../components/ErrorPage/ErrorPage';

const PageRoute = () => {
    return (
        <Switch>
            <Route path="/" exact>
                <Home />
            </Route>

            <Route path="/contact" exact>
                <Contact />
            </Route>

            <Route path="/news" exact>
                <News />
            </Route>

            <Route path="*">
                <ErrorPage />
            </Route>
        </Switch>
    );
};



export default PageRoute;