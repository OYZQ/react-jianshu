import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

export const HeaderWrapper = styled.div`
    height:56px;
    border-bottom:1px solid #f0f0f0
`
export const Logo = styled.div`
    position: absolute;
    top:0;
    left:0;
    display:block;
    width:100px;
    height:56px;
    background:url(${logoPic});
    background-size:contain
`

export const Nav = styled.div`
    width:960px;
    padding-right: 70px;
    box-sizing: border-box;
    height:100%;
    margin:0 auto;
`
export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    font-size:17px;
    color:#333;
    &.left {
        float: left;
    }
    &.right {
        float: right;
        color: #969696;
    }
    &.action {
        color: #ea6f5a;
    }

`
export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding:0 30px 0 20px;
    border: none;
    outline:none;
    border-radius:19px;
    background:#eee;
    margin-top:9px;
    margin-left:20px;
    box-sizing:border-box;
    font-size:14px;
    color:#666;
    &.slide-enter {
        width:160px;
        transition: all .2s ease-out;
    }
    &.slide-enter-active {
        width:240px;

    }
    &.slide-exit {
        width:240px;
        transition: all .2s ease-out;
    }
    &.slide-exit-active {
        width:160px;
        
    }
    &::placeholder {
        color:#999;
    }
    &.focused {
        width:240px;
    }
`
export const SearchInfo = styled.div`
    position: absolute;
    box-sizing:border-box;
    left:20px;
    top:56px;
    width:240px;
    padding: 0 20px;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    background:#fff;
`

export const SearchInfoTitle = styled.div`
    margin-top:20px;
    margin-tobbom:15px;
    line-height:20px;
    font-size:14px;
    color:#969696;
`
export const SearchInfoSwitch = styled.span`
    float: right;
    font-size:13px;;
    cursor: pointer
    .spin {
        display:block;
        float:left;
        font-size:12px;
        margin-right:2px;
        transition:all .2s ease-in;
        transfrom-origin:center center;
    }
`

export const SearchInfoList = styled.div`
    overflow:hidden;
    padding:10px 0;
`

export const SearchInfoItem = styled.a`
    font-size:12px;
    padding:2px 6px;
    border: 1px solid #ddd;
    color:#787878;
    border-radius:3px;
    display:block;
    float:left;
    margin-right:10px;
    margin-bottom:10px;
`

export const Addition = styled.div`
    position: absolute;
    right:0;
    top:0;
    height:56px;
`

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    line-height: 38px;
    border-radius:19px;
    border: 1px solid #ec6149;
    margin-right: 20px;
    padding: 0 20px;
    font-size:14px;
    &.reg {
        color: #ec6149;
    }
    &.writting {
        color: #fff;
        background: #ec6149;
    }
`

export const SearchWrapper = styled.div`
    position:relative;
    float:left;
    .zoom {
        position:absolute;
        right:5px;
        bottom:5px;
        width:30px;
        height:30px;
        border-radius:15px;
        line-height:30px;
        text-align:center;
        &.focused {
            background: #777;
            color:#fff;
        }
    }
`