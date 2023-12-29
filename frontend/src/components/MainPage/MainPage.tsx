import { ThemeProvider } from 'styled-components';
import BimesterCard from '../BimesterCard/BimesterCard';
import { Container, GlobalStyle } from './index';
import theme from '../../global/styles/theme';

function MainPage() {
    return (
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Container>
            <BimesterCard />
        </Container>
      </ThemeProvider>
    );
  }
  
  export default MainPage;
  