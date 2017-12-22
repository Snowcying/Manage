import React from 'react'
import {get} from '../utils/request'
import { message, Table, Button, Popconfirm } from 'antd';

class UserContent extends React.Component{
    constructor (props) {
        super(props);
        this.state = {
            content: [],
            ID:0
        };
    }

    componentWillMount () {
        get('http://localhost:3000/user')
            .then(res => {
                this.setState({
                    content: res
                });
            });
    }

    handleSubmit(e){
        // console.log("123")
        // console.log(this.state.content)
        // var obj=this.state.content[0];
        // for(var p in obj){
        //     console.log(obj[p]);
        // }

        // var Content=this.state.content;
        // for(var i=0;i<Content.length;i++){
        //     var contents=Content[i];
        //     for(var con in contents){
        //         if(contents["content"]&&con=="content")
        //             console.log(contents["content"])
        //     }
        // }

        e.preventDefault()
        this.setState({
            ID:e.target.value
        })


    }

    showContent(id){

        var Content=this.state.content;
        for(var i=0;i<Content.length;i++){
            var contents=Content[i];
            var flag=false;
            if(contents["id"]==id) flag=true;
            for(var con in contents){
                if(contents["content"]&&con=="content"&&flag)
                    // return(<span>{contents["content"]}</span>)
                    return(contents["content"])
            }
        }

    }

    handleShow(value){
        this.setState({
            ID:value
        })
    }

    render(){

        const columns = [
            {
                title: '用户ID',
                dataIndex: 'id'
                // render:text=><a href="#"  >{text}</a>
            },
            {
                title: '作者',
                dataIndex: 'name'
            },
            {
                title: '性别',
                dataIndex: 'gender'
            },
            {
                title: '年龄',
                dataIndex: 'age'
            },
            {
                title: '操作',
                render: (text, record) => {
                    return (
                        <Button.Group type="ghost">
                            <Button size="small" onClick={() => this.handleShow(record.id)}>查看</Button>
                        </Button.Group>
                    );
                }
            }
        ];

        const id = this.state.ID;



        return(
            <div>
                {/*{this.state.userList}*/}
                <Table columns={columns} dataSource={this.state.content} rowKey={row => row.id}/>


                <div>
                    {this.showContent(id)}
                </div>
            </div>
        )
    }




}

export default UserContent
