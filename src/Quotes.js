// import logo from './logo.svg';
import React from 'react';
import './Quotes.scss';
class Quotes extends React.Component{
constructor(props){
  super(props)
  this.state={
    randomNo:0,
    quotesArry:[],
    color:"#16a085",
  }
  this.callNewQoute=this.callNewQoute.bind(this);
}
componentDidMount(){
  fetch("https://type.fit/api/quotes")
  .then(resp=>resp.json ())
  .then(result =>{
    this.setState({quotesArry:result})
  },(error)=>console.log(error)
  );
}
callNewQoute=()=>{
  let colors = [
    '#16a085',
    '#27ae60',
    '#2c3e50',
    '#f39c12',
    '#e74c3c',
    '#9b59b6',
    '#FB6964',
    '#342224',
    '#472E32',
    '#BDBB99',
    '#77B1A9',
    '#73A857'
  ];
  this.setState({
    randomNo:Math.floor(Math.random()*this.state.quotesArry.length),
    color:colors[Math.floor(Math.random()*colors.length)]
  })
}
render(){
const {quotesArry,randomNo,color}=this.state;
console.log(this.state.color)
return (
  <div className="wrapper" style={{backgroundColor:`${color}`}}>
    
    {quotesArry[randomNo] && (
      
      <div id="quote-box" className="quotebox">
       
        <p id="text" className="text" style={{color:`${color}`}}> <i className="fa fa-quote-left" style={{color:`${color}`}}>  {quotesArry[randomNo].text} </i></p>
        
        { quotesArry[randomNo].author? <p id="author" className="author" style={{color:`${color}`}} >  - {quotesArry[randomNo].author}</p>: <p  className="author"></p>}
       
        <a target="_top" href={`https://twitter.com/intent/tweet?hashtags=quotes&text=${quotesArry[randomNo].text}`} style={{backgroundColor:`${color}`}} > <i className="fa fa-twitter"> </i></a>
        
        <button onClick={this.callNewQoute}  style={{backgroundColor:`${color}`}} id="new-quote" className="newQuote"> New Qoute</button>
    
    </div>)}
  
  </div>)}

}
  
export default Quotes;
