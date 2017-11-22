import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
//引入react-router
import { Router, Route, Link,browserHistory,IndexRoute } from 'react-router';

//引入组件
import  Home from './components/Home';
import Bug from './components/Bug';
import Info from './components/Info';
import Contribute from './components/Contribute';
import Gift from './components/Gift';
import InfoContent from './components/InfoContent'
import Reg from './components/Reg'

//配置路由  history={browserHistory} 可以让路由变得又优美一些
//IndexRoute默认加载的是主页
//这是配置路由
ReactDOM.render((
	<Router history={browserHistory}>
	    <Route path="/" component={App}>
			 <IndexRoute component={Home}/>
			  <Route path="home" component={Home} />
			  <Route path="bug" component={Bug}></Route>
			  <Route path="info" component={Info}></Route>
				<Route path="infocontent/:aid" component={InfoContent}></Route>
			  <Route path="contribute" component={Contribute}></Route>
			  <Route path="gift" component={Gift}></Route>
			  <Route path="reg" component={Reg}></Route>	

	    </Route>
  	</Router>),
	document.getElementById('root')

);

registerServiceWorker();
