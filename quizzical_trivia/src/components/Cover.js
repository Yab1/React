const Cover = ({handleStart}) => {
    return ( 
        <div className="cover flex">
            <h2 className="cover-title">Quizzical</h2>
            <p>Some description if needed</p>
            <button className="btn" onClick={handleStart}>Start quiz</button>
        </div>  
     );
}
 
export default Cover;