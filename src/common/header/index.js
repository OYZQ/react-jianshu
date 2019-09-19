import React,{ Component } from 'react'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {CSSTransition} from 'react-transition-group'
import {HeaderWrapper,Logo,Nav,NavItem,NavSearch,Addition,Button,SearchWrapper,SearchInfo,SearchInfoTitle,SearchInfoSwitch,SearchInfoItem,SearchInfoList} from './style'
import  {actionCreators}   from './store'
import { actionCreators as loginActionCreators} from '../../pages/login/store' 

class Header extends Component {

    getListArea()  {
        const { focused,list,mouseIn,page,handleMouseEnter,handleMouseLeave,handleChangePage,totalPage } = this.props;
        const newList = list.toJS();
        const pageList = [];

        if(newList.length) {
            for (let i = (page-1)*10;i < page*10 ;i++) {
                pageList.push( <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
            }
        }
        if(focused || mouseIn) {
            return (
                <SearchInfo
                 onMouseEnter={handleMouseEnter}
                 onMouseLeave={handleMouseLeave}
                 >
                <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch onClick={() => {handleChangePage(page,totalPage,this.spinIcon)}}>
                    <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                    换一批
                </SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                   {pageList}
                </SearchInfoList>
            </SearchInfo>
            )
        }else {
            return null;
        }
    }

    render () {
        const { focused,handleInputFocus,handleInputBlur,list,login,loginOut } = this.props;
        return (
        <HeaderWrapper>
            <Link to='/'>
                <Logo/>
            </Link>
            <Nav>
                <NavItem className='left action'>首页</NavItem>
                <NavItem className='left'>下载App</NavItem>
                {
                    login ?  <NavItem className='right' onClick={loginOut}>退出</NavItem>:<Link to='/login'><NavItem className='right'>登录</NavItem></Link>
                }
                <NavItem className='right'>
                    <i className="iconfont">&#xe655;</i>
                </NavItem>
                <SearchWrapper>
                    <CSSTransition timeout={200} in={focused} classNames="slide">
                        <NavSearch 
                        className={focused ? 'focused': ''} 
                        onFocus={()=>handleInputFocus(list)}
                        onBlur={handleInputBlur}                    
                        ></NavSearch>
                    </CSSTransition>
                    <i className={focused ? 'iconfont focused zoom': 'iconfont zoom'}>&#xe615;</i>
                    {this.getListArea(focused)}
                </SearchWrapper>
            </Nav>
            <Addition>
                <Link to="/write">
                    <Button className="writting">
                        <i className="iconfont">&#xe66f;</i>
                        写文章
                    </Button>
                </Link>
                <Button className="reg">注册</Button>
             </Addition>
    </HeaderWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused:state.get('header').get('focused'),
        list: state.getIn(['header','list']),
        page: state.getIn(['header','page']),
        mouseIn: state.getIn(['header','mouseIn']),
        totalPage:state.getIn(['header','totalPage']),
        login:state.getIn(['login','login'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if(list.size === 0) {
                dispatch(actionCreators.getList())
            }
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page,totalPage,spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if (originAngle) {
                originAngle = parseInt(originAngle,10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+(originAngle + 360) +'deg)';
            if (page<totalPage) {
                dispatch(actionCreators.changePage(page+1))
            }else {
                dispatch(actionCreators.changePage(1))
            }
        },
        loginOut() {
            dispatch(loginActionCreators.loginOut())
        }
    }
}

export default connect(mapStateToProps,mapDispathToProps)(Header);

var execFunc = function(){
    console.log("executed");
};

setTimeout(execFunc,0);


execFunc = function(){
    console.log("another executed");
}