import React, {useState} from 'react';
import {ExpenseDate} from "./ExpenseDate";
import {Card} from "../UI/Card";

// this component is to render individual expense item
export function Expense(props){
    const [title, setTitle] = useState(props.expense.title)
    const changeTitle = () => {
        setTitle('kamal chhetri');
    }
    return(
        <Card className='expense-item'>
            <ExpenseDate expenseDate={props.expense.date}/>
            <div className='expense-item-description'>
                {/*<h2>{props.expense.title}</h2>*/}
                <h2>{title}</h2>
                <div className='expense-item-price'>${props.expense.amount}</div>
                <button onClick={changeTitle}>Change Title</button>
            </div>
        </Card>
    )
}