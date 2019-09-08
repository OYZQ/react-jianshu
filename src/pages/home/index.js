import React,{Component} from 'react'
import {HomeWrapper,HomeLeft,HomeRight} from './style'
import Topic from './components/Topic'
import List from './components/List'
import Recomment from './components/Recomment'
import Writer from './components/Writer'

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <div className="height">
                        <img className="banner-img" src="https://upload-images.jianshu.io/upload_images/5440469-51c9d22950008274.png?imageMogr2/auto-orient/strip|imageView2/2/w/564/format/webp"></img>
                    </div>
                    <Topic/>
                    <List/>
                    <Recomment/>
                    <Writer/>
                </HomeLeft>
                <HomeRight>right</HomeRight>
            </HomeWrapper>
        )
    }
}

export default Home;