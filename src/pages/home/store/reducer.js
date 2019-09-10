import { fromJS } from 'immutable'
import * as constants from './constants'

const defaultState = fromJS({
    topicList:[],
    articleList:[],
    recommendList:[],
    authorList:[]
});

export default (state = defaultState,action) => {

    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                topicList:fromJS(action.topicList),
                articleList:fromJS(action.articleList),
                recommendList:fromJS(action.recommendList),
                authorList:fromJS(action.authorList)
            })
        default: 
            return state;
    }
}