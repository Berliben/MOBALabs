import './App.css';
import Cell from './Cell'

function App() {

  const cells = []

  for(let y = 6; y >= 0; y--) {
    const row = []

    for(let x = 0; x < 7; x++) {
      row.push(<Cell key={x} x={x} y={y} />)
    }

    cells.push(<div key={y} className='row'>{row}</div>)
  }

  return (
    <div className="App">
      {cells}
      <button onClick={() => {window.location.reload(false)}}>reset</button>
    </div>
  );
}

export default App;
