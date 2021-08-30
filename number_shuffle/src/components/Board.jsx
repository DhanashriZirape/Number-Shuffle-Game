import React, {  useEffect, useRef, useState } from 'react';
import Tile from './Tile';
import styled from 'styled-components';
import {shuffle, checkTileMovability, formatTime} from '../utils/utils';
import Header from './Header';
 
const Tiles = styled.div`
display: grid;
grid-template: repeat(3, 1fr) / repeat(3, 1fr);

box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`;

const BoardDiv = styled.div`
max-width: 800px;
min-width: 500px;
background: #5e5c5c;
padding: 0 5% 4% 5%;
margin: 10%;
`;
const Instructions = styled.div`
color:white;
`;
function Board() {
    const [allTiles, setAllTiles] = useState([1, 2, 3, 4, 5, 6, 7, 8,9]);
    const [startTime, setStartTime] = useState(new Date().getTime());
    const [moves, setMoves] = useState(0);
    const [time, setTime] = useState(`00:00:00`);
  
    let grayItemIndex = null;
    const interval = useRef(null);
  
    
    useEffect(() => {
        reset();
    },[]);

    const shiftTile = (index,label,isGrayItem)=>{
        setMoves(moves+1);
        if(!isGrayItem && checkTileMovability(index, grayItemIndex)){
            let currentTiles = allTiles;
            currentTiles[grayItemIndex] = currentTiles[index];
            currentTiles[index] = 9;
            setAllTiles([...currentTiles]);
        }
    }
   
    const reset = ()=> {
        if (interval.current) {
            clearInterval(interval.current);
            setTime(`00:00:00`);
            setMoves(0);
            interval.current = null;
        }
            const newTiles = shuffle(allTiles);
            setAllTiles([ ...newTiles ]);
            setStartTime(new Date().getTime());
    }

    const startTimer = () => {
        if (!interval.current) {
            interval.current = setInterval(() => displayTime(), 1000)
        }
        setStartTime(new Date().getTime());
    }

    const displayTime = () => {
        const currentTime = new Date().getTime();
        const seconds = formatTime((currentTime - startTime) / 1000);
        //seconds
        if (seconds < 60) {
            setTime(`00:00:${seconds}`);
        }//minutes
        else if (seconds < 3600) {
            const minutes = formatTime(seconds / 60);
            const remainingSec = seconds % 60;
            setTime(`00:${minutes}:${remainingSec}`);
        } else {
            const hour = formatTime(seconds / 3600);
            const remainingSec = seconds % 3600;
            const minutes = Math.floor(remainingSec / 60)
            const sec = remainingSec % 60;
            setTime(`${hour}:${minutes}:${sec}`);
        }
    }

    const pauseGame = () =>{
        // pause current time
    };

    return (
        <BoardDiv>
            <Header moves={moves} reset={reset} time={time} startTimer={startTimer}></Header>
            <Tiles >
                {
                    allTiles.map((item,index) => {
                        const isGrayItem = item === 9 ? true: false;
                        if(isGrayItem){
                            grayItemIndex = index;
                        }
                        return <Tile key={index} index={index} label={isGrayItem ? '': item} 
                        isGrayItem={isGrayItem} shiftTile={shiftTile}
                        isClickable = {interval.current?true:false}
                        ></Tile>
                    })
                }
            </Tiles>
            <Instructions>
               <h4>Instructions:</h4> 
               <ul>
                   <li>Click on 'Play' button to start</li> 
                   <li> Click on tile to move up/ down/ right/ left</li> 
                   <li> Tile will move only if blank tile is nearby (up/ down/ right/ left)</li> 
                </ul>
            </Instructions>
        </BoardDiv>
    );
}

export default Board;