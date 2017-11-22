import React  from 'react';

import axios  from 'axios';

class InfoContent extends React.Component{

    constructor(props){

        super(props);
        
         this.state={
            content:[]
        } 

        this.requestData=this.requestData.bind(this);

        this.createMarkup=this.createMarkup.bind(this);
        

    }
    
    
     //渲染html代码
    createMarkup() {
        return {__html: this.state.content.content};
    }
	
	
	componentWillMount(){
		//渲染之前请求数据
        this.requestData(); 

    }

	
	
	requestData(){

        //请求数据

        //http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=121

        //获取url传过来的aid

        var aid=this.props.params.aid;
        // console.log(aid);

        var _that=this;
        var url='http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid='+aid;
        axios.get(url)
        .then(function (response) {
             console.log(response);

            _that.setState({

                content:response.data.result[0]

            })

          
        })
        .catch(function (error) {
            console.log(error);
        });

    }
	
	
    render(){

        return(

            <div>
     
               
               {this.props.params.aid}


               <h2>{this.state.content.title}</h2>

               <div className="content">
                   <div dangerouslySetInnerHTML={this.createMarkup()}></div>
               </div>

            </div>
        )
    }
}

export default InfoContent;
