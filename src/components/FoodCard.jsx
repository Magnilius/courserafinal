const FoodCard = ({img ,name, price, description}) => {
    return(<div className="FoodCard">
        <img src={img} alt="" />
        <div className="FoodTexts">
            <div>
                <h5>{name}</h5>
                <h6>{price}</h6>
            </div>
            <p>{description}</p>
            <h5>ORDER A DELIVERY</h5>
        </div>
    </div>)
}

export default FoodCard;