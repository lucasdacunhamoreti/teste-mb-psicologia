import styled from 'styled-components';

export const ContainerMain = styled.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
`;

export const ContainerSecondary = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: top;

  .title {
    color: ${({ theme }) => theme.colors.text_primary};
  }

  @media (max-width: 767px) {
    width: 70%;
  }
`;