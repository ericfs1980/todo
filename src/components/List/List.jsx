import { useEffect, useState } from "react";
import { Task } from "../Task/Task";
import { StyledList } from "./styles";
import { MagicMotion } from 'react-magic-motion';

export function List(){


    /*const taskList = [
        {id: 1, title: 'Pagar Contas'},
        {id: 2, title: 'Fazer Compras'},
        {id: 3, title: 'Estudar React'}
    ]*/


    sessionStorage.setItem('user','não');

    // HOOK useState()
    //Nome do estado, função atualizadora do estado.
    const [taskList, setTaskList] = useState(
        //Verifica se taskList contem informação, caso não tenha iniciar com array vazio.
        localStorage.getItem('taskList')? JSON.parse(localStorage.getItem('taskList')):[]
    );
    const [newTask, setNewTask] = useState('');

    function addTask(e){
        //Não executar o comportamento Default, no caso do Exemplo, 
        //Comportamento Default do Formulário - Submit com refresh de pagina.
        e.preventDefault();

        // ...spread operator (...)
        setTaskList([...taskList, {id: new Date().getTime(), title: newTask}]);
        setNewTask('');//Limpa o valor do Input

    }

    function removeTask(id){
        //console.log(`Tarefa ${id} removida com sucesso!`);

        setTaskList(
            taskList.filter(task => (task.id !== id))
        );
    }


    useEffect(
        ()=>{

            localStorage.setItem('taskList', JSON.stringify(taskList));

        },[taskList]
    )

    return(
        <MagicMotion transition={{type:'spring', bounce:0.7, duration:1, delay:0.5}}>
            <StyledList>
                <form onSubmit={addTask}>
                    <input 
                        type="text" 
                        placeholder="Digite sua tarefa" 
                        value={newTask}
                        onChange={(e)=>setNewTask(e.target.value)}
                    />
                    <button 
                        type='submit'
                        onClick={addTask} 
                        disabled={newTask ===''}
                    >Criar
                    </button>
                </form>

                {
                    taskList.map((task) => (
                        //onRemove (É uma props, poderia ter qualquer nome)
                        <Task title={task.title} id={task.id} key={task.id} onRemove={removeTask} />
                    ))
                }    
            </StyledList>
        </MagicMotion>
    )
}