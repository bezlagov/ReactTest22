import { DebugComponent } from '../DebugComponent/DebugComponent';
import { Example } from '../Example';
import { FirstComponent } from '../FirstComponent/firstComponent';
import FunctionComponent from '../FunctionComponent';
import './App.css';

const user = {
  name: "Ivan",
  age: 25
}

/*
const {name, age} = user;
console.log(age);
*/
const debugMode = true;

function App() {
  return (
    <div className="App">
      <DebugComponent isDebug={debugMode} />
      <FirstComponent name="Alex">
        <h1>some text {user.name}</h1>
      </FirstComponent>
      <FunctionComponent name={user.name} age={user.age} />
      <FunctionComponent name={user.name}/>

      <hr />

      <Example />
      <Example name="Ivan" />
      <hr />
    </div >
  );
}

export default App;
