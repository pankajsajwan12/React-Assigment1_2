import logo from './logo.svg';
import './App.css';
import Logo from './components/Logo'
import Links from './components/Links';
import Button from './components/Button'

let style1 = {
  width:'100%',
  display:'flex',
  color:'white',
  justifyContent:"space-Between",
  background:'black',
}
function App() {
  return (
    <div style={style1}>  
      <Logo/>
      <Links />
      <Button/>
    </div>
  );
}

export default App;
