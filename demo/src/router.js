import React, { Component } from 'react'
//引入react-router-dom 基础方法
import { HashRouter, Route, Switch } from 'react-router-dom';
//1.配置路由跳转方式  另外还有BrowerRouter
    // 1.1HashRouter跳转再浏览器中有#
    // 1.2Route属性用于配置路由
    // 1.3Switch再包裹路由组件后 匹配到第一个路径就会返回
    // 1.4可以通过不配置path的方法制作以前的404页面
//2.配置最外层父级组件（顶层）
    //通常用来配置最外层组件
//3.配置子组件  使用render方法 返回对应组件
    //注意：使用render方法时用箭头函数不要使用{}包裹  {}包裹：运行  {}不包裹：返回值
//引入需要配置的组件
import Admin from './admin';
import Login from './pages/login'
import Button from './pages/ui/button'
import Modals from './pages/ui/modals'
import noMatch from './pages/nomatch'
import App from './App'
class Router extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <HashRouter>
                <App>
                    <Switch>
                        {/* <Route path="/" component={Login}/> */}
                        <Route path="/login" component={Login} />
                        <Route path="/admin" render={() =>
                            <Admin>
                                {/* 配置admin子路由 */}
                                <Switch>
                                    <Route path="/admin/ui/buttons" component={Button} />
                                    <Route path="/admin/ui/modals" component={Modals} />
                                    <Route component={noMatch} />
                                </Switch>
                            </Admin>
                        } />
                        <Route path="/order/detail" component={Admin} />

                    </Switch>
                </App>
            </HashRouter>
        );
    }
}

export default Router;