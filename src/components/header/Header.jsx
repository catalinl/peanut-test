import PropTypes from "prop-types";

const Header = ({ pageType }) => {
    return <h1>Movies App - {pageType}</h1>;
};

Header.propTypes = {
    pageType: PropTypes.string.isRequired,
};

export default Header;
