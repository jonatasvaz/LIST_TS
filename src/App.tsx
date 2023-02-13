 import{useState} from 'react'
import * as C from "./app.style"
import {Item}from './types/Item'
import {ListItem} from './components/ListItem'
 import {AddArea} from './components/AddArea'

function App() {
 const[list,setList]=useState<Item[]>([
  {id:0,name:"comprar pão na padaria",done:false},
  {id:1,name:"comprar pão na padaria",done:true}
 ])
 const handleAddTask = (taskName: string) => {
  let newList = [...list];
  newList.push({
    id: list.length + 1,
    name: taskName,
    done: false
  });
  setList(newList);
}
   return (
    <C.Container>
       <C.Area>
          <C.Header>
              LISTA DE TAREFAS
          </C.Header>
            <AddArea onEnter={handleAddTask}/>
          {list.map((item,index)=>(
              <ListItem item={item} key={index}/>
          ))}
       </C.Area>
    </C.Container>
  );
}

export default App;
