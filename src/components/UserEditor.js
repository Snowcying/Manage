import {Link} from 'react-router'
import React from 'react';
import { Form, Input, InputNumber, Select, Button, message } from 'antd';
import request from '../utils/request';




const FormItem=Form.Item
const { TextArea } = Input;
const formLayout = {
    labelCol: {
        span: 4
    },
    wrapperCol: {
        span: 16
    }
};
const formLayoutContent = {
    labelCol: {
        span: 40
    },
    wrapperCol: {
        span: 160
    }
};

class UserEditor extends React.Component
{

    componentDidMount(){
        const {editTarget,form}=this.props
        if(editTarget){
            form.setFieldsValue(editTarget)
        }
    }

    handleSubmit(e)
    {
        e.preventDefault()
        // alert(JSON.stringify(this.state))


        const {form,editTarget}=this.props

        form.validateFields((err,values)=>{
            if(!err){
                let editType='添加'
                let apiUrl='http://localhost:3000/user'
                let method='post'
                if(editTarget){
                    editType='编辑'
                    apiUrl+='/'+editTarget.id
                    method='put'
                }
                request(method,apiUrl,values)
                    .then((res)=>{
                        if(res.id){
                            message.success(editType+'用户成功')
                            this.context.router.push('/user/list')
                        }
                        else{
                            message.error(editType+'失败')
                        }
                    })
                    .catch((err)=>console.log(err))
            }
        })

    }


    render(){
        const {form}=this.props
        const {getFieldDecorator}=form

        return(


                <div style={{width:'400px'}}>
                    <Form onSubmit={(e)=>this.handleSubmit(e)}>


                        <FormItem label='作者:' {...formLayout}>
                            {getFieldDecorator('name',{
                                rules:[
                                    {
                                        required:true,
                                        message:'请输入用户名'
                                    },
                                    {
                                        pattern:/^.{1,4}$/,
                                        message:'用户名最多四个字符'
                                    }
                                ]
                            })(
                                <Input type='text'/>
                            )}
                        </FormItem>


                        {/*<FormItem label='年龄' {...formLayout}>*/}
                            {/*{getFieldDecorator('age',{*/}
                                {/*rules:[*/}
                                    {/*{*/}
                                        {/*required:true,*/}
                                        {/*message:'请输入年龄',*/}
                                        {/*type:'number'*/}
                                    {/*},*/}
                                    {/*{*/}
                                        {/*min:1,*/}
                                        {/*max:100,*/}
                                        {/*message:'请输入1-100',*/}
                                        {/*type:'number'*/}
                                    {/*}*/}
                                {/*]*/}
                            {/*})(*/}
                                {/*<InputNumber/>*/}
                            {/*)}*/}
                        {/*</FormItem>*/}
                        {/*<FormItem label='性别' {...formLayout}>*/}
                            {/*{getFieldDecorator('gender',{*/}
                                {/*rules:[*/}
                                    {/*{*/}
                                        {/*required:true,*/}
                                        {/*message:'请选择性别'*/}
                                    {/*},*/}
                                {/*]*/}
                            {/*})(*/}
                                {/*<Select placeholder='请选择'>*/}
                                    {/*<Select.Option value='male'>男</Select.Option>*/}
                                    {/*<Select.Option value='female'>女</Select.Option>*/}
                                {/*</Select>*/}
                            {/*)}*/}
                        {/*</FormItem>*/}

                        <FormItem label='内容' {...formLayoutContent}>
                            {getFieldDecorator('content',{
                                rules:[
                                    {
                                        required:true,
                                        message:'请输入内容'
                                    },
                                    {
                                        //pattern:/^.{1,8000}$/,
                                        // message:'最多八千个字符'
                                    }
                                ]
                            })(
                                <TextArea rows={10} />
                            )}
                        </FormItem>

                        <FormItem wrapperCol={{...formLayout.wrapperCol,offset:formLayout.labelCol.span}}>
                            <Button type='primary' htmlType='submit'>提交</Button>
                        </FormItem>
                    </Form>
                </div>

        )

    }
}


UserEditor.contextTypes = {
    router: React.PropTypes.object.isRequired
};

UserEditor=Form.create()(UserEditor)

export default UserEditor
