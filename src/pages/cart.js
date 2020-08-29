import React, { useContext } from 'react'
import CounterContext from '../context/counterContext'



const Cart =()=>{
    let abc = useContext(CounterContext)
        return(
        <div className="product-right">
                <h1>Shopping Cart</h1>
                <hr />
                <table>
                    <tbody>
                    <tr>
                        <td>Items:</td>
                        <td>{abc.count}</td>
                    </tr>
                    <tr>
                        <td colSpan="2"><hr/></td>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>${abc.price}</td>
                    </tr>
                    <tr>
                    <td colSpan="2"><hr/></td>
                    </tr>
                    <tr>
                        <td>SubTotal Price</td>
                        <td>${abc.subTotalPrice}.00</td>
                    </tr>
                    <tr>
                    <td colSpan="2"><hr/></td>
                    </tr>
                    <tr>
                        <td>Eco Tac(-2.00)</td>
                        <td>${abc.EcoTax}.00</td>
                    </tr>
                    <tr>
                    <td colSpan="2"><hr/></td>
                    </tr>
                    <tr>
                        <td>VAT 20%</td>
                        <td>${abc.Vat}.00</td>
                    </tr>
                    <tr>
                    <td colSpan="2"><hr/></td>
                    </tr>
                    <tr>
                        <td>Total Price</td>
                        <td>${abc.totalprice}.00</td>
                    </tr>
                    </tbody>
                    <tfoot>
                    <tr>
                        <td colSpan="2">
                        <button className="cart-out">Check OUT</button>
                        </td>
                    </tr>
                    </tfoot>
               </table>
                

            </div>

    )
}

export default Cart