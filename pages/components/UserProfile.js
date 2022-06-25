import { Avatar, Card } from "antd";
const UserProfile = () => {
    return (
        <Card
            actions={[
                <div key="twit">
                    twit!
                    <br />0
                </div>,
                <div key="followings">
                    followings!
                    <br />0
                </div>,
                <div key="followings">
                    Follo
                    <br />0
                </div>,
            ]}
        >
            <Card.Meta title="park" avatar={<Avatar>DM</Avatar>} />
            {/* <Button>LogOut</Button> */}
        </Card>
    );
};
export default UserProfile;
