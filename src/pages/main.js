import React from 'react';
import NeonButton from "../components/neonButton";
import TextField from '@material-ui/core/TextField';
import "./main.css"
import { makeStyles } from "@material-ui/core/styles";

const styles =  theme =>({
   cssLabel:{
       color:'green'
   }
  });
  const useStyles = makeStyles(styles);
export default function Home() {
    const classes = useStyles()
    const problems = [{question:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
    ,{question:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}
    ,{question:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."}];

    function solve(){
        alert("WOW")
    }

    return (
        <div className="Container">
            <div className="Title">
                <h1>Welcome :)</h1>
                <p>To break lines use the ";", EX: 13 35; 7 2;</p>
            </div>
            {problems.map((problem,key)=>(
                <div className="ContainerOptions" key={key}>
                    <div className="problemText">
                        <p>{key+1+". "}{problem.question}</p>
                    </div>
                    <div className="actions">
                        <div style={{width:"60%"}}><TextField color="secondary"
                        fullWidth={true} label="Try me" /></div>
                        <div style={{marginLeft:"10%",width:"30%"}}><NeonButton solve={solve}/></div>
                    </div>
                    
                </div>
            ))}
        </div>
      );
}