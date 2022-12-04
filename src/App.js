import './App.css';
import Button from './Components/Button/Button';
import Card from './Components/Card/Card';
const {getData} = require("./db/db");

const foods=getData();

function App() {
  return (
   <>
   <h1 className="heading">Order food</h1>
   <Button title={'Добавить'} disable={false} type={'add'}/>
   <Button title={'Удалить'} disable={false} type={'remove'}/>
   <Button title={'Проверить'} disable={false} type={'checkout'}/>
    <div className="cards__container">
    {foods.map(food=>{
      return <Card food={food} key={food.id}/>
    })}
    </div>
    
   </>
   
  );
}

export default App;
