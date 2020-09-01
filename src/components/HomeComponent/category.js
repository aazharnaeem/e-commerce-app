import React from 'react'
import {Link} from 'gatsby'
import meas from './category images/measuring tools.png'
import tablets from './category images/tablets.png'
import games from './category images/games.png'
import bookshelf from './category images/bookshelf.png'
import mobiles from './category images/mobiles.png'
import giftcards from './category images/giftcards.png'
import sports from './category images/fitness.png'
import Tv from './category images/Tv.png'

const Category=(props)=>{
  console.log(props.name)
  return(
    <div id="cat-main">
    {props.name}
        <h1 >Category:</h1>
        <div className="cate">
          <div className='cat-item'><Link to='/product'><img  alt="img" src={meas} width={150} title="Measuring instruments"></img></Link></div>
          <div className='cat-item'><Link to='/product'> <img alt="img"  src={tablets} width={150} title="Tablets"></img></Link></div>
          <div className='cat-item'><Link to='/product'><img  alt="img" src={games} width={150} title="Games"></img></Link></div>
          <div className='cat-item'><Link to='/product'><img  alt="img" src={bookshelf} width={150} title="Bookshelf"></img></Link></div>
          <div className='cat-item'><Link to='/product'><img  alt="img" src={mobiles} width={150} title="Mobiles"></img></Link></div>
          <div className='cat-item'><Link to='/product'><img  alt="img" src={giftcards} width={150} title="GiftCards"></img></Link></div>
          <div className='cat-item'><Link to='/product'><img  alt="img" src={sports} width={150} title="Sports & Fitness"></img></Link></div>
          <div className='cat-item'><Link to='/product'><img  alt="img" src={Tv}  width={150} title="Tv & appliances"></img></Link></div>
        </div>
        </div>
    )
}

export default Category;