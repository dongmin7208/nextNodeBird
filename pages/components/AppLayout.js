import PropTypes from "prop-types";

const AppLayout = ({ children }) => {
    return (
        <div>
            <div>common menu</div>
        </div>
    );
};

AppLayout.prototype = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
