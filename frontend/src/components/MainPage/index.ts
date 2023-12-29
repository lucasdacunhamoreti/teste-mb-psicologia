import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Montserrat', 'sans-serif';
    background-color: ${({ theme }) => theme.colors.background_main};
  }

  #root {
    height: 100%;
  }
`;

export const Container = styled.div`
  margin-top: 40px;
  width: 100%;
  height: 100%;
  
`;