import * as constants from './constants'
import { fromJS } from 'immutable'
import axios from 'axios';

export const searchFocus = () => ({
    type:constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
    type:constants.SEARCH_BLUR
})

const change_list = (data) =>({
    type: constants.CHANGE_LIST,
    data:fromJS(data)
})

export const getList = () => {
    return (dispatch) => {
        axios.get('/api/headerList.json').then((res) => {
            const data = res.data;
            dispatch(change_list(data.data))
        }).catch(() => {
            console.log('error')
        })
    }
}