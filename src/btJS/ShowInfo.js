import React, { Component } from 'react'

export class ShowInfo extends Component {
  render() {
    console.log(this.props.item)
    const {image,name,price,shortDescription,quantity}= this.props.item
    return (
      <div style={{border : "2px solid #7aa5be " , padding:'10px' , backgroundColor:'beige' , width:'80%' , margin :'10px auto 0'}}>
        <img src={image} alt='' style={{width:'15%'}}/>
        <h4>Name : {name}</h4>
        <h4>Price : {price}</h4>
        <h4> {shortDescription}</h4>
        <h4>Quantity : {quantity} </h4>
      </div>
    )
  }
}

export default ShowInfo