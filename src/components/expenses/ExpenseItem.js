import '../css/ExpenseItem.css';
import React, {useState} from 'react';
import {ExpenseDate} from "./ExpenseDate";
import {Card} from "../UI/Card";
import {Expense} from "./Expense";


export function ExpenseItem(props) {
    // const expenseDate= new Date(2021, 2, 28);
    // const expenseTitle = 'car insurance';
    // const expenseAmount = 294.89;

    return (
        props.expenses.map(expense => {
            return (
                <Expense expense={expense} key={expense.id}/>
                // <Card className='expense-item'>
                //     <ExpenseDate expenseDate={expense.date}/>
                //     <div className='expense-item-description'>
                //         <h2>{expense.title}</h2>
                //         <div className='expense-item-price'>${expense.amount}</div>
                //          <button onClick={(e) => changeTitle(e, {expense})}>Change Title</button>
                //     </div>
                // </Card>
            )
        })
    )
}