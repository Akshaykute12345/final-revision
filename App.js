import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import PageRoute from './route/PageRoute';
import Header from './components/Header/Header';

const App = () => {
    return (
        <div className="App">
            <Router>
                <Header />
                <PageRoute />
            </Router>
        </div>
      );
};

export default App;