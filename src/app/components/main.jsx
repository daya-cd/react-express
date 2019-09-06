import React  from 'react';
import { Provider} from 'react-redux';
import { store } from '../store'
import { ConnectedDashboard } from '../components/Dashboard';
import {history} from '../store/history';

import {ConnectedNavigation} from './nav';

import {Router,Route} from 'react-router-dom';

export const Main =() =>(

    <Router history={history}>
    <Provider store={store}>
        <ConnectedNavigation/>
            <Route 
             exact 
             path="/dashboard" 
             component={ConnectedDashboard}
            />
    </Provider>
    </Router>
);