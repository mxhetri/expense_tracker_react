import React, {useState} from 'react';
import '../css/Expenses.css';
import {ExpenseItem} from "./ExpenseItem";
import {Card} from "../UI/Card";
import {ExpenseFilter} from "../ExpenseFilter/ExpenseFilter";

export function Expenses(props) {
    const expense_list  = [
        {id: 1, title: 'car insurance', amount: 294.66, date: new Date(2021, 5, 25)},
        {id:2, title: 'toilet paper', amount: 24.66, date: new Date(2021, 5, 25)},
        {id: 3, title: 'milk', amount: 4.6, date: new Date(2021, 5, 25)},
    ];

    if (Object.entries(props.newExpense).length !== 0){
        expense_list.push(props.newExpense);
    }

    const [filteredYear, setFilteredYear] = useState('');
    const filterChangeHandler = (selectedYear) => {
        console.log('selected year',selectedYear.toString());
        setFilteredYear(selectedYear.toString());
    }

    // select array by apply selected year filter
    const filteredExpenses = expense_list.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear
    });

    console.log('filtered expenses', filteredExpenses)
    return(
        <Card className='expenses'>
            <ExpenseFilter selectedYear={filteredYear} onChangeFilter={filterChangeHandler}/>
            {filteredExpenses.length === 0? <p>No expenses found</p>
                : <ExpenseItem expenses={filteredExpenses}/>}
        </Card>
    )
}