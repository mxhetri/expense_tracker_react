import React, {useState} from "react";
import './ExpenseForm.css'

export function ExpenseForm(props) {
    // const [newExpense, setNewExpense] = useState({
    //     newTitle: '',
    //     newAmount: '',
    //     newDate: ''
    // });
    const [newTitle, setNewTitle] = useState('');
    const [newAmount, setNewAmount] = useState(0);
    const [newDate, setNewDate] = useState('');

    const titleChangeHandler = (event) => {
        setNewTitle(event.target.value);
        // setNewExpense({
        //     ...newExpense,
        //     newTitle: event.target.valueOf
        // });

        /*
        React schedule state update, it doesn't perform them instantly,
        React guar antee it will give latest state instance keeping all state in consideration
        we should use this approach whenever our state update depends on previous state.
        */
        // setNewExpense((prevState) => {
        //     return {...prevState, newTitle: event.target.value}
        // } )
    }

    const amountChangeHandler= (event) => {
        setNewAmount(event.target.value);
        // setNewExpense({
        //     ...newExpense,
        //     newAmount: event.target.valueOf
        // })
    }

    const dateChangeHandler = (event) => {
        setNewDate(event.target.value);
        // setNewExpense({
        //     ...newExpense,
        //     newDate: event.target.value
        // })
    }

    const submitHandler = (event) => {
        event.preventDefault(); // it prevents default behaviour from happening
        const expenseData = {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
        }
        props.onSaveExpenseData(expenseData);
        // console.log('entire expense data', expenseData);
        setNewDate('');
        setNewTitle('');
        setNewAmount('');
    }
    return (
    <form onSubmit={submitHandler}>
        <div className='new-expense-controls'>
            <div className='new-expense-control'>
                <label>Title</label>
                <input type='text' value={newTitle} onChange={ titleChangeHandler}/>
            </div>
            <div className='new-expense-control'>
                <label>Amount</label>
                <input type='number'  value={newAmount} onChange={amountChangeHandler}/>
            </div>
            <div className='new-expense-control'>
                <label>Date</label>
                <input type='date' min='2019-01-21' value={newDate}
                       max='2022-12-31' onChange={dateChangeHandler}/>
            </div>
        </div>

        <div className='new-expense-actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
    )
}