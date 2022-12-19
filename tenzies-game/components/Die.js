const Die = ({value, isHeld, id, holdDice}) => {
    const style={
        backgroundColor:isHeld ? "#59E391" : "#FFFFFF"
    }
    return ( 
        <div className="die-face" style={style} onClick={holdDice}>
            <h2 className="die-value">{value}</h2>
        </div>
     );
}
 
export default Die;