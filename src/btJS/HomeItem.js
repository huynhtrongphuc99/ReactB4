
import React, { Component } from 'react'
import style from './HomeItem.module.css'

export default class HomeItem extends Component {
  render() {
    const {image,name,price}=this.props.item
    return (
      <div>
<div className={style.item}> 
         <img className={style.img} src={image} alt=''/>
         <h3>{name}</h3>
        <h5>{price}</h5>
         <div className={style.showbtn}>
         <button className={style.btn}>Add to carts</button>
         <button className={style.btn} onClick={()=>{this.props.showItem(this.props.item)}}>Show info</button>
         </div>
       </div>
      </div>
    )
  }
}
