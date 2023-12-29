import styled from 'styled-components';

export const AddButton = styled.div`
    background-color: ${({ theme }) => theme.colors.button_confirm};;
    border: none;

    display: flex;
    justify-content: space-around;
    align-items: center;

    width: 183px;
    height: 37px;

    border-radius: 12px;

    .iconAdd {
        width: 20px;
        height: 20px;
    }
`;