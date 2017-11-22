import React from 'react';
import './static/css/info.css';
import './static/css/contribute.css';
import Axios from 'axios';
import { Link } from 'react-router';

class Contribute extends React.Component{
	
	constructor(props){
		super(props);
		this.state = {
			items:[],
		}
		
	}
	
	componentWillMount(){
		//渲染之前请求数据
		this.requestData();
	}
	
	requestData =() =>{
		//请求数据
		
		var that = this;
		
		Axios.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1')
		.then(function(response) {
			
			console.log(response.data.result[0].aid);
			//定义items为请求数据
			that.setState({
				items:response.data.result,
				aid:111
			})
		})
		.catch(function(err){
			console.log(err);
		});
		
	}
	
	render(){
		return(
			<div>
				
				<div className="contri">
					<div className="contri-left">
						<img src={require('./static/img/12.png')} />
						<p>ESRC 成立以来 ，有 <a href="#">73</a> 位白帽子通过 ESRC 平台上报了 <a href="#">588</a> 个饿了么漏洞，ESRC 对这些白帽子的付出表示由衷的感谢！年份  月份 
							排名	昵称	团队	贡献值	
						</p>
					</div>
				</div>
				
				<ul className="list">
				
					{
						this.state.items.map( (value,key) =>{
							return(
								<li key={key}>
									<Link to={{pathname:'infocontent/'+value.aid}}>{value.title}</Link>
								</li>
							)
						})
					}
				
				</ul>
				
				<div className="info-footer">
					<span>Copyright © 2015 <a href="#">Ele.me</a>. All Rights Reserved</span>
				</div>
				
			</div>
		)
	}
	
}

export default Contribute;