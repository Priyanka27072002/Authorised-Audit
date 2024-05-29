import './App.css';
import Routing from './Routing';
import { Provider } from 'react-redux';
import { Store } from './Store';
function App() {
  return (
    <div>
      <Provider store={Store}>
      <Routing/>
      </Provider>
      
    </div>
  );
}

export default App;
