import './App.css';
import {Expenses} from "./components/expenses/Expenses";
import {NewExpense} from "./components/NewExpense/NewExpense";
import {useState} from "react";

function App() {
    const [newExpense, setNewExpense] = useState({})
    const addExpenseHandler = (expense) => {
        setNewExpense(expense);
    }
    return (
        <div>
            <NewExpense onAddExpense={addExpenseHandler}/>
            <Expenses newExpense={newExpense}/>
        </div>
    );
}

export default App;
