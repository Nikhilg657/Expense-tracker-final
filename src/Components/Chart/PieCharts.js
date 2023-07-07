import React from "react";
import { PieChart, Pie, Tooltip } from 'recharts';
const PieCharts = (props) => {
  const data=[
    {name:"January", monthlyExpense:0},
    {name:"February", monthlyExpense:0},
    {name:"March", monthlyExpense:0},
    {name:"April", monthlyExpense:0},
    {name:"May", monthlyExpense:0},
    {name:"June", monthlyExpense:0},
    {name:"July", monthlyExpense:0},
    {name:"August", monthlyExpense:0},
    {name:"September", monthlyExpense:0},
    {name:"October", monthlyExpense:0},
    {name:"November", monthlyExpense:0},
    {name:"December", monthlyExpense:0},
  ]
  for (const expense of props.expenses) {
    // yearlyamount+=expense.amount;
    const expenseMonth = expense.date.getMonth(); // starting at 0 => January => 0
    data[expenseMonth].monthlyExpense += expense.amount;
  }
  // const colour=generateJustOneColor();
  return (
    <PieChart className='piechart' width={300} height={300}>
      <Tooltip/>
    <Pie data={data} dataKey="monthlyExpense" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#3CBDC6" />
    <Pie data={data} dataKey="monthlyExpense" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#800080"  />

  </PieChart>
    )
};

export default PieCharts;
