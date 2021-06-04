import React from 'react';
import styled from 'styled-components';
import { BsStopwatchFill, FaStop, FaPlay } from 'react-icons/all';

const HeaderSection = styled.div`
    margin: 20px;
    display: grid;
    grid-template: repeat(1, 1fr)/repeat(4, 1fr);
    width: 50%;
    padding-left: 25%;
    padding-right: 25%;
`;
const Title = styled.div`
text-align: center;
font-weight: 700;
font-size: large;
padding: 10px;`;

const Button = styled.button`
width: 40%;
padding: 4px;
border-radius: 4px;
background-color: rgb(0, 119, 197);
color: white;
border: 1px solid rgb(0, 119, 197);
cursor: pointer;
`;

const StartBtn = styled(Button)`
margin-left: 30%;
`;

function Header({ moves, reset, time, startTimer }) {
    

    return (
        <div>
            <Title> Arrange numbers in right order</Title>
            <HeaderSection>
                <StartBtn onClick={() => startTimer()}><FaPlay></FaPlay></StartBtn>
                <div>{<BsStopwatchFill></BsStopwatchFill>} {time}</div>
                <div>Moves: {moves}</div>
                <div> <Button onClick={() => reset()}><FaStop></FaStop></Button></div>
            </HeaderSection>
        </div>

    )
}

export default Header;