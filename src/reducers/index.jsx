import {combineReducers} from "redux"

//首页高度
export function red_index_height(state = 0, action) {
    switch (action.type) {
        case "INDEX_HEIGHT":
            return action.data;
        default:
            return state
    }
}
//软件高度
export function red_soft_height(state = 0, action) {
    switch (action.type) {
        case "SOFT_HEIGHT":
            return action.data;
        default:
            return state
    }
}
//游戏高度
export function red_game_height(state = 0, action) {
    switch (action.type) {
        case "GAME_HEIGHT":
            return action.data;
        default:
            return state
    }
}
//搜索页联想结果数据
export function red_search_key(state = {
    query: '',
    results: [],
    hides: false,
    first: {}
}, action) {
    switch (action.type) {
        case "SEARCH_KEY":
            return action.data;
        default:
            return state
    }
}
//搜索页结果数据
export function red_search_data(state = {
    key: false,
    data: [],
    page: 1,
    scrollTop: 0
}, action) {
    switch (action.type) {
        case "SEARCH_DATA":
            return action.data;
        default:
            return state
    }
}
//列表页结果数据
export function red_list_data(state = {
    cid: false,
    data: [],
    page: 1,
    scrollTop: 0
}, action) {
    switch (action.type) {
        case "LIST_DATA":
            return action.data;
        default:
            return state
    }
}

//首页得文字
export function red_classify_id (state = 1, action) {
    switch (action.type) {
        case "CLASSIFY_ID":
            return action.data;
        default:
            return state
    }
}
const rootReducer = combineReducers({
    red_index_height,
    red_search_key,
    red_search_data,
    red_list_data,
    red_classify_id
})

export default rootReducer