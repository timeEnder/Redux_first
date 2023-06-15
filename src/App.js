import './App.css';
import {useDispatch, useSelector} from "react-redux";
import Button from "./components/Button/Button";

function App() {
    const dispatch = useDispatch();
    const isLight = useSelector(state => state.theme.light)
  return (
    <div className="App">
      <button className={'flex flex-row items-center justify-center border-2 rounded-3xl w-96 h-56'} onClick={()=>{
          if (isLight){
              dispatch({type: "CHANGE_THEME", payload:false})
          }else{
              dispatch({type: "CHANGE_THEME", payload:true})
          }
          console.log(isLight)
      }} type={"button"}>click</button>
        <Button/>
    </div>
  );
}

export default App;
