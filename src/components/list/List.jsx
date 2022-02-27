import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API_URL, MOVIES_URL } from "../../constants/AppConstants";
import { ROUTE_MOVIE_DETAIL } from "../../constants/RoutesConstants";
import Header from "../header/Header";
import DislikeIcon from "../shared/icons/Dislike";
import LikeIcon from "../shared/icons/Like";
import { FetchUtil } from "../shared/utils/ApiUtils";

const List = () => {
    const [list, setList] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getData = async () => {
            const response = await FetchUtil({
                url: `${API_URL}${MOVIES_URL}`,
            });
            const data = await response;
            setLoading(false);
            if (data) {
                setList(data?.movies);
            }
        };
        getData();
    }, []);

    const renderMovieList = () => {
        return list?.length ? (
            <div id="list-wrapper">
                <h2>Movies List</h2>
                <ul>
                    {list.map((entry) => (
                        <li key={entry.id}>
                            <Link
                                to={`${ROUTE_MOVIE_DETAIL}/${entry.id}`}
                                title={`Read more about ${entry.title}`}
                            >
                                {entry.title}
                                <span className="movie-ratings">
                                    <LikeIcon iconWidth="20px" />
                                    {entry.like_count}
                                    <DislikeIcon iconWidth="20px" />
                                    {entry.dislike_count}
                                </span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        ) : (
            <p>There Are No Movies To Display</p>
        );
    };

    return (
        <div>
            <Header pageType="List" />
            {loading ? <div>Loading...</div> : renderMovieList()}
        </div>
    );
};

export default List;
