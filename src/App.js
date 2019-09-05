import React ,{Component} from 'react';
import Header from './common/header/index'
import { Globalstyle } from './style';

class App extends Component {
  render() {
    return (
     <div>
       <Globalstyle/>
        <Header/>
     </div>
    );
  }
}

export default App;
