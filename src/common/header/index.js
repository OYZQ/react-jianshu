import React from 'react'
import { connect } from 'react-redux'
import {CSSTransition} from 'react-transition-group'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style'
import  {actionCreators}   from './store'

const Header = (props) => {
    return (
        <HeaderWrapper>
        <Logo/>
        <Nav>
            <NavItem className='left action'>首页</NavItem>
            <NavItem className='left'>下载App</NavItem>
            <NavItem className='right'>登录</NavItem>
            <NavItem className='right'>
                <i className="iconfont">&#xe655;</i>
            </NavItem>
            <SearchWrapper>
                <CSSTransition timeout={200} in={props.focused} classNames="slide">
                    <NavSearch 
                    className={props.focused ? 'focused': ''} 
                    onFocus={props.handleInputFocus}
                    onBlur={props.handleInputBlur}                    
                    ></NavSearch>
                </CSSTransition>
                <i className={props.focused ? 'iconfont focused': 'iconfont'}>&#xe615;</i>
            </SearchWrapper>
        </Nav>
        <Addition>
            <Button className="writting">
                <i className="iconfont">&#xe66f;</i>
                写文章</Button>
            <Button className="reg">注册</Button>
        </Addition>
    </HeaderWrapper>
    )
   
}

const mapStateToProps = (state) => {
    return {
        focused:state.header.focused
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);