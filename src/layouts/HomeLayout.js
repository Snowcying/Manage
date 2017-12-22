import React from 'react'
import { Link } from 'react-router';
import { Menu, Icon } from 'antd';
import style from '../styles/home-layout.less'

const SubMenu=Menu.SubMenu
const MenuItem=Menu.Item

class HomeLayout extends React.Component{
    render(){
        const {children}=this.props;

        return(
            <div>
                <header className={style.header}>
                    <Link to="/">陈鑫一</Link>
                </header>

                <main className={style.main}>

                    <div className={style.menu}>
                        <Menu mode="inline" theme="dark" style={{width:'240px'}}>
                            <SubMenu key="user" title={<span><Icon type="book"/><span>文章</span></span>}>
                                <MenuItem key="user-list">
                                    <Link to="/user/list">管理文章</Link>
                                </MenuItem>
                                <MenuItem key="user-add">
                                    <Link to="/user/add">添加文章</Link>
                                </MenuItem>

                                <MenuItem key="user-content">
                                    <Link to="/user/content">文章</Link>
                                </MenuItem>

                            </SubMenu>
                        </Menu>
                    </div>
                    <div className={style.content}>
                        {children}
                    </div>

                </main>

            </div>
        )
    }

}

export default HomeLayout
