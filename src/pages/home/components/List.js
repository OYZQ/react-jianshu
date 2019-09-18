import React,{PureComponent} from 'react'
import { ListItem,ListInfo,LoadMore } from '../style'
import { connect } from 'react-redux';
import {actionCreator} from '../store'
import {Link} from 'react-router-dom'

class List extends PureComponent {
  
    render() {
      const { list,getMoreList,page } = this.props;
        return (
            <div>
              {list.map((item,index) => {
                return (
                  <Link key={index} to={'/detail/'+item.get('id')}>
                    <ListItem key={index}>
                        <img className="pic" src={item.get('imgUrl')} alt=''></img>
                        <ListInfo>
                            <h3 className="title">{item.get('title')}</h3>
                            <p className="desc">{item.get('desc')}</p>
                        </ListInfo>
                    </ListItem>  
                  </Link>
                )
              })}
              <LoadMore onClick={() => getMoreList(page)}>更多文字</LoadMore>
            </div>
        )
    }
}

const mapState = (state) => ({
    list:state.get('home').get('articleList'),
    page:state.getIn(['home','articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreator.getMoreList(page))
  }
})

export default connect(mapState,mapDispatch)(List);