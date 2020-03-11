import axios from "axios";
// import qs from "qs";
// react 中使用antd  此处自定义
// import { message } from "antd";
// vue中使用element-ui 此处自定义
// import { Loading} from "element-ui";

var rooturl = 'https://apk.kindlesend.com/api';
// var rooturl = 'http://127.0.0.1:3200/api';
// 创建axios默认请求
axios.defaults.baseURL = rooturl;
// 配置超时时间
axios.defaults.timeout = 100000;
// 配置请求拦截
axios.interceptors.request.use(config => {
    // config.setHeaders([
    //   // 在这里设置请求头与携带token信息
    // ]);
    return config;
});
// 添加响应拦截器
axios.interceptors.response.use(
    function (response) {
        // console.log(response);
        return response;
    },
    function (error) {
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);
// 配置请求地址
let getUrl = (u) => {
    var ul = '';
    var url = {
        'index': `${rooturl}/index`,
        'soft': `${rooturl}/soft`,
        'game': `${rooturl}/game`,
        'item': `${rooturl}/getapk`,
        'searchkey': `${rooturl}/searchkey`,
        'search': `${rooturl}/search`,
        'download': `${rooturl}/download`,
        'classify': `${rooturl}/classify`,
        'classlist': `${rooturl}/classlist`,
        'tag': `${rooturl}/tag`,
        'topic': `${rooturl}/topic`,
        'getkey': `${rooturl}/getkey`
    };
    switch (u) {
        case 'index':
            ul = url.index;
            break;
        case 'soft':
            ul = url.soft;
            break;
        case 'game':
            ul = url.game;
            break;
        case 'item':
            ul = url.item;
            break;
        case 'searchkey':
            ul = url.searchkey;
            break;
        case 'search':
            ul = url.search;
            break;
        case 'download':
            ul = url.download;
            break;
        case 'classify':
            ul = url.classify;
            break;
        case 'classlist':
            ul = url.classlist;
            break;
        case 'tag':
            ul = url.tag;
            break;
        case 'topic':
            ul = url.topic;
            break;
        case 'getkey':
            ul = url.getkey;
            break;
        default:
            ul = url.category;
            break;
    };
    return ul;
};

/**
 * get请求
 * @method get
 * @param {url, params, loading} 请求地址，请求参数，是否需要加载层
 */
var get = (url, params, loading) => {
    let u = getUrl(url);
    return new Promise((resolve, reject) => {
        axios
            .get(u, {
                params: params
            })
            .then(res => {
                if (res.status === 200) resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
    });
};
/**
 * post请求
 * @method post
 * @param {url, params} 请求地址，请求参数，是否需要加载层
 */
var post = (url, data) => {
    let u = getUrl(url);
    return new Promise((resolve, reject) => {
        // qs.stringify(data)
        axios
            .post(u, data)
            .then(res => {
                console.log(res);
                resolve(res);
            })
            .catch(err => {
                reject(err);
            });
    });
};
export {
    get,
    post
};