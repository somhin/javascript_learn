import React from 'react'
import data from '../data';
import { Link } from 'react-router-dom';

function ProductScreen (props) {

    const product = data.products.find(x => x._id === props.match.params.id);

    return <div>
                <div className="back-to-result">
                    <Link to="/">Back to result...</Link>
                </div>

                <div className="details">
                    <div className="details-image">
                        <img src={product.image} alt="vinyl" />
                    </div>
                    <div className="details-info">
                        <ul>
                            <li>
                                <h1>{product.name}</h1>
                            </li>
                            <li>
                                {product.rating} stars ({product.numReview} reviews)
                            </li>
                            <li>
                                <b>Price: ${product.price}</b>
                            </li>
                        </ul>
                    </div>

                    <div className="details-action">
                        <ul>
                            <li>
                                Price: {product.price}
                            </li>
                            <li>
                                Status: {product.status}
                            </li>
                            <li>
                                Qty: <select>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </li>
                            <li>
                                <button className="button primary">Add to cart</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
}

export default ProductScreen;