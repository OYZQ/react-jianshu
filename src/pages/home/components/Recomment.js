import React,{Component} from 'react'
import { RecommendWrapper,RecommendItem } from '../style.js'
import { connect } from 'react-redux'

class Recomment extends Component {
    render() {
        return (
            <RecommendWrapper>         
            {
                this.props.list.map((item) => {
                    return(
                        <RecommendItem imgUrl={item.get('imgUrl')} key={item.get('id')}>
                        </RecommendItem>
                    )
                })
            }
            </RecommendWrapper>
        )
    }
}

const mapState = (state) => ({
    list:state.getIn(['home','recommendList'])
})

export default connect(mapState,null)(Recomment);