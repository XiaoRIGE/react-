import React, { Component } from 'react'
import './index.css'
// import { Row, Col } from 'antd';
class Footer extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="footer"> 
                版权所有：小日开发工作室（推荐使用谷歌浏览器，可以获得更加操作页面效果）
            </div>
         );
    }
}
 
export default Footer;