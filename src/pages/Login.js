import React from 'react';
import { post } from '../utils/request';
import {Link} from 'react-router'
import { Icon, Form, Input, Button, message } from 'antd';
import style from '../styles/login-page.less';

const FormItem=Form.Item

class Login extends React.Component {
    constructor () {
        super();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit (e) {
        e.preventDefault();
        this.props.form.validateFields((err,values)=>{
            if(!err){
                post('http://localhost:3000/login',values)
                    .then((res)=>{
                        if(res){
                            message.info('登录成功')
                            this.context.router.push('/')
                        }else
                        {
                            message.info('登录失败，账号或密码错误')
                        }
                    })
            }
        })
    }

    render () {
        const {form} = this.props;
        const {getFieldDecorator}=form
        return (
                <div classname={style.wrapper}>
                    <div className={style.body}>
                        <header className={style.header}>
                            ReactManager
                        </header>
                    </div>
                    <section className={style.form}>
                        <Form onSubmit={this.handleSubmit}>
                            <FormItem>
                                {getFieldDecorator('account',{
                                    rules:[
                                        {
                                            required:true,
                                            message:'请输入管理员账号',
                                            type:'string'
                                        }
                                    ]
                                })(<Input type='text' addonBefore={<Icon type="user"/>}/>
                                )}
                            </FormItem>

                            <FormItem>
                                {getFieldDecorator('password',{
                                    rules:[
                                        {
                                            required:true,
                                            message:'请输入密码',
                                            type:'string'
                                        }
                                    ]
                                })(<Input type='password' addonBefore={<Icon type="lock"/>}/>)}
                            </FormItem>
                            <Button className={style.btn1} type="primary" htmlType="submit">登录</Button>
                            <Button className={style.btn2} type="primary"><Link to='/'>返回</Link></Button>
                        </Form>
                    </section>
                </div>


        );
    }
}

Login.contextTypes = {
    router: React.PropTypes.object.isRequired
};

Login=Form.create()(Login)

export default Login;
