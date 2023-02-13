 import * as C from"./style"
import { useState,KeyboardEvent  } from "react";

type Props={
    onEnter:(taskName:string) => void
}

export const AddArea=({onEnter}:Props)=>{
    const [inputText, setInputText] = useState('');
   
    const handleKeyUp = (e:KeyboardEvent) => {
        if(e.code === 'Enter' && inputText !== '') {
            onEnter(inputText);
            setInputText('');
            return
        }
    }

    return(
     <C.Container>
         <div className="image">➕</div>
            <input
                type="text"
                value={inputText}
                onChange={e=>setInputText(e.target.value)}
                placeholder="Adicione uma tarefa"
                onKeyUp={handleKeyUp}
               />
     </C.Container>
    )
}