import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri'
import Button from "../UI/Button"
import  styles from './TodosActions.module.css'

function TodosActions ({resetTodos, deleteCompletedTodos, completedTodosExist }) {
    return (
    <div className={styles.todosActionsContainer}>
    <Button title="Reset Todos" onClick={resetTodos}>
        <RiRefreshLine/>
    </Button>
    <Button disabled={!completedTodosExist} onClick={deleteCompletedTodos} title="Clear Completed Todos">
        <RiDeleteBin2Line/>
    </Button>
    </div>
    )
}

export default TodosActions