import styled from 'styled-components';

export const Heading = styled.h1`
  text-align: center;
  color: #ea580c;
`;

export const Content = styled.div`
  overflowy: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  position: fixed;
  width: auto; /* Remove width: 100% */
  left: auto; /* Remove left: 50% */
  right: 10px; /* Position it 20px from the right */
  bottom: 20px; /* Position it 20px from the bottom */
  height: 20px;
  padding: 55px;
  margin: 10px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: #ea580c;
`;
