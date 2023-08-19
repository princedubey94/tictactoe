import { useState } from "react";
import Card from "../cards/Card";
import "./Grid.css";
import isWinner from "../../helper/checkWinner";
function Grid({numberofcards}){
    const [board,setBoard]=useState(Array(numberofcards).fill(""));
    const [turn,setTurn]=useState(true)//turn==false>x
    const [winner,setWinner]=useState(null);
    function play(index){
        if(turn===true){
            board[index]="O";
        }else{
            board[index]="X"
        }
        const win=isWinner(board,turn ? "O":"X")
        if(win){
            setWinner(win);
        }
        setBoard([...board]);
        setTurn(!turn);
    }
    function reset(){
        setBoard(Array(numberofcards).fill(""));
        setTurn(true);
        setWinner(null);
    }
    return(
        <div className="grid-wrapper">
        {

            winner && (
                <>
                <h1 className="turnhighlight"> {winner!=="draw"?`Winner is ${winner}`:"Match is Draw"}</h1>
                <button className="reset" onClick={reset}>reset Game</button>
                </>
            )
        }
        {!winner && (<h1 className="turnhighlight">Current Turn:{turn==true ? "O":"X"}</h1>)}
            <div className="grid">
            {board.map((el,idx)=><Card key={idx} gameEnd={winner?true:false} onPlay={play} player={el} index={idx} />)}
            </div>
        </div>
        
    )
}
export default Grid;