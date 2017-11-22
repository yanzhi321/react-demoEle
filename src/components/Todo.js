import React from 'react';
import './static/css/bug.css'
class Todo extends React.Component{
	
	constructor(props){
		super(props);
	}
	
	
	
	render(){
		return(
			<div>
				<div className="bg">
					
				</div>
				<div className="wx">
					<ul>
						<li className="first"><span>微信登录</span><a href="#" class="close">X</a></li>
						<li className="second"><p>微信登录</p></li>
						<li className="third"><div className="ewm"></div></li>
						<li className="four"><p>请使用微信扫描二维码登录<br/>“饿了么安全应急响应中心”</p></li>
					</ul>
				</div>
			</div>
		)
	}
	
}

export default Bug;