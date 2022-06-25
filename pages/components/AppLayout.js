import prototypes, { checkPropTypes } from "prop-types";

const AppLayout = ({ children }) => {
    return (
        <div>
            <div>common menu</div>
        </div>
    );
};

AppLayout.prototype = {
    children: checkPropTypes.node.isRequired,
};

export default AppLayout;
