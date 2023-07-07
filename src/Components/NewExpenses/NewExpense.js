import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense=(props)=>{
    const newDataFromForm=(data)=>{
        props.newDataApp(data);
    }
    return (
        <div data-aos="fade-down" data-aos-delay="100" className="newexpense">
            <ExpenseForm newdata={newDataFromForm}/>
        </div>
    );
}
export default NewExpense;