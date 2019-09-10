import React,{Component} from 'react'
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recomment from './components/Recomment'
import Writer from './components/Writer'
import Author from './components/Author'
import {connect} from 'react-redux'
import { actionCreator } from './store';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <div className="height">
                        <img className="banner-img" src="https://img1.doubanio.com/dae/niffler/niffler/images/4561e346-a48b-11e9-b0de-0242ac11002b.jpg" alt=''></img>
                    </div>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Recomment/>   
                    <Writer/>
                    <Author/>
                </HomeRight>
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData()
    }
}

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        const action = actionCreator.getHomeInfo();
        dispatch(action)
    }
})

export default connect(null,mapDispatch)(Home);