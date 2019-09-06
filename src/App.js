import React ,{Component} from 'react';
import Header from './common/header/index'
import { Globalstyle } from './style';
import store from './store'
import { Provider } from 'react-redux'

class App extends Component {
  render() {
    return (
     <Provider store={store}>
       <Globalstyle/>
        <Header/>
     </Provider>
    );
  }
}

export default App;
