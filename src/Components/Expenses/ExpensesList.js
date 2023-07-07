import './ExpensesList.css';
import ExpenseItems from './ExpenseItems';
const ExpensesList=(props)=>{
    if(props.items.length===0)
    {
        return <p className='emptyexpense'>No Expense Found</p>;
    }
    return (<div>
        {
        props.items.map((x)=>(
          <ExpenseItems
            key={Math.random()}
            date={x.date}
            title={x.title}
            amount={x.amount}
          ></ExpenseItems>
        ))
      }
    </div>);

};
export default ExpensesList;