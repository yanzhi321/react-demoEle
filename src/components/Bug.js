import React from 'react';
import './static/css/bug.css'
class Bug extends React.Component{
	
	constructor(props){
		super(props);
	}
	
	//hideModal
	hideModal = () => {

		const wx = this.refs.wx
		wx.style.display = 'none'

	}
	


	render(){
		return(
			<div>
				<div className="bg">
					
				</div>
				<div className="wx" ref = "wx">
					<ul>
						<li className="first"><span>微信登录</span><a href="#"  className="close" onClick={this.hideModal}>X</a></li>
						<li className="second"><p>微信登录</p></li>
						<li className="third"><div className="ewm"></div></li>
						<li className="four"><p>请使用微信扫描二维码登录<br/>“饿了么安全应急响应中心”</p></li>
					</ul>
				</div>

				<div className="ani-box">
	                <img src={require('./static/img/11.png')} width="100" className="animated fadeInUp lastPic" />
	                <span className="animated flipInX ege">我的头像</span>
	            </div>

			</div>
		)
	}
	
}

export default Bug;