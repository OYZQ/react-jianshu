import React,{ PureComponent } from 'react';
import { AuthorWrapper,AuthorItem } from '../style'
import { connect } from 'react-redux';

class Author extends  PureComponent {
    render() {
        return (
           <AuthorWrapper>
               <div className="top">
               <p><span className="pleft">推荐作者</span><span className="pright">
               <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe851;</i>
                   换一批</span></p>
               </div>

                { this.props.list.map((item) => {
                    return (
                        <AuthorItem key={item.get('id')}>
                        <div className="dleft">
                            <img src={item.get('imgUrl')} alt=""></img>
                        </div>
                        <div className="dcenter">
                            <p className="name">{item.get('name')}</p>
                            <p className="like">{item.get('like')}</p>
                        </div>
                        <div className="dright">
                            +关注
                        </div>
                   </AuthorItem>
                    )
                })}

                <div className="btn">
                    查看全部 >
                </div>

           </AuthorWrapper>
        )
    }
}

const mapState = (state) => ({
    list:state.getIn(['home','authorList'])
})

export default connect(mapState)(Author);