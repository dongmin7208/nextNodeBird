import AppLayout from "./components/AppLayout";
import Head from "next/head";
const Profile = () => {
    return (
        <>
            <Head>
                <title>donmin | profile</title>
            </Head>
            <AppLayout>
                <div>my profile</div>
            </AppLayout>
        </>
    );
};
export default Profile;
