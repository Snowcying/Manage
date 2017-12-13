import React from 'react';
import ReactDOM from 'react-dom';
import {Router,Route,browserHistory} from 'react-router'
import UserAddPage from './pages/UserAdd'
import HomePage from './pages/Home'
import UserListPage from './pages/UserList'
import UserEditPage from './pages/UserEdit'
import LoginPage from './pages/Login'
import HomeLayout from './layouts/HomeLayout'
ReactDOM.render((

    <Router history={browserHistory}>
        <Route  component={HomeLayout}>
            <Route path="/" component={HomePage} />
            <Route path="/user/add" component={UserAddPage}/>
            <Route path="/user/list" component={UserListPage}/>
            <Route path="/user/edit/:id" component={UserEditPage}/>
            <Route path="/login" component={LoginPage}/>
        </Route>

    </Router>

), document.getElementById('app'));

