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
            <div style={{ paddingTop: '100px', display: 'flex', justifyContent: 'center' }}>
                <Component />
            </div>
        </>
    );
}

export default app;