import React from 'react';
import data from '../data';
import { Link } from 'react-router-dom';

function HomeScreen (props) {
    return <ul className="products">
    {data.products.map(product => 
      <li>
        <div className="product">
            <Link to={'/product/' + product._id}>
                <img src={product.image} alt="vinyl1" className="product-image" />
            </Link>
            <div className="product-album">
                <Link to={'/product/' + product._id}>{product.name}</Link>
            </div>
            <div className="product-artist">{product.artist}</div>
            <div className="product-price">{product.price}</div>
            <div className="product-rating">{product.rating} Stars ({product.numReview} reviews)</div>
        </div>
      </li>
      )}
  </ul>
}

export default HomeScreen;