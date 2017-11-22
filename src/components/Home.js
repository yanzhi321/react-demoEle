import React from 'react';
//引入css模块里的文件
import Swiper from 'swiper';
import './static/css/swiper.min.css';
import $ from 'jquery';
import './static/css/home.css';
import { Carousel } from 'antd';

import './static/css/common.css'

import reportPng from './static/img/10.png'

class Home extends React.Component{
	
	constructor(props){
		super(props);
	}
	
	//组件渲染完成
	componentDidMount(){
		  var swiper = new Swiper('.swiper-container', {
	        pagination: '.swiper-pagination',
	        nextButton: '.swiper-button-next',
	        prevButton: '.swiper-button-prev',
	        slidesPerView: 1,
	        paginationClickable: true,
	        autoplay: true,
	        loop: true,
	        speed: 1000
   		 });
   		 
   		 
   		 
	}
	
	render(){
		return(
			<div>
				
				 <div className="swiper-container">
				    <div className="swiper-wrapper">
				        <div className="swiper-slide"><img src={require('./static/img/1.png')} /></div>
				        <div className="swiper-slide"><img src={require('./static/img/2.png')} /></div>
				        <div className="swiper-slide"><img src={require('./static/img/3.png')} /></div>
				        <div className="swiper-slide"><img src={require('./static/img/4.png')} /></div>
				    </div>
				    <div className="swiper-pagination"></div>
				    
				    <div className="swiper-button-prev"></div>
				    <div className="swiper-button-next"></div>
				    
				</div>
				
				<div className="midbar">
					<ul>
						<li><a href="#"><img src={require('./static/img/5.png')} /><p>通知公告</p></a></li>
						<li><a href="#"><img src={require('./static/img/6.png')} /><p>贡献榜</p></a></li>
						<li><a href="#"><img src={require('./static/img/7.png')} /><p>礼品兑换</p></a></li>
						
					</ul>
				</div>
				
				<div className="footer-wrap">
					<div className="footer">
						<div className="footer-left">
							<h3>致谢</h3>
							<p>截至目前，贡献最多的前 3 位白帽子是:</p>
							<p>x、Graves、4ck1k@Shadow7。</p>
							<p>感谢他们对饿了么安全作出的贡献！</p>
							<img src={require('./static/img/9.png')} />
						</div>
						<div className="footer-right">
							<ul className="right-li">
								<li><img src={require('./static/img/8.png')} /><p>欢迎关注 ESRC 微信公众号</p></li>
								<li><a href="#"><img src={require('./static/img/11.png')} /></a>
									<a href="#"><img src={reportPng} /></a>
								</li>
							</ul>
						</div>
					</div>
					
				</div>
				
				<div className="footer-com">
						<span>Copyright © 2015 <a href="#">Ele.me</a>. All Rights Reserved</span>
				</div>
				
			</div>
		)
	}
	
}

export default Home;


