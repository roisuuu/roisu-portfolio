import { Flex } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/shared/Footer/Footer';
import Header from './components/shared/Header/Header';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      {/* https://www.joshwcomeau.com/css/custom-css-reset/ */}
      <Global
        styles={`
          *, *::before, *::after {
            box-sizing: border-box;
          }
          * {
            margin: 0;
          }
          html, body {
            height: 100%;
          }
          body {
            line-height: 1.5;
            -webkit-font-smoothing: antialiased;
          }
          img, picture, video, canvas, svg {
            display: block;
            max-width: 100%;
          }
          p, h1, h2, h3, h4, h5, h6 {
            overflow-wrap: break-word;
          }
        `}
      />
      {/* Flex to make sure footer stays at bottom of page */}
      <Flex
        flexFlow={'column nowrap'}
        minHeight={'calc(100vh - 161px)'}
      >
        <Header/>
        <BrowserRouter>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
      </Flex>
      <Footer/>
    </>
  );
}

export default App;
