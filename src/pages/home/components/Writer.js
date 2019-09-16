import React,{PureComponent} from 'react'
import { WriterWrapper } from '../style'

class Writer extends PureComponent {
    render() {
        return (
            <WriterWrapper>
                <img className="img" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""></img>
                <p className="p1">下载简书手机App ></p>
                <p className="p2">随时随地发现和创作内容</p>
            </WriterWrapper>
        )
    }
}

export default Writer;