import React from 'react';
import styled from 'styled-components';
import { BsStopwatchFill, FaPlay, FaPause, FaRedo } from 'react-icons/all';

const HeaderSection = styled.div`
    margin: 20px;
    display: grid;
    grid-template: repeat(1, 1fr)/repeat(3, 1fr);
   
    color:white;
`;
const Title = styled.h1`
text-align: center;
font-weight: 700;
padding: 10px;
color:white`;

const Button = styled.button`
padding: 10px;
border-radius: 4px;
background-color: #fca311;
color: black;
border: #fca311;
cursor: pointer;
&:hover {
    transform: scaleY(1.2);
}
`;


function Header({ moves, reset, time, startTimer, pauseGame }) {
    

    return (
        <div>
            <Title> Arrange numbers in right order</Title>
            <HeaderSection>
                
                <h3>{<BsStopwatchFill></BsStopwatchFill>} {time}</h3>
                <h3>Moves: {moves}</h3>
                <h3><Button onClick={() => startTimer()}><FaPlay></FaPlay> Play</Button> <Button onClick={() => reset()}><FaRedo></FaRedo> Reset</Button> </h3>
                {/* <Button onClick={() => pauseGame()}><FaPause></FaPause></Button> */}
            </HeaderSection>
        </div>

    )
}

export default Header;