import PropTypes from "prop-types";
import Link from "next/link";

const AppLayout = ({ children }) => {
    return (
        <div>
            <div>
                <div>common menu</div>
                <Link href="/profile">
                    <a>profile</a>
                </Link>
                <Link href="/signup">
                    <a>signup</a>
                </Link>
            </div>
            {children}
        </div>
    );
};

AppLayout.prototype = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
