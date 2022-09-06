import react, { useState } from 'react';
import Header from './components/header'
import WatchBody from './components/watchBody'
import productData from './ProductData';
import classes from './smallImg.module.css'
import SmallWatch from './smallWatch';
class App extends react.Component{
  currentdate = new Date()
  hour = this.currentdate.getHours() > 9 ? this.currentdate.getHours() : '0'+this.currentdate.getHours()
  minute = this.currentdate.getMinutes() > 9 ? this.currentdate.getMinutes() : '0'+this.currentdate.getMinutes()
  date = this.hour + ' : '  + this.minute
  state = {
    classIdFeat: 0,
    classId: 0,
    bigIMG: productData.colorOptions[0].imageUrl,
    innerWatch: this.date
  }
  changeImg = function (arg) {
    this.setState({
      bigIMG: productData.colorOptions[arg].imageUrl,
      classId: arg
    })
  }
  changeFeat =  function (arg) {
    if (arg === 0) {
      this.setState({
        innerWatch: this.date,
        classIdFeat: arg 
      })
    }else{
      this.setState({
        innerWatch: '68',
        classIdFeat: arg
      })
    }
  }
  render(){
    let featureList = productData.featureList.map((item, id)=>{
      return(
      <button key={id} onClick={()=>this.changeFeat(id)} className={id ===  this.state.classIdFeat ? classes.buttonHrate : classes.buttonTime}>{item}</button>
      )
    })
    let watchcolor = productData.colorOptions.map((item, id)=>{
      return(
        <SmallWatch image={item.imageUrl} key={id} click={()=>this.changeImg(id)} className={id === this.state.classId ? 'active': ""}/>
      )
    })
    return (
    <>
      <Header/>
      <div className='productBody'>
      <WatchBody img={this.state.bigIMG} display={this.state.innerWatch}/>
      <div className='productdetail'>
      <div className='title'>
        <h2>{productData.title}</h2>
        <p>{productData.description}</p>
      </div>
      <div className='smallWatch'>
        <span>Select Color</span>
        <div>
        {watchcolor}
        </div>
      </div>
      <div className='feat'>
        <span>Features</span>
        <div>
        {featureList}
        </div>
      </div>
      <button className={classes.button}>Buy Now</button>
      </div>
      </div>
    </>
    );
  }
  }

export default App;