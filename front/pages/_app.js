import Head from 'next/head';
import '../css/app.css'

import Header from '../components/header';

const app = ({ Component }) => {
    return (
        <>
            <Head>
                <title>조용한 동네찾기</title>
            </Head>
            <Header />
            <Component />
        </>
    );
}

export default app;