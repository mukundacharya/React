
import Expenses from './components/Expenses'
function App() {
  const expenses = [
    {'id':1,'title':'Car Insurance','Date':new Date(2021,1,3),'price':'$200'},
    {'id':2,'title':'Bike Insurance','Date':new Date(2021,1,3),'price':'$100'},
    {'id':3,'title':'Mobile Bill','Date':new Date(2021,1,3),'price':'$20'},
    {'id':4,'title':'Internet Bill','Date':new Date(2021,1,3),'price':'$50'}
  ];
  return (
    <div>
      <h2>Let's get started!</h2>
      <Expenses 
      expenses = {expenses}/>
    </div>
  );
}

export default App;
