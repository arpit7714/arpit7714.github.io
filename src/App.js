import './App.css';

function Name(){
  return(
      <div className="name">
        <div className="item item1"></div>
        <div className="item item2"></div>
        <div className="item item3"></div>
       </div> 
  );
}
function Photo(){
  return(
        <div>
        <div className="photo"></div>
        <span className="tag"> Arpit Varshney </span>
        </div>
    )
}
function App() {
  return (
    <div className="App">
        <Photo/>
    </div>
  );
}


export default App;
