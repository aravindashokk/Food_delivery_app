import "./RestaurantCard.css";



const RestaurantCard = (props) => {
    const {resData} = props;
    const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
        sla,
        costForTwo,     
        
    } = resData?.info;
    return (
        <div className="res-card">
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
            <h3>{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{sla.deliveryTime} minutes</h5>
        </div>
    )
};

export default RestaurantCard;