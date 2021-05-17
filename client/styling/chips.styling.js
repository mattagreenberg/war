import styled from 'styled-components';

export const Chip = styled.div`
height: 4rem;
width: 4rem;
margin-bottom: .5rem;
cursor: pointer;
background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='100' ry='100' stroke='%23${({ color }) => color}' stroke-width='10' stroke-dasharray='50%25%2c 13%25' stroke-dashoffset='75' stroke-linecap='butt'/%3e%3c/svg%3e");
border-radius: 100px;
display: flex;
justify-content: center;
align-items: center;
box-shadow: 0 0 30px rgba(0,0,0,.15) inset,
      				0 6px 10px rgba(0,0,0,.15);
`;


export const Back = styled.div`
  height: 4rem;
  width: 4rem;
  background: ${({ color }) => color};
  border-radius: 100px;
  box-shadow: 0 0 30px rgba(0,0,0,.15) inset,
      				0 6px 10px rgba(0,0,0,.15);
`;

export const TableChipBack = styled(Back)`
  position: absolute;
`;

export const Inner = styled.div`
  height: 3.4rem;
  width: 3.4rem;
  background: ${({ color }) => color};
  border-radius: 25px;
  font-family: 'Bebas Neue', cursive;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Value = styled.div`
  font-family: 'Bebas Neue', cursive;
  color: ${({ color }) => color};
  height: fit-content;
  width: fit-content;
  font-size: 1.3rem;
`;