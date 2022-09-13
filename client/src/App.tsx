import './App.css';
import Items from './components/Items';
import { Provider } from 'react-redux';
import store from './store';
import Nav from './components/Nav';
import Login from './components/Login';
import Register from './components/Register';

function App() {
    return (
        <Provider store={store}>
            <Nav></Nav>
            <Login></Login>
            <Register></Register>
            <Items></Items>
        </Provider>
    );
}
export default App;
