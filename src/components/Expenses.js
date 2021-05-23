import "./Expenses.css";
import ExpenseComponent from "./ExpenseComponent";
function Expenses(props) {
    const expenses= props.expenses;
  return (
    <div className="expenses">
      <ExpenseComponent
        title={expenses[0].title}
        Date={expenses[0].Date}
        price={expenses[0].price}
      ></ExpenseComponent>
      <ExpenseComponent
        title={expenses[1].title}
        Date={expenses[1].Date}
        price={expenses[1].price}
      ></ExpenseComponent>
      <ExpenseComponent
        title={expenses[2].title}
        Date={expenses[2].Date}
        price={expenses[2].price}
      ></ExpenseComponent>
      <ExpenseComponent
        title={expenses[3].title}
        Date={expenses[3].Date}
        price={expenses[3].price}
      ></ExpenseComponent>
    </div>
  );
}

export default Expenses;
