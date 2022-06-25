import "antd/dist/antd.css";
import PropTypes from "prop-types";
import Head from "next/head";

const NodeBird = ({ Component }) => {
    return (
        <>
            <Head>
                <title>donmin | Title</title>
            </Head>
            <Component />
        </>
    );
};
NodeBird.PropTypes = {
    Component: PropTypes.elementType.isRequired,
};

export default NodeBird;
