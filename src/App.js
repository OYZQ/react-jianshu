import React ,{Component} from 'react';
import Header from './common/header/index'
import { Globalstyle } from './style';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
 
class App extends Component {
  render() {
    return (
     <Provider store={store}>
       <Globalstyle/>
        <Header/>
        <BrowserRouter>
         <div>
          <Route path='/' exact render={()=><div>home</div>}></Route>
          <Route path='/detail' exact render={()=><div>detail</div>}></Route>
         </div>
        </BrowserRouter>
     </Provider>
    );
  }
}

export default App;
