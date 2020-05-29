import React from 'react';
import "./componentsCss.css"
/*
credits for the button idea: https://www.youtube.com/watch?v=ex7jGbyFgpA
*/
export default function NeonButton(props) {

    return (
        <div className="neonButtonDIV" onClick={props.solve}>
            <span/>
            <span/>
            <span/>
            <span/>
            Solve
        </div>
      );
}