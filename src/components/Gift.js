import React from 'react';
import './static/css/gift.css'
import './static/css/common.css'
class Gift extends React.Component{
	
	constructor(props){
		super(props);
	}
	
	render(){
		return(
			<div>
				<div className="gift-wrap">
					<ul className="gift-list">
						<li>
						<a href="#"><img src={require('./static/img/h1.jpg')} />
							<p>京东卡200</p>
							<p>需要饿币:<span>20</span></p>
							<p>已兑换:<span>17</span>个</p>
							<p>还有库存<span>20</span>件</p>
						</a>
						</li>
						<li>
						<a href="#"><img src={require('./static/img/h2.jpg')} />
							<p>京东卡200</p>
							<p>需要饿币:<span>20</span></p>
							<p>已兑换:<span>17</span>个</p>
							<p>还有库存<span>20</span>件</p>
						</a>
						</li>
						<li>
						<a href="#"><img src={require('./static/img/h3.jpg')} />
							<p>京东卡200</p>
							<p>需要饿币:<span>20</span></p>
							<p>已兑换:<span>17</span>个</p>
							<p>还有库存<span>20</span>件</p>
						</a>
						</li>
						<li>
						<a href="#"><img src={require('./static/img/h4.jpg')} />
							<p>京东卡200</p>
							<p>需要饿币:<span>20</span></p>
							<p>已兑换:<span>17</span>个</p>
							<p>还有库存<span>20</span>件</p>
						</a>
						</li>
						<li>
						<a href="#"><img src={require('./static/img/h5.jpeg')} />
							<p>京东卡200</p>
							<p>需要饿币:<span>20</span></p>
							<p>已兑换:<span>17</span>个</p>
							<p>还有库存<span>20</span>件</p>
						</a>
						</li>
						<li>
						<a href="#"><img src={require('./static/img/h6.jpg')} />
							<p>京东卡200</p>
							<p>需要饿币:<span>20</span></p>
							<p>已兑换:<span>17</span>个</p>
							<p>还有库存<span>20</span>件</p>
						</a>
						</li>
						<li>
						<a href="#"><img src={require('./static/img/h7.png')} />
							<p>京东卡200</p>
							<p>需要饿币:<span>20</span></p>
							<p>已兑换:<span>17</span>个</p>
							<p>还有库存<span>20</span>件</p>
						</a>
						</li>
						<li>
						<a href="#"><img src={require('./static/img/h8.jpeg')} />
							<p>京东卡200</p>
							<p>需要饿币:<span>20</span></p>
							<p>已兑换:<span>17</span>个</p>
							<p>还有库存<span>20</span>件</p>
						</a>
						</li>
						<li>
						<a href="#"><img src={require('./static/img/h9.jpeg')} />
							<p>京东卡200</p>
							<p>需要饿币:<span>20</span></p>
							<p>已兑换:<span>17</span>个</p>
							<p>还有库存<span>20</span>件</p>
						</a>
						</li>
						<li>
						<a href="#"><img src={require('./static/img/h10.jpg')} />
							<p>京东卡200</p>
							<p>需要饿币:<span>20</span></p>
							<p>已兑换:<span>17</span>个</p>
							<p>还有库存<span>20</span>件</p>
						</a>
						</li>
						<li>
						<a href="#"><img src={require('./static/img/h11.jpeg')} />
							<p>京东卡200</p>
							<p>需要饿币:<span>20</span></p>
							<p>已兑换:<span>17</span>个</p>
							<p>还有库存<span>20</span>件</p>
						</a>
						</li>
						<li>
						<a href="#"><img src={require('./static/img/h12.png')} />
							<p>京东卡200</p>
							<p>需要饿币:<span>20</span></p>
							<p>已兑换:<span>17</span>个</p>
							<p>还有库存<span>20</span>件</p>
						</a>
						</li>
						<li>
						<a href="#"><img src={require('./static/img/h13.jpg')} />
							<p>京东卡200</p>
							<p>需要饿币:<span>20</span></p>
							<p>已兑换:<span>17</span>个</p>
							<p>还有库存<span>20</span>件</p>
						</a>
						</li>
					</ul>
					
					
				</div>
				<div className="footer-com">
						<span>Copyright © 2015 <a href="#">Ele.me</a>. All Rights Reserved</span>
				</div>
			</div>
		)
	}
	
}

export default Gift;