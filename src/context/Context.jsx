import { createContext, useState } from "react";
import Run from '../config/gemini';


export const Context = createContext(); 


const ContextProvider = (props) => {
    const [input, setInput] = useState(""); 
    const [recentPrompt, setRecentPrompt] = useState("");
    const [prevPrompts, setPrevPrompts] =useState([]); 

    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false); 

    const [resultData, setResultData]= useState("");

    const onSent = async(prompt) => {
        setResultData("")
        setLoading(true)
        setShowResult(true)
        setRecentPrompt(input)
        try {
            const response = await Run(input); 
            console.log("Response Received: ", response); 

            setResultData(response);

        }
        catch (error){
            console.error("Error fetching results: ", error); 
            setResultData("An error occurred while fetching the result");
        }
       
        setLoading(false)

        setInput("")

    }

    const contextValue = {
        prevPrompts,
        setPrevPrompts,
        onSent, 
        setRecentPrompt,
        recentPrompt, 
        showResult,
        loading,
        resultData,
        input, 
        setInput


    }


    return (
        <Context.Provider value={contextValue}> 
        {props.children}
        </Context.Provider>   
    )
}


export default ContextProvider; 