import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const StarRating = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1; //because arrays start at 0 so it'll start at 1 instead of 0
                return ( 
                <label key={ratingValue}>
                    <input 
                    type="radio" 
                    name="rating" 
                    value={ratingValue} 
                    onClick={() => setRating(ratingValue)}/*Changes rating State based on the current ratingValue of each star*/
                    />
                    <FaStar 
                    className="star" 
                    size={100} 
                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}/*If the rating value is less than or equal to hover or rating, hover comes first, then rating. If none of those, then the we'll just have the grey color*/
                    onMouseEnter={()=> setHover(ratingValue)}
                    onMouseLeave={()=> setHover(null)}
                    />
                </label>
                    )
            })}
            <p>The rating is {rating}.</p>
        </div>
    )
}

export default StarRating;