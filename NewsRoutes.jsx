import {
    Switch,
    Route,
    useRouteMatch
} from 'react-router-dom';

const NewsRoutes = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <h3>Please select a topic.</h3>
            </Route>
        </Switch>
    );
};



export default NewsRoutes;