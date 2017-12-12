import React, { Component } from 'react';

//引入react-router link模块
import {Link} from 'react-router';
import './components/static/css/basic.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        	
        	<div className="header">
        			<ul>
        				<li><a href="#"></a></li>
        				<li><Link to="/" activeClassName="active" onlyActiveOnIndex={true}>首页</Link></li>
        				<li><Link to="/bug" activeClassName="active" >漏洞/情报上报</Link></li>
        				<li><Link to="/info" activeClassName="active" >通知公告</Link></li>
        				<li><Link to="/contribute" activeClassName="active" >贡献榜</Link></li>
        				<li><Link to="/gift" activeClassName="active" >礼品兑换</Link></li>
                <li><Link to="/reg" activeClassName="active">注册</Link></li>
        				<li><a href="#">登录</a></li>
        			</ul>
        	</div>
        	<div className="child">
        			{this.props.children}
        	</div>
        	
      </div>
    );
  }
}

export default App;
