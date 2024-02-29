import {CDN_URL} from "../utils/constants";


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
        <div className="res-card m-4 p-4 w-[220px] h-[378px] bg-gray-100 rounded-lg shadow-md transition-shadow duration-300 hover:bg-gray-200">
            <img className="res-logo rounded-lg w-[220px] h-[140px] object-cover" alt="res-logo" src={CDN_URL+cloudinaryImageId} />
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{sla?.deliveryTime} minutes</h5>
        </div>
    )
};

export default RestaurantCard;