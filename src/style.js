import styled, {css, keyframes} from 'styled-components'

export const Container = styled.div`
margin: 20px;
`;
export const Title = styled.h1`
color: blue;
font-family: Arial, Helvetica, sans-serif;
font-size: 25px;
text-align: center;
`;

export const Text = styled.p`
font-size: 20px;
display: flex;
text-align: justify;
line-height: 30px;
`;

const rotate = keyframes`
from{
    transform: rotate(0deg);
}
to{
    transform: rotate(360deg);
}
`;

export const Rotate = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100px;
height: 100px;
border-radius: 50%;
border: 2px solid coral;
color: coral;
animation: ${rotate} 2s linear infinite
`;

export const Button = styled.button`
background: coral;
color: white;
width: 150px;
height: 40px;
margin: 30px;
border: none;
border-radius: 20px;
transition: all 0.2s;
cursor: pointer;
:active{
    transform: scale(0.95);
}
`