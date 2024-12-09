import { useState } from "react";
import sound from './assets/laugh.mp3'
import bobots from './assets/bobots.gif'

export default function Congratulations(){
    const [text, setText] = useState('');

    const congrats = ['11010000 10100001 00100000 11010000 10011101 11010000 10111110 11010000 10110010 11010001 10001011 11010000 10111100 00100000 11010000 10010011 11010000 10111110 11010000 10110100 11010000 10111110 11010000 10111100',
        '11010000 10011111 11010000 10111110 11010000 10110111 11010000 10110100 11010001 10000000 11010000 10110000 11010000 10110010 11010000 10111011 11010001 10001111 11010000 10110101 11010000 10111100',
        '11010000 10010110 11010000 10110101 11010000 10111011 11010000 10110000 11010000 10110101 11010000 10111100 00100000 11010001 10000001 11010001 10000111 11010000 10110000 11010001 10000001 11010001 10000010 11010001 10001100 11010001 10001111',]
    const audio = new Audio(sound);

    let n = 1;

    function Typing(){
        if(n >= congrats.length) n = 0;
        n++;
        setText(congrats[n]);       
        audio.play();   
    }

    return(
        <>
            <div className="gif">
                <img src= {bobots} className="gif"></img>
            </div>
            
            <div className="info">
                <button onClick={Typing}>Что же скажут роботы?</button>
                <div className="inlineDiv">
                    <div className="typed_out">{text}</div>
                </div>
            </div>
  
        </>
    )
}