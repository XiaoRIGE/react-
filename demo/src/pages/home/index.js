import React, { Component } from 'react'
import './index.css'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className="home-wrap">{this.props.children}</div>
         );
    }
}
 
export default Home;