import React from "react";
import Inputs from "../Inputs";

function Home(){
    const [inputsValue,setInputsValue]=React.useState({
        email:"",
        fullname:""

    });

    const[isShowResult,setIsShowResult]=React.useState(true);

    return(
        <>
        {isShowResult ? (<Inputs inputsValue={inputsValue} setInputsValue={setInputsValue} setIsShowResult={setIsShowResult}/>)
         : 
         (<>
         <h1>{inputsValue.fullname}</h1>
         <h1>{inputsValue.email}</h1>
         </>) 
         } 
        </>
    );

}

export default Home;