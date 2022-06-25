import { useState, useCallback, useMemo } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";

const ButtonWrapper = styled.div`
    display: flex;
    margin-top: 10px;
`;
const FormWrapper = styled(Form)`
    padding: 20px;
`;
const ButtonDivision = styled.div`
    margin-left: 5px;
`;
const LoginForm = ({ setIsLoggedIn }) => {
    const [id, setId] = useState("");
    const [password, setPassword] = useState("");
    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);
    const onChangePassword = useCallback((e) => {
        setPassword(e.target.value);
    }, []);

    // const style = useMemo(()=> ({marginTop: 10}),[]);
    const onSubmitForm = useCallback(() => {
        console.log(id, password);
        setIsLoggedIn(true);
    }, [id, password]);
    return (
        <FormWrapper onFinish={onSubmitForm}>
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
                <ButtonDivision>
                    <Link href="/signup">
                        <a>
                            <Button>Signup</Button>
                        </a>
                    </Link>
                </ButtonDivision>
            </ButtonWrapper>
        </FormWrapper>
    );
};
export default LoginForm;
