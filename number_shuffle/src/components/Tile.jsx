import React from 'react';
import styled from 'styled-components';

const TileItem = styled.div`
    background-color: black;
    color: white;
    padding: 10px;
    border: 1px solid gray;
    text-align:center;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%), 0 6px 20px 0 rgb(0 0 0 / 19%);
`;

function Tile({index, label, isGrayItem, shiftTile, isClickable }) {
    const clickTile = ()=>{
        if(isClickable){
            shiftTile(index,label,isGrayItem);
        }else{
            return false;
        }
    }

    return (
        <TileItem index={index} onClick={clickTile} style={
            isGrayItem?{backgroundColor:'gray'}: {backgroundColor:'black'}
            }
            >
            {label}
        </TileItem>
    );
}
export default Tile;