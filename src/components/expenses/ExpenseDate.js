import React from 'react';
import '../css/ExpenseDate.css'

export function ExpenseDate(props){
    return(
        <div className='expense-date'>
            <div>
                {props.expenseDate.toLocaleString('en-US', {month: 'long'})}
            </div>
            <div>
                {props.expenseDate.toLocaleString('en-US', {day: '2-digit'})}
            </div>
            <div>
                {props.expenseDate.getFullYear()}
            </div>
        </div>
    )
}