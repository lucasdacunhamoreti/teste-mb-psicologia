import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
  }

  #root {
    height: 100%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: #0F0F0F;
`;