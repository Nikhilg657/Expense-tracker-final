import "./ExpenseFilter.css";
// import React,{useState} from 'react';
function unique(value, index, array) {
  return array.indexOf(value) === index;
}
const ExpenseFilter = (props) => {
    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
      };
      const years=props.items.map((item)=>(item.date.getFullYear().toString()));
      const options=years.filter(unique);
      options.sort(function(a, b){return a-b});

  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select value={props.selected} onChange={dropdownChangeHandler}>
          {
            options.map((item)=>(
              <option value={item} key={Math.random()}>{item}</option>
            ))
          };
          {/* <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option> */}
        </select>
      </div>
    </div>
  );
};
export default ExpenseFilter;
