import React ,{Component} from 'react';
import Header from './common/header/index'
import { Globalstyle } from './style';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './pages/home/index'
import Detail from './pages/detail/index'
 
class App extends Component {
  render() {
    return (
     <Provider store={store}>
       <Globalstyle/>
        <Header/>
        <BrowserRouter>
         <div>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component= {Detail}></Route>
         </div>
        </BrowserRouter>
     </Provider>
    );
  }
}

export default App;
