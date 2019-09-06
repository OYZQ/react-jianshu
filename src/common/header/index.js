import React ,{Component} from 'react'
import {CSSTransition} from 'react-transition-group'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper} from './style'

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }
        this.handleInputFocus = this.handleInputFocus.bind(this)
        this.handleInputBlur = this.handleInputBlur.bind(this)
    }

    render() {
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
                    <CSSTransition timeout={200} in={this.state.focused} classNames="slide">
                        <NavSearch 
                        className={this.state.focused ? 'focused': ''} 
                        onFocus={this.handleInputFocus}
                        onBlur={this.handleInputBlur}                    
                        ></NavSearch>
                    </CSSTransition>
                    <i className={this.state.focused ? 'iconfont focused': 'iconfont'}>&#xe615;</i>
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

    handleInputFocus() {
        this.setState({
            focused: true
        })
    }

    handleInputBlur() {
        this.setState({
            focused: false
        })
    }
}

export default Header;