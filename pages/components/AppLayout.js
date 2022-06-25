import React, { useState } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";

import UserProfile from "../components/UserProfile";
import LoginForm from "../components/LoginForm";
const AppLayout = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    return (
        <div>
            <Menu mode="horizontal">
                <Menu.Item>
                    <Link href="/">NordBird</Link>
                </Menu.Item>
                <Menu.Item>
                    <Link href="/profile">
                        <a>profile</a>
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Input.Search
                        enterButton
                        style={{ verticalAlign: "middle" }}
                    />
                </Menu.Item>
                <Menu.Item>
                    <Link href="/signup">
                        <a>signup</a>
                    </Link>
                </Menu.Item>
            </Menu>
            <Row gutter={8}>
                <Col xs={24} md={6}>
                    {isLoggedIn ? <UserProfile /> : <LoginForm />}
                </Col>
                <Col xs={24} md={12}>
                    {children}
                </Col>
                <Col xs={24} md={6}>
                    <a
                        href="https://github.com/dongmin7208/nextNodeBird"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Made by park
                    </a>
                </Col>
            </Row>
        </div>
    );
};

AppLayout.prototype = {
    children: PropTypes.node.isRequired,
};

export default AppLayout;
