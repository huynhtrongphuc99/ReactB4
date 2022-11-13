import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div className='position-fixed w-100 h-100 top-0 left-0' style={{ backgroundColor: "rgb(0,0,0,0.8)" }} >
                <div className='w-50 bg-white position-absolute p-5' style={{ top: "50%", left: '50%', transform: "translate(-50%,-50%)" }}>
                    <button onClick={this.props.CloseCart} className='btn btn-dark position-absolute' style={{ top: '20px', right: '10px' }}>X</button>
                    <h1 className='text-center fs-3'>Giỏ hàng </h1>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Mã Sp</th>
                                <th>Tên SP</th>
                                <th>Hình ảnh </th>
                                <th>Số lượng</th>
                                <th>Đơn giá</th>
                                <th>Thành tiền </th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.cartList.map((ProductCart) => {
                                return (
                                    <tr>
                                        <td>{ProductCart.item.id}</td>
                                        <td>{ProductCart.item.name}</td>
                                        <td>
                                            <img src={ProductCart.item.image} alt='' style={{ width: '100px' }} />
                                        </td>
                                        <td>
                                            <button onClick={()=>{this.props.DownQuatity(ProductCart)}} className='btn btn-info'>-</button>
                                            <span className='mx-2'>{ProductCart.quantity}</span>
                                            <button onClick={()=>this.props.UpQuatity(ProductCart)} className='btn btn-info'>+</button>
                                        </td>
                                        <td>{ProductCart.item.price}</td>
                                        <td>{ProductCart.item.price * ProductCart.quantity}</td>
                                        <td>
                                            <button onClick={()=>{this.props.DeleteItem(ProductCart)}} className='btn btn-danger'>Xóa</button>
                                        </td>

                                      
                                    </tr>
                                    
                                )
                    
                            }

                            )}
                           <button onClick={this.props.DeleteList} className='mt-3 p-2 fs-5'  style={{borderRadius:'20px'}}>Tính tiền {this.props.totalBill()}$</button>

                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
