import { CDN_URL } from "../utils/constants";


const RestaurantCard = (props) => {
    const { resData } = props;
    const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
        sla,
        costForTwo,

    } = resData?.info;
    return (
        <div className="res-card m-4 mx-6 p-4 w-[240px] h-[368px] bg-gray-100 rounded-lg shadow-md transition-shadow duration-300 hover:bg-gray-200">
            <img className="res-logo rounded-lg w-[220px] h-[140px] object-cover" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3 className="font-bold py-3 text-lg">{name}</h3>
            <h5>{cuisines.join(", ")}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{sla?.deliveryTime} minutes</h5>
        </div>
    )
};

//Higher Order Component

//input - RestaurantCard => RestaurantCardPromoted
export const withPromotedLabel = (RestaurantCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
                    Promoted
                </label>
                <RestaurantCard {...props} />
            </div>
        );
    };
};

export default RestaurantCard;