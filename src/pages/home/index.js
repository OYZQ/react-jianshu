import React,{PureComponent} from 'react'
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recomment from './components/Recomment'
import Writer from './components/Writer'
import Author from './components/Author'
import {connect} from 'react-redux'
import { actionCreator } from './store';
import { BackTop } from './style'

class Home extends PureComponent {

    handleScrollTop() {
        window.scrollTo(0,0)
    }

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
                {this.props.showScroll ?  <BackTop onClick={this.handleScrollTop}>顶部</BackTop> : null }
               
            </HomeWrapper>
        )
    }
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvents();
    }

    componentWillMount() {
        window.removeEventListener('scroll',this.props.changeScrollTopShow)
    }

    bindEvents() {
        window.addEventListener('scroll',this.props.changeScrollTopShow)
    }


}

const mapState = (state) => ({
    showScroll:state.getIn(['home','showScroll'])
})

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreator.getHomeInfo())
    },
    changeScrollTopShow() {
        if (document.documentElement.scrollTop > 400) {
        dispatch(actionCreator.toggleTopShow(true))
        }else {
            dispatch(actionCreator.toggleTopShow(false))
        }
    }
})

export default connect(mapState,mapDispatch)(Home);