import React ,{Component} from 'react';
import Header from './common/header/index'
import { Globalstyle } from './style';
import store from './store';
import { Provider } from 'react-redux';
import { BrowserRouter,Route } from 'react-router-dom';
import Home from './pages/home/index'
import Detail from './pages/detail/index'
import Login from './pages/login'
 
class App extends Component {
  render() {
    return (
     <Provider store={store}>
       <Globalstyle/>
        <BrowserRouter>
         <div>
          <Header/>
          <Route path='/' exact component={Home}></Route>
          <Route path='/login' exact component={Login}></Route>
          <Route path='/detail/:id' exact component= {Detail}></Route>
         </div>
        </BrowserRouter>
     </Provider>
    );
  }
}

export default App;
