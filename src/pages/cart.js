import React, { useContext } from 'react'
import CounterContext from '../context/counterContext'



const Cart =()=>{
    let abc = useContext(CounterContext)
        return(
        <div className="product-right">
                <h1>Shopping Cart</h1>
                <table border="1px">
                    <tr>
                        <td>Items:</td>
                        <td>{abc.count}</td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>Product</td>
                    </tr>
                    <tr>
                        <td>Shipment</td>
                        <td>Product</td>
                    </tr>
                    <tr>
                        <td>Product</td>
                        <td>Product</td>
                    </tr>
                    <tr>
                        <td>Product</td>
                        <td>Product</td>
                    </tr>
                    <tr>
                        <td>Product</td>
                        <td>Product</td>
                    </tr>
                    <tr>
                        <td>Product</td>
                        <td>Product</td>
                    </tr>
                    <tr>
                        <td>
                            total:
                        </td>
                        <td>
                            $---
                        </td>
                    </tr>

                </table>
                

            </div>

    )
}

export default Cart