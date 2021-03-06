import axios from 'axios';
import global from '../Global.js'

// 基础方法进行封装
function getApiBasic(url, postdata) {
    return axios.post(url, postdata).then(function (data) {
        let json = data.data;
        return json
    }, function (response) {
        console.info(response);
    })
}

// 调用的api改写成方法
export function worldDetail(postdata) {
    let url = headapi + 'worldDetail';
    return getApiBasic(url, postdata);
}


export function SignIn(postdata) {
    let url = headapi + 'SignIn';
    return getApiBasic(url, postdata);
}

export function editbasicinfo(postdata) {
    let url = headapi + 'editbasicinfo';
    return getApiBasic(url, postdata);
}

export function modPwd(postdata) {
    let url = headapi + 'modPwd';
    return getApiBasic(url, postdata);
}

export function logout(postdata) {
    let url = headapi + 'logout';
    return getApiBasic(url, postdata);
}

export function testSelect(postdata) {
    let url = headapi + 'testSelect';
    return getApiBasic(url, postdata);
}

export function VipUserSimpleQuery(postdata) {
    let url = headapi + 'VipUserSimpleQuery';
    return getApiBasic(url, postdata);
}

export function ShopManagerListQuery(postdata) {
    let url = headapi + 'ShopManagerListQuery';
    return getApiBasic(url, postdata);
}


export function TestClassPreFinishListQuery(postdata) {
    let url = headapi + 'TestClassPreFinishListQuery';
    return getApiBasic(url, postdata);
}






