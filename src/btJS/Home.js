import React, { Component } from 'react'
import style from './Home.module.css'
import HomeItem from './HomeItem'
import ShowInfo from './ShowInfo'
import Cart from './Cart'
import '@fortawesome/fontawesome-free/css/all.min.css'

export default class Home extends Component {
  ProductList = [
    {
      "id": 1,
      "name": "Adidas Prophere",
      "alias": "adidas-prophere",
      "price": 350,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 995,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere.png"
    },
    {
      "id": 2,
      "name": "Adidas Prophere Black White",
      "alias": "adidas-prophere-black-white",
      "price": 450,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 990,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere-black-white.png"
    },
    {
      "id": 3,
      "name": "Adidas Prophere Customize",
      "alias": "adidas-prophere-customize",
      "price": 375,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 415,
      "image": "http://svcy3.myclass.vn/images/adidas-prophere-customize.png"
    },
    {
      "id": 4,
      "name": "Adidas Super Star Red",
      "alias": "adidas-super-star-red",
      "price": 465,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 542,
      "image": "http://svcy3.myclass.vn/images/adidas-super-star-red.png"
    },
    {
      "id": 5,
      "name": "Adidas Swift Run",
      "alias": "adidas-swift-run",
      "price": 550,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 674,
      "image": "http://svcy3.myclass.vn/images/adidas-swift-run.png"
    },
    {
      "id": 6,
      "name": "Adidas Tenisky Super Star",
      "alias": "adidas-tenisky-super-star",
      "price": 250,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 456,
      "image": "http://svcy3.myclass.vn/images/adidas-tenisky-super-star.png"
    },
    {
      "id": 7,
      "name": "Adidas Ultraboost 4",
      "alias": "adidas-ultraboost-4",
      "price": 450,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 854,
      "image": "http://svcy3.myclass.vn/images/adidas-ultraboost-4.png"
    },
    {
      "id": 8,
      "name": "Adidas Yeezy 350",
      "alias": "adidas-yeezy-350",
      "price": 750,
      "description": "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      "shortDescription": "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      "quantity": 524,
      "image": "http://svcy3.myclass.vn/images/adidas-yeezy-350.png"
    },
    {
      "id": 9,
      "name": "Nike Adapt BB",
      "alias": "nike-adapt-bb",
      "price": 630,
      "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      "shortDescription": "Paul George is the rare high-percentage shooter",
      "quantity": 599,
      "image": "http://svcy3.myclass.vn/images/nike-adapt-bb.png"
    },
    {
      "id": 10,
      "name": "Nike Air Max 97",
      "alias": "nike-air-max-97",
      "price": 650,
      "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      "shortDescription": "Paul George is the rare high-percentage shooter",
      "quantity": 984,
      "image": "http://svcy3.myclass.vn/images/nike-air-max-97.png"
    },
    {
      "id": 11,
      "name": "Nike Air Max 97 Blue",
      "alias": "nike-air-max-97-blue",
      "price": 450,
      "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      "shortDescription": "Paul George is the rare high-percentage shooter",
      "quantity": 875,
      "image": "http://svcy3.myclass.vn/images/nike-air-max-97-blue.png"
    },
    {
      "id": 12,
      "name": "Nike Air Max 270 React",
      "alias": "nike-air-max-270-react",
      "price": 750,
      "description": "Nike shoe is the rare high-percentage shooter who's also a coach's dream on D. Designed for his unrivaled 2-way game, the PG 4 unveils a new cushioning system that's lightweight, articulated and responsive, ideal for players like PG who go hard every play.\r\n\r\n",
      "shortDescription": "Paul George is the rare high-percentage shooter",
      "quantity": 445,
      "image": "http://svcy3.myclass.vn/images/nike-air-max-270-react.png"
    }
  ]

  state = {
    itemChildren: null,
    isShowCart: false,
    cartList: []
  }
  showItem = (item) => {
    this.setState({
      itemChildren: item
    })
    console.log(this.state.itemChildren)
  }
  ShowCart = () => {
    this.setState({
      isShowCart: true
    })
  }
  CloseCart = () => {
    this.setState({
      isShowCart: false
    })
  }

  AddItemList = (item) => {
// copy mảng từ state
const NewList = [...this.state.cartList] 
// lấy item từ vị trí nút click 
const findItem  = NewList.find((index) =>item.id===index.item.id)
// tạo ra đối tượng có thuộc tính quatity
const newItem ={
  item:item ,
  quantity:1
}
if (findItem) {
  findItem.quantity +=1
}else (
  NewList.push(newItem)
)

this.setState({
  cartList:NewList
} , ()=>{
  console.log(this.state.cartList)
}
)

}
 TotalList =()=>{
  return this.state.cartList.reduce((total , item )=>{
      return total+item.quantity
    },0 )
  
 }

  renderItem = () => {
    const List = this.ProductList.map((item) => {
      return (
        <div key={item.id} className={style.col}>
          <HomeItem AddItemList={this.AddItemList}  showItem={this.showItem} item={item} />
        </div>
      )
    })
    return List
  }

DeleteItem = (arrList)=>{
  const arrItem =[...this.state.cartList]
  for (let index in arrItem){
    if (arrItem[index].item.id===arrList.item.id) arrItem.splice(index,1)
  }
  this.setState({
    cartList:arrItem
  })
}

UpQuatity=(arrList)=>{
  const arrItem =[...this.state.cartList]
  
for (let index in arrItem){
  if (arrItem[index].item.id===arrList.item.id) {
    arrItem[index].quantity+=1
    
  }
  this.setState({
    cartList:arrItem
  })
}}

DownQuatity=(arrList)=>{
  const arrItem =[...this.state.cartList]
  
for (let index in arrItem){
  if (arrItem[index].item.id===arrList.item.id) {
    arrItem[index].quantity-=1
    if (arrItem[index].quantity===0){
      arrItem.splice(index,1)
    }
  }
}
this.setState({
  cartList:arrItem
})}

totalBill=()=>{
  const arrItem =[...this.state.cartList]
  let totalBill = 0 
  for ( let itemList of arrItem ){
    totalBill  += itemList.quantity*itemList.item.quantity
  }
  return totalBill
}

DeleteList= ()=>{
  const arrItem =[...this.state.cartList]

  arrItem.splice(0,arrItem.length)
this.setState({
  cartList:arrItem
})
}
  render() {
    return (
      <div>
        <div className={style.home}>
          <div className={style.shop}>
            <button onClick={this.ShowCart} className={style.btnCart}><i class="fa-solid fa-cart-shopping"></i> <span style={{fontSize:'18px'}}>{this.TotalList()}</span></button>
            <h1>home</h1>
            <h2>Shop</h2>
          </div>
          <div className={style.row}>
            {this.renderItem()}
          </div>
        </div>
        {this.state.itemChildren && <ShowInfo item={this.state.itemChildren} />}
        {this.state.isShowCart && <Cart cartList={this.state.cartList} DeleteItem={this.DeleteItem} CloseCart={this.CloseCart}  UpQuatity={this.UpQuatity}   DownQuatity={this.DownQuatity}  totalBill={this.totalBill} DeleteList={this.DeleteList}/>}
      </div>
    )
  }
}


