import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { API_URL, MOVIES_URL } from "../../constants/AppConstants";
import {
    DISLIKE_REACTION,
    LIKE_REACTION,
} from "../../constants/ReactionsConstants";
import { ROUTE_MOVIE_ROOT } from "../../constants/RoutesConstants";
import Header from "../header/Header";
import DislikeIcon from "../shared/icons/Dislike";
import LikeIcon from "../shared/icons/Like";
import LoginModal from "../shared/modals/LoginModal";
import { FetchUtil } from "../shared/utils/ApiUtils";

const Details = () => {
    const { id } = useParams();
    const [movieDetails, setMovieDetails] = useState({});
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const getData = async () => {
            const response = await FetchUtil({
                url: `${API_URL}${MOVIES_URL}${id}`,
            });
            const data = await response;
            setLoading(false);
            if (data) {
                setMovieDetails(data?.movie);
            }
        };
        getData();
    }, [id]);

    const onReactionClick = () => () => {
        if (!sessionStorage.getItem("isPeanutUserLoggedIn")) {
            setShowModal(true);
        }
    };

    const renderMovieDetails = () => {
        return Object.keys(movieDetails).length ? (
            <div id="details-wrapper">
                <h2>{movieDetails.title}</h2>
                <h6>{movieDetails.description}</h6>
                <span className="movie-ratings">
                    <span
                        className="reaction-icon"
                        onClick={onReactionClick(LIKE_REACTION)}
                    >
                        <LikeIcon iconWidth="25px" />
                    </span>
                    <span className="reaction-count">
                        {movieDetails.like_count}
                    </span>
                    <span
                        className="reaction-icon"
                        onClick={onReactionClick(DISLIKE_REACTION)}
                    >
                        <DislikeIcon iconWidth="25px" />
                    </span>
                    <span className="reaction-count">
                        {movieDetails.dislike_count}
                    </span>
                </span>
            </div>
        ) : (
            <p>There is no information about this movie </p>
        );
    };
    return (
        <div>
            <Header pageType="Details" />
            <Link to={ROUTE_MOVIE_ROOT}>Go Back</Link>
            {loading ? <div>Loading...</div> : renderMovieDetails()}
            <LoginModal
                title="Login Modal"
                isOpen={showModal}
                onClose={() => setShowModal(false)}
            />
        </div>
    );
};

export default Details;
