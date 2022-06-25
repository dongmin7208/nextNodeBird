import { useState, useCallback } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;
const FormWrapper = styled.div`
    margin-left: 20px;
`;
const LoginForm = () => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    return (
        <FormWrapper>
            <Form>
                <div>
                    <label htmlFor="user-id">Id</label>
                    <br />
                    <Input
                        name="user-id"
                        value={id}
                        onChange={onChangeId}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="user-password">password</label>
                    <br />
                    <Input
                        name="user-password"
                        value={password}
                        onChange={onChangePassword}
                        required
                    />
                </div>
                <ButtonWrapper>
                    <Button type="primary" htmlType="submit" loading={false}>
                        Login
                    </Button>
                    <Link href="/signup">
                        <a></a>
                    </Link>
                </ButtonWrapper>
            </Form>
        </FormWrapper>
    );
};
export default LoginForm;
