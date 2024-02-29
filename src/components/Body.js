import RestaurantCard from "./RestaurantCard";
// import resList from "../utils/mockData"; //mockdata
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [listOfRestaurant, setlistOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setsearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch('https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0826802&lng=80.2707184&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
        const json = await data.json();
        // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        setlistOfRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants); //intact
        setFilteredRestaurant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    const onlineStatus = useOnlineStatus();

    if(onlineStatus === false) return <h1>Looks like you're offline! Please check your internet connection.</h1>

    //conditional rendering
    // if(listOfRestaurant.length === 0) {
    //     return <Shimmer />
    // }

    return listOfRestaurant.length === 0 ? (<Shimmer />) : (
        <div className="body">
            <div className="filter flex">
                <div className="search m-4">
                    <input type="text" className="border border-solid rounded-md h-9 border-gray-300 text-base focus:outline-none focus:border-orange-500" value={searchText} onChange={(e)=> {setsearchText(e.target.value);}}/>
                    <button className="px-4 py-2 bg-[#ff6600] m-4 rounded-md text-slate-50" onClick={()=> {
                        console.log(searchText);
                        const filteredRestaurant = listOfRestaurant.filter((res)=>
                            res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );

                        setFilteredRestaurant(filteredRestaurant);
                    }}>Search</button>
                </div>
                <div className="rating m-4 flex items-center">
                <button className="px-4 py-2 bg-[#ff6600] rounded-md text-slate-50"
                    onClick={() => {
                        const filteredList = listOfRestaurant.filter(
                            (res) => res.info.avgRating > 4.3
                        );
                        setFilteredRestaurant(filteredList);
                    }}
                >
                    Top Rated Restaurants
                </button>
                </div>
            </div>
            <div className="res-container flex flex-wrap">
                {filteredRestaurant.map((restaurant) => (
                    <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurantCard  resData={restaurant} /></Link>
                ))}
            </div>
        </div>
    )
};

export default Body;