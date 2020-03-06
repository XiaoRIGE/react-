import React, { Component } from 'react'
import './index.css'
import { Row, Col } from 'antd';
import utils from '../../utils/utils';
import axios from '../../server/axios';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: 'xiaori',
            sysTime:null,
            weather:''
        }
    }
    componentWillMount(){
        setInterval(() => {
            let sysTime = utils.formatDate(new Date().getTime())
            this.setState({
                sysTime
            })
        }, 1000);
        this.getWeather();
    }
    getWeather(){
        // axios.jsonp({
        //     url:'https://api.help.bj.cn/apis/weather/?id=101060101'
        // }).then((res)=>{
        //     console.log('=',res)
        // })
        axios.axios({type:'get',url:'https://api.help.bj.cn/apis/weather/?id=101060101'}).then((res)=>{
            this.setState({
                weather:res.data.weather,
                weatherimg:res.data.weatherimg
            })
        }).catch(err=>{
            console.log("错误信息",err)
        })
    }
    render() {
        return (
            <div className="header">
                <Row className="header-top">
                    <Col span="24">
                        <span>欢迎,{this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col className="breadcrumb-title" span="4">
                        <div className="current-title">首页</div>
                    </Col>
                    <Col className="weather" span="20">
                        <span className="date">{this.state.sysTime}</span>
                        <img className="weather-img" src={this.state.weatherimg} />
                        <span className="detail">{this.state.weather}</span>
                    </Col>
                </Row>
            </div>
        );
    }
}

export default Header;