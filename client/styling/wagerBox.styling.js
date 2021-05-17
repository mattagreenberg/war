import styled from 'styled-components';

export const Container = styled.div`
background: #282929;
height: 8.3rem;
width: 40%;
position: absolute;
bottom: 0;
right: 0;
`;

export const ChipContainer = styled.div`
display: flex;
justify-content: space-evenly;
flex-wrap: wrap;
align-items: center;
height: fit-content;
`;

export const UndoArrow = styled.div`
height: fit-content;
font-size: 1.3rem;
margin-left: .5rem;
cursor: pointer;
color: grey;
`;