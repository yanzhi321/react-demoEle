import React from 'react';
import './static/css/info.css'
import axios  from 'axios';
//引入react-router  link模块
import { Link } from 'react-router';
import 'whatwg-fetch'

class Info extends React.Component{
	
	constructor(props){
		super(props);
		
		this.state={
	
	            list:[],
	            fetchs:[]
	        }
	  
	  this.requestData=this.requestData.bind(this);
	}
	
	
	componentWillMount(){  /*渲染之前请求数据*/
	    this.requestData();
	    this.fetchFn()
	    //this.axiosFn()
	}
	
	requestData(){

        //请求数据

        var _that=this;

        axios.get('http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1')
        .then(function (response) {
            console.log(response.data);

            _that.setState({

                list:response.data.result,
                aid:111
            })

        })
        .catch(function (error) {
            console.log(error);
        });

    }
	
	//fetch
	//https://segmentfault.com/q/1010000009002748
	//fetch说白了就是个ajax请求，ajax必须在http协议下运行，放进public目录下，直接fetch('/wuhan.json')试试
	
	fetchFn = () => {
		//let url = ''
		fetch('/data.json')
			.then( (response) => {
				return response.json()
			})
			.then( (res) => {
				console.log(res)
				this.setState({
					fetchs: res.listData
				})
			})
			.catch( (e) => {
				console.log("message", e)
			})

	}

	
	
	render(){
		const { list, fetchs } = this.state

		//react-native中遍历数据的时候，标签需要有key的，以此为一条数据对应一个标签。
		//原理是：和react的dom-diff算法相关，react对dom做遍历的时候，会根据data-reactid生成虚拟dom树。如果你没有手动的添加unique constant key的话，
		//react是无法记录你的dom操作的。它只会在重新渲染的时候，继续使用相应dom数组的序数号(就是array[index]这种)来比对dom树。
		//所以，在遍历或者循环输出去渲染子组件的时候，key必不可少：<ListItem key={i} .....></ListItem>加key参数，表示组件的下标。

		return(
			<div>
				<ul className="info-li">
					{/*<li><Link to={{pathname:'infocontent/'+this.state.aid}}>2017.06.01 14:49 网络安全法普法活动公告</Link></li>
					<li><a href="#">2017.06.01 14:49 网络安全法普法活动公告</a></li>
					<li><a href="#">2017.06.01 14:49 网络安全法普法活动公告</a></li>
					<li><a href="#">2017.06.01 14:49 网络安全法普法活动公告</a></li>
					<li><a href="#">2017.06.01 14:49 网络安全法普法活动公告</a></li>
					<li><a href="#">2017.06.01 14:49 网络安全法普法活动公告</a></li>
					<li><a href="#">2017.06.01 14:49 网络安全法普法活动公告</a></li>
					<li><a href="#">2017.06.01 14:49 网络安全法普法活动公告</a></li>
					<li><a href="#">2017.06.01 14:49 网络安全法普法活动公告</a></li>
					<li><a href="#">2017.06.01 14:49 网络安全法普法活动公告</a></li>
					<li><a href="#">2017.06.01 14:49 网络安全法普法活动公告</a></li>
					<li><a href="#">2017.06.01 14:49 网络安全法普法活动公告</a></li>
					<li><a href="#">2017.06.01 14:49 网络安全法普法活动公告</a></li>
					<li><a href="#">2017.06.01 14:49 网络安全法普法活动公告</a></li>
					<li><a href="#">2017.06.01 14:49 网络安全法普法活动公告</a></li>
					<li><a href="#">2017.06.01 14:49 网络安全法普法活动公告</a></li>
					<ul>*/}
                    {
                        this.state.list.map((value,key)=>{
                            return  <li key={key}><Link to={{pathname:'infocontent/'+value.aid}}>{value.title}</Link></li>
                        })
                    }
				</ul>
				 
				 <ul className="fetch-data" className="info-li">
					{
						fetchs.map( (con, i) => {
							return (
								
								
								<li  key = {i} style={{margin: '0 auto'}}><a  style={{color: 'purple' }} href={con.url} target="_blank">{ con.title }</a></li>
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

export default Info;