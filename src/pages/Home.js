import React from 'react'
import {Link} from 'react-router'
import HomeLayout from '../layouts/HomeLayout'
import style from '../styles/home-page.less'

class Home extends React.Component
{
    render(){
        return(
           <div className={style.welcome}>
               <span>welcome</span>
           </div>
        )
    }
}

export default Home
