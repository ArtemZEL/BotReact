import './App.css';
import Button from './Components/Button/Button';
function App() {
  return (
   <>
   Hi
   <Button title={'Добавить'} disable={false} type={'add'}/>
   <Button title={'Удалить'} disable={false} type={'remove'}/>
   <Button title={'Проверить'} disable={false} type={'checkout'}/>

   </>
   
  );
}

export default App;
