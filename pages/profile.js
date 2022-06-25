import AppLayout from "./components/AppLayout";
import Head from "next/head";
const Profile = () => {
    const followerList = [
        { nickname: "park" },
        { nickname: "誰" },
        { nickname: "誰" },
    ];
    const followingList = [
        { nickname: "park" },
        { nickname: "誰" },
        { nickname: "誰" },
    ];
    return (
        <>
            <Head>
                <title>dondon | profile</title>
            </Head>
            <AppLayout>
                <NicknameEditForm />
                <FollowList header="following List" data={followingList} />
                <FollowList header="follow List" data={followerList} />
            </AppLayout>
        </>
    );
};
export default Profile;
