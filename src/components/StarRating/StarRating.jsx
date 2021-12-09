import "./StarRating.css"

const starRating= ()=>{
  return(
    <div className="star-container">
    {
      [...Array(5)].map((star,index)=>{
       const ratingValue= index+1;
       return(
          <label key={index}>
             <input 
              type='radio' 
               name="rating" 
                value={ratingValue}
               
                />
                  <span className="star">&#9733;</span>
           </label>

      
       )
      })

    }
    </div>
  )
}


export default starRating;