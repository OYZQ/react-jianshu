## 目录
- [技术栈](#user-content-技术栈)
- [项目结构及技术点介绍](#user-content-项目结构及技术点介绍)
	+ [项目结构](#user-content-项目结构)
	+ [styled components](#styled-components)
 	+ [使用iconfont嵌入图标](#user-content-使用iconfont嵌入图标)
 	+ [使用react-transition-group动画库](#user-content-动画库的使用)
     + [使用react-redux及其中间件](#user-content-使用react-redux及其中间件)
     + 等等。。。
- [项目代码和性能优化](#user-content-代码和性能优化)
     + [this绑定的性能优化](#user-content-this绑定优化)
     + [合理使用无状态组件](#user-content-使用无状态组件提高性能)
     + [Immutable.js与redux结合使用](#user-content-immutablejs与redux结合使用)
     + [避免无意义的网络请求](#user-content-避免无意义的网络请求)
     + [异步操作代码拆分优化](#user-content-异步操作代码拆分优化)
     + [使用PureComponent](#user-content-使用PureComponent)

# 技术栈：
  react + redux + redux-thunk（让redux支持异步的中间件） +  webpack + react-router + ES6/7/8 + axios + react-transition-group（react动画库）+ react-loadable（使组件按需载） + styled-components（css组件化） + immutable.js
  
## 运行打包（nodejs 6.0+）：
```
 git clone https://github.com/CoderZF/jianshu-pc.git

 cd jianshu-pc

 npm i  或者运行  yarn(推荐)
  
 npm start

 npm run build （发布）
```

## 项目结构及技术点介绍：
*该项目由 [Create React App](https://github.com/facebookincubator/create-react-app) 搭建.*

#### 项目结构：
```
jianshu-pc
│   README.md
│   package.json
└───src
│   │   App.js
│   │   idnex.js
│   │   style.js
│   └───common
│   │      └───header
│   │             │   index.js
│   │             │   style.js
│   │             └───store   
│   │                  │   actionCreators.js
│   │                  │   constants.js  
│   │                  │   index.js  
│   │                  │   reducer.js  
│   └───pages
│   │      └───detail
│   │      │       │   index.js
│   │      │       │   style.js
│   │      │       │   loadable.js
│   │      │       └───store   
│   │      │           │   actionCreators.js
│   │      │           │   constants.js  
│   │      │           │   index.js  
│   │      │           │   reducer.js  
│   │      └───home
│   │      │       │   index.js
│   │      │       │   style.js
│   │      │       └───store   
│   │      │       │      actionCreators.js
│   │      │       │      constants.js  
│   │      │       │      index.js  
│   │      │       │      reducer.js   
│   │      │       └───components   
│   │      │           │   List.js
│   │      │           │   Recommend.js  
│   │      │           │   Topic.js  
│   │      │           │   Writer.js   
│   │      └───login
│   │      │       │   index.js
│   │      │       │   style.js
│   │      │       └───store   
│   │      │           │   actionCreators.js
│   │      │           │   constants.js  
│   │      │           │   index.js  
│   │      │           │   reducer.js   
│   │      └───write
│   │      │       │   index.js
│   │      │       │   style.js
│   └───statics
│   │      │   logo.png
│   │      │   ...
│   │      └───iconfont
│   │             │   iconfont.eot
│   │             │   iconfont.js
│   │             │   ...
│   └───store
│   │      │   index.js
│   │      │   reducer.js
│        
└───public
    │   ...
```

#### styled components：
使用styled components，可将组件分为逻辑组件和展示组件，逻辑组件只关注逻辑相关的部分，展示组件只关注样式。通过解耦成两种组件，可以使代码变得更加清晰可维护。当逻辑有变化，如后台拉取的数据的格式有所变化时，只需关注并修改逻辑组件上的代码，展示组件的代码不用动。而当UI需要变化时，只需改变展示组件上的代码，并保证展示组件暴露的props接口不变即可。逻辑组件和展示组件各司其职，修改代码时错误发生率也会有所减少。
``` javascript
import { injectGlobal } from 'styled-components';

injectGlobal`
	html, body, div, span, applet, object, iframe,
	h1, h2, h3, h4, h5, h6, p, blockquote, pre,
	a, abbr, acronym, address, big, cite, code,
	del, dfn, em, img, ins, kbd, q, s, samp,
	small, strike, strong, sub, sup, tt, var,
	b, u, i, center,
	dl, dt, dd, ol, ul, li,
	fieldset, form, label, legend,
	table, caption, tbody, tfoot, thead, tr, th, td,
	article, aside, canvas, details, embed, 
	figure, figcaption, footer, header, hgroup, 
	menu, nav, output, ruby, section, summary,
	time, mark, audio, video {
		margin: 0;
		padding: 0;
		border: 0;
		font-size: 100%;
		font: inherit;
		vertical-align: baseline;
	}
    ...
`
```
上面js可以看出全局公用样式使用injectGlobal，所有css写在字符串模板中，vscode下载vscode-styled-components插件可支持语法高亮。

``` javascript
 import styled from "styled-components";

 export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;
 export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${props => props.imgUrl});
  background-size: contain;
`;
```
``` js
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends PureComponent {
	render() {
		return (
			<RecommendWrapper>
				{
					this.props.list.map((item) => {
						return <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}/>
					})
				}
			</RecommendWrapper>
		)
	}
}
```
上面2个js就是styled components最常用的使用方法，将视图和逻辑彻底分离。

#### 使用iconfont嵌入图标
![image.png](https://upload-images.jianshu.io/upload_images/1517219-ce2bf5c272f293f5.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
![image.png](https://upload-images.jianshu.io/upload_images/1517219-4ea045f8f4ef401e.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

#### 动画库的使用
 react-transition-group是react官方提供的动画库，也是之前两个的合体版本，此动画库总共提供三个组件Transition，CSSTransition和TransitonGroup。
本项目为实现输入框在聚焦和失去焦点时其长度的变化，使用了CSSTransition这个组件。
 ``` javascript
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? "focused" : ""}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}
              />
            </CSSTransition>
 ```

``` javascript
 export const NavSearch = styled.input.attrs({
          placeholder: "搜索"
    })`
          width: 160px;
          height: 38px;
          padding: 0 30px 0 20px;
          margin-top: 9px;
          margin-left: 20px;
          box-sizing: border-box;
          border: none;
          outline: none;
          border-radius: 19px;
          background: #eee;
          font-size: 14px;
          color: #666;
          &::placeholder {
               color: #999;
          }
          &.focused {
              width: 240px;
          }
          &.slide-enter {
               transition: all 0.2s ease-out;
          }
          &.slide-enter-active {
            width: 240px;
          }
          &.slide-exit {
            transition: all 0.2s ease-out;
          }
          &.slide-exit-active {
            width: 160px;
          }
`; 
```
CSSTransition包装的组件会给其组件自动包装不同状态的类名，如上slide-enter，slide-enter-active，slide-exit，slide-exit-active 就是其根据classNames-xxx自动挂载的。

#### 使用react-redux及其中间件
 首先为根组件用react-redux提供的Provider包裹，其目的就是让整个项目的组件可以使用store。
```  js
class App extends Component {
  render() {
    return (
    <Provider store={store}>
      	<BrowserRouter>
      		<div>
            <Header />
      			<Route path='/' exact component={Home}></Route>
            <Route path='/login' exact component={Login}></Route>
            <Route path='/write' exact component={Write}></Route>
      			<Route path='/detail/:id' exact component={Detail}></Route>
      		</div>
      	</BrowserRouter>
      </Provider>
    );
  }
}
```
然后让组件通过connect连接store，connect第一次调用的两个参数分别是store和dispatch对其组件props的映射回调函数
``` js
import { connect } from "react-redux";
...
class Header extends Component {
    ...
}
...
export default connect(
  mapStateToProps,
  mapDispathToProps
)(Header);
```

## 代码和性能优化：
#### this绑定优化
1.  当使用bind()绑定时，最好把所有需要绑定的方法都放在构造函数constructor中，这样就仅需要绑定一次就可以，避免每次渲染时都要重新绑定，函数在别处复用时也无需再次绑定。
```  javascript
import React, {Component} from 'react'

class Test extends React.Component {
    constructor (props) {
        super(props)
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick (e) {
    }

    render () {
        return (
            <div>
                <button onClick={ this.handleClick }>Say Hello</button>
            </div>
        )
    }
}
```
2. 箭头函数则会捕获其所在上下文的this值，作为自己的this值，使用箭头函数就不用担心函数内的this不是指向组件内部了。可以按下面这种方式使用箭头函数：
``` javascript
class Test extends React.Component {
    constructor (props) {
        super(props)
        this.state = {message: 'Allo!'}
    }

    handleClick (e) {
        console.log(this.state.message)
    }

    render () {
        return (
            <div>
                <button onClick={ ()=>{ this.handleClick() } }>Say Hello</button>
            </div>
        )
    }
}
```
使用这个语法有个问题就是每次 Test 渲染的时候都会创建一个不同的回调函数。在大多数情况下，这没有问题。然而如果这个回调函数作为一个属性值传入低阶组件，这些组件可能会进行额外的重新渲染。我们通常建议在构造函数中绑定或像下面代码使用属性初始化器语法来避免这类性能问题。
``` javascript
class Test extends React.Component {
    constructor (props) {
        super(props)
        this.state = {message: 'Allo!'}
    }

    handleClick = (e) => {
        console.log(this.state.message)
    }

    render () {
        return (
            <div>
                <button onClick={ this.handleClick }>Say Hello</button>
            </div>
        )
    }
}
```
#### 使用无状态组件提高性能
如此组件没有状态的影响或者仅仅纯静态展示时，完全可以用无状态组件来替代有状态组件，因其除render无任何其他生命周期方法且仅仅返回的是个函数，无实例化过程，大大提升了性能。
``` js
import React, { PureComponent } from 'react';
import { WriterWrapper } from '../style';

class Writer extends PureComponent {

	render() {
		return (
			<WriterWrapper>HomeWork</WriterWrapper>
		)
	}
}

export default Writer;
```
上面组件就可以完全改装成如下无状态组件。
``` javascript
import React, { PureComponent } from "react";
import { WriterWrapper } from "../style";

const Writer = () => <WriterWrapper>HomeWork</WriterWrapper>;

export default Writer;
```
#### immutable.js与redux结合使用
当我们对一个Immutable对象进行操作的时候，ImmutableJS基于哈希映射树(hash map tries)和vector map tries，只clone该节点以及它的祖先节点，其他保持不变，这样可以共享相同的部分，大大提高性能。在对Immutable对象的操作均会返回新的对象，所以使用redux的reducer中就不需要总是想着不能修改原state，因为对Immutable对象的操作返回就是新的对象，且比普通js深拷贝产生的性能消耗要低得多。
  我在项目中也是大量使用immutable.js
``` js
import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	focused: false,
	mouseIn: false,
	list: [],
	page: 1,
	totalPage: 1
});

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.SEARCH_FOCUS:
			return state.set('focused', true);
		case constants.SEARCH_BLUR:
			return state.set('focused', false);
		case constants.CHANGE_LIST:
			return state.merge({
				list: action.data,
				totalPage: action.totalPage
			});
		case constants.MOUSE_ENTER:
			return state.set('mouseIn', true);
		case constants.MOUSE_LEAVE:
			return state.set('mouseIn', false);
		case constants.CHANGE_PAGE:
			return state.set('page', action.page);
		default:
			return state;
	}
}
```
``` 
import * as constants from './constants';
import { fromJS } from 'immutable';
import axios from 'axios';

const changeList = (data) => ({
	type: constants.CHANGE_LIST,
	data: fromJS(data),
	totalPage: Math.ceil(data.length / 10)
});
export const getList = () => {
	return (dispatch) => {
		axios.get('/api/headerList.json').then((res) => {
			const data = res.data;
			dispatch(changeList(data.data));
		}).catch(() => {
			console.log('error');
		})
	}
};
```
#### 避免无意义的网络请求
比如在请求热门搜索提示项的时候，只有当size是0的时候我才去发送请求。
``` js
  const mapDispathToProps = dispatch => {
  return {
    handleInputFocus(list) {
      list.size === 0 && dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
  ...
    };
```

#### 异步操作代码拆分优化
在UI组件中因尽量减少业务逻辑操作，像与服务器交互的大量代码都应该解耦出来，所以结合redux-thunk的使用将大量的网络请求代码写在action中就解决了这一问题。
下面是home页的actionCreators.js，当前模块的所有action和网络请求都在此文件中
``` js
import axios from 'axios';
import * as constants from './constants';
import { fromJS } from 'immutable';

const changHomeData = (result) => ({
	type: constants.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommendList: result.recommendList
});

const addHomeList = (list, nextPage) => ({
	type: constants.ADD_ARTICLE_LIST,
	list: fromJS(list),
	nextPage
})

export const getHomeInfo = () => {
	return (dispatch) => {
		axios.get('/api/home.json').then((res) => {
			const result = res.data.data;
			dispatch(changHomeData(result));
		});
	}
}

export const getMoreList = (page) => {
	return (dispatch) => {
		axios.get('/api/homeList.json?page=' + page).then((res) => {
			const result = res.data.data;
			dispatch(addHomeList(result, page + 1));
		});
	}
}

export const toggleTopShow = (show) => ({
	type: constants.TOGGLE_SCROLL_TOP,
	show
})
```
这样在组件中就可以轻松的去调用网络请求，然后将返回结果发送给reducer进行处理
``` js
import React, { PureComponent } from 'react';
import { ListItem, ListInfo, LoadMore } from '../style';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';

class List extends PureComponent {
	render() {
		const { list, getMoreList, page } = this.props;
		return (
			<div>
				{
					list.map((item, index) => {
						return (
							<Link key={index} to={'/detail/' + item.get('id')}>
								<ListItem >
									<img alt='' className='pic' src={item.get('imgUrl')} />
									<ListInfo>
										<h3 className='title'>{item.get('title')}</h3>
										<p className='desc'>{item.get('desc')}</p>
									</ListInfo>
								</ListItem>
							</Link>
						);
					})
				}
				<LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
			</div>
		)
	}
}

const mapState = (state) => ({
	list: state.getIn(['home', 'articleList']),
	page: state.getIn(['home', 'articlePage'])
});

const mapDispatch = (dispatch) => ({
	getMoreList(page) {
		dispatch(actionCreators.getMoreList(page))
	}
})

export default connect(mapState, mapDispatch)(List);
```

#### 使用PureComponent
继承Component的普通组件，使用react-redux的connect连接了store，那么只要store内的数据发生改变就会让所有连接的组件触发render，这样就会产生不必要的渲染开销，当然使用shouldComponentUpdate也可以阻止不必要的渲染，但这样的话每个组件都要写同样的shouldComponentUpdate方法；继承PureComponent的组件正好解决了这一痛点，默认实现的shouldComponentUpdate。
![image.png](https://upload-images.jianshu.io/upload_images/1517219-98c8ca3b3b7085b8.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)
