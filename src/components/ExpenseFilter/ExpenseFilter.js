import React from 'react';
import './ExpenseFilter.css'

export function ExpenseFilter(props){
    const updateSelectedYear = (event) => {
        let options = [...event.target.options].filter(
            o => o.selected).map(o => o.value);
        props.onChangeFilter(options);
        // console.log('selected value', options)
    }
    return(
        <div className='expenses-filter'>
            <div className='expenses-filter-control'>
                <label>Filter by Year</label>
                <select onChange={updateSelectedYear}>
                    <option value='2022'>2022</option>
                    <option value='2021'>2021</option>
                    <option value='2020'>2020</option>
                    <option value='2019'>2019</option>
                    <option value='2018'>2018</option>
                </select>
            </div>
        </div>
    )
}