let act_index_height = (data) => {
    return {
        type: "INDEX_HEIGHT",
        data: data
    };
};

let act_soft_height = (data) => {
    return {
        type: "SOFT_HEIGHT",
        data: data
    };
};

let act_game_height = (data) => {
    return {
        type: "GAME_HEIGHT",
        data: data
    };
};

let act_search_key = (data) => {
    return {
        type: "SEARCH_KEY",
        data: data
    };
};

let act_search_data = (data) => {
    return {
        type: "SEARCH_DATA",
        data: data
    };
};

let act_list_data = (data) => {
    return {
        type: "LIST_DATA",
        data: data
    };
};

let act_classify_id = (data) => {
    return {
        type: "CLASSIFY_ID",
        data: data
    };
};

module.exports = {
    act_index_height,
    act_soft_height,
    act_game_height,
    act_search_key,
    act_search_data,
    act_list_data,
    act_classify_id
};