import React, {Component} from 'react';
import './static/css/bug.css'

import 'whatwg-fetch'

class Reg extends Component{
	
	constructor(props){
		super(props);
		this.state = {
			username: '',
			password: ''
		}
	}
	
	//stateChange
	userChange = (e) => {
		//https://www.cnblogs.com/yangzonglong/p/7463321.html
		const target = e.target;
		this.setState({
			username: target.value
		})

	}

	//password
	psdChange = (e) => {
		const psd = e.target
		psd.value = psd.value.replace(/./, '*')
		this.setState({
			password: e.target.value
		})
	}

	//psd-- .--*
	_onKeyUp = (e) => {

		const psd = this.refs.psd;
		psd.value = psd.value.replace(/./g, '*')
		console.log(psd.value)
		this.setState({
			password: psd.value
		})

	}

	//saveChange
	saveUser = () => {
		//  es6的解构赋值语法。
		const { username, password } = this.state;

		if(!username){
			return alert("please input")
		}

		if(!password){
			return alert("password input")
		}

		fetch('http://123.206.99.172:3005/reg', {
			method: 'GET',
			mode: 'cors',
			headers: {
				"ContentType": "application/json"
			},

			body: { username, password }
		})
		.then(  res => res.json())
		.then( res => {
			alert('success')	
		})


	}
	
	render(){

		const { username, password } = this.state;

		return(
			<div>
				<div className="reg-wrap">
					<input type="text" name="username" onChange = {this.userChange} value={username} placeholder="请输入用户名" />
					<input 
						type="password" 
						name="password" 
						ref="psd" 
						onChange={this.psdChange} 
						value={password} 
						placeholder="请输入密码"
						onKeyUp = {this._onKeyUp} 
					/>
					<button type="submit">注册</button>
				</div>
			</div>
		)
	}
	
}

export default Reg;