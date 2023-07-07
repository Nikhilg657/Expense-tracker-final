// import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";
import Cards from "../UI/Cards";
import React,{useState} from 'react';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart'
import PieCharts from "../Chart/PieCharts";
import "./Expense.css";
const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');

  const filterChangeHandler = selectedYear => {
    setFilteredYear(selectedYear);
    // console.log(filteredYear);
  };
  const filteredExpenses=props.items.filter((e)=>{
    // console.log(e.date.getFullYear().toString());
    return e.date.getFullYear().toString()===filteredYear;
});
  return (
    <div>
      <Cards className="Exp">
      <ExpenseFilter items={props.items} selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpensesChart expenses={filteredExpenses} />
      <div className="pie"><PieCharts expenses={filteredExpenses} /></div>
      <ExpensesList items={filteredExpenses}/>
      </Cards>
    </div>
  );
};
export default Expenses;
