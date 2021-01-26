import App from './app';
import {Provider} from 'react-redux';
import store from '../redux/store';

function AppContainer(props) {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    );
}

export default AppContainer;