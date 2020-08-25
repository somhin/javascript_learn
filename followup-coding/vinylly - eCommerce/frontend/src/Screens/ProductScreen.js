import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { detailsProduct } from '../actions/productActions';

function ProductScreen (props) {

    const productDetails = useSelector(state => state.productDetails)
    const {product, loading, error} = detailsProduct;
    const dispatch = useDispatch;

    useEffect(() => {
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            //
        };
    }, [])

    // const trackListing =  product.tracklist.map(track =>
    //     <li key={track}>{track}</li>
    // );

    return <div>
                <div className="back-to-result">
                    <Link to="/">Back to result...</Link>
                </div>

                {loading? <div>loading...</div>
                : error? <div>{error}</div>
                : (<div className="details">
                <div className="details-image">
                    <img src={product.image} alt="product"></img>
                </div>
                <div className="details-info">
                    <ul>
                        <li>
                            <h1>{product.name}</h1>
                        </li>
                        <li>
                            {product.artist}
                        </li>
                        <li>
                            {product.rating} stars ({product.numReview} reviews)
                        </li>
                        <li>
                            <b>Price: ${product.price}</b>
                        </li>
                        <li>
                            Tracklist: <ol>
                                {/* {trackListing} */}
                            </ol>
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
            </div>)
            }
                
            </div>
}

export default ProductScreen;