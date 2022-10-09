import Head from 'next/head';
// import '../css/app.css'
import GlobalStyles from '../css/globalStyles';

import Header from '../components/header';

const app = ({ Component }) => {
    return (
        <>
            <Head>
                <title>조용한 동네찾기</title>
            </Head>
            
            <GlobalStyles/>
            <Header />
            <div style={{ paddingTop: '100px', display: 'flex', justifyContent: 'center' }}>
                <Component />
            </div>
        </>
    );
}

export default app;