import './ExpenseItems.css';
import React from 'react';
import ExpenseDate from './ExpenseDate';
import Cards from '../UI/Cards';
const ExpenseItems=(props)=>{
    // const [expenseTitle,setExpenseTitle]=useState(props.title);
    // const setClickHandler=()=>{
    //     setExpenseTitle("Updated!!");
    // }
    const expenseTitle=props.title;
    const expenseAmount=props.amount;
    return (
        <Cards className='expenses'>
            <ExpenseDate date={props.date}/>
            <div data-aos="fade-up" className='title'>{expenseTitle}</div>
            <div data-aos="fade-up" className='amount'>${expenseAmount}</div>
            {/* <button>Update title</button> */}
        </Cards>
    );
}
export default ExpenseItems;