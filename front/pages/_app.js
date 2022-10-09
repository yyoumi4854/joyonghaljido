import Head from 'next/head';
// import '../css/app.css'
import GlobalStyles from '../css/globalStyles';
import { ThemeProvider } from "styled-components";
import theme from '../css/theme';


import Header from '../components/header';

const app = ({ Component }) => {
    return (
        <>
            <Head>
                <title>조용한 동네찾기</title>
            </Head>

            <GlobalStyles/>
            <ThemeProvider theme={theme}>
                <Header />
                <div>
                    <Component />
                </div>
            </ThemeProvider>
        </>
    );
}

export default app;