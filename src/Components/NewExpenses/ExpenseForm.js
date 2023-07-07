import React ,{useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm=(props)=>{
    let [enteredtitle,setExpenseTitle]=useState('');
    let [enteredamount,setExpenseAmount]=useState('');
    let [entereddate,setExpenseDate]=useState('');
    let setTitle=(e)=>{
        setExpenseTitle(e.target.value);
    }
    const setAmount=(e)=>{
        setExpenseAmount((e.target.value));
    }
    const setDate=(e)=>{
        setExpenseDate(e.target.value);
    }
    const onSubmitHandler=(e)=>{
        e.preventDefault();
        if(enteredtitle.trim().length===0)
        {
            return;
        }
        if(enteredamount.trim().length===0)
        {
            return;
        }
        if(entereddate.trim().length===0)
        {
            return;
        }

        const newData={
            title:enteredtitle,
            amount: +enteredamount,
            date: new Date(entereddate)
        };
        props.newdata(newData);
        setExpenseAmount('');
        setExpenseTitle('');
        setExpenseDate('');
    }
    return (
        <form onSubmit={onSubmitHandler} action="">
        <div className='form_contents'>
            <div className='form_content'>
                <label>Title</label>
                <input type="text" value={enteredtitle} onChange={setTitle} />
            </div>
            <div className='form_content'>
                <label htmlFor="">Amount</label>
                <input type="number" min={0.01} step={0.01} value={enteredamount} onChange={setAmount} />
            </div>
            <div className="form_content">
                <label htmlFor="">Date</label>
                <input type="date" value={entereddate} onChange={setDate} />
            </div>
            <div className="form_content">
                <button type='submit'>Add Expense</button>
            </div>
        </div>
        </form>
        )
    ;
}
export default ExpenseForm;