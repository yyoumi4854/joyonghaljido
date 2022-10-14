import Head from "next/head";
import GlobalStyles from "../styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from '../styles/theme';
import '../styles/app.css';

import Header from '../components/header/header';

const app = ({ Component }) => {
  return (
    <>
      <Head>
        <title>조용할지도</title>
      </Head>

      <GlobalStyles />
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
