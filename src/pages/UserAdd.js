import React from 'react'
import {Link} from 'react-router'
import formProvider from '../utils/formProvider'
import FormItem from '../components/FormItem';
import HomeLayout from '../layouts/HomeLayout'
import UserEditor from "../components/UserEditor";

class UserAdd extends React.Component
{
    render(){
        return(
            <div>
               <UserEditor/>
            </div>
        )
    }
}

export default UserAdd
