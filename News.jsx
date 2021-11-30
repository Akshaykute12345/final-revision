import { 
    Link, 
    useRouteMatch, 
    Route,
    Switch,
    useParams
} from 'react-router-dom';

const News = () => {
    const {path, url} = useRouteMatch();
    return (
        <>
            <h1>News Page</h1>
            <ul>
                <li><Link to={`${url}/policitics`} >Polictics</Link></li>
                <li><Link to={`${url}/sports`} >Sports</Link></li>
                <li><Link to={`${url}/business`} >Business</Link></li>
            </ul>
            <Switch>
                <Route exact path={path}>
                    <h3>Please select a topic.</h3>
                </Route>
                <Route path={`${path}/:topicId`}>
                    <Topic />
                </Route>
          </Switch>
        </>
    );
};

function Topic() {
    // The <Route> that rendered this component has a
    // path of `/topics/:topicId`. The `:topicId` portion
    // of the URL indicates a placeholder that we can
    // get from `useParams()`.
    let { topicId } = useParams();
  
    return (
      <div>
        <h3>{topicId}</h3>
      </div>
    );
  }

export default News;