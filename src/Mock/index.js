import Mock from 'mockjs'

// worldDetail
let worldDetail = function () {
    let item = [];
    for (var i = 0; i < 30; i++) {
        item.push({
            "id": "@guid",
            "name": "@region",
            "Confirmed": "@integer(36844, 368449)",
            "Deaths": "@integer(1099, 10993)",
            "Recovered": "@integer(1986, 19865)",
        })
    }

    let res = {
        Rs: item,
        Code: 0,
        Memo: ''
    };
    return res;
};

let TestClassPreFinishListQuery = function () {
    let item = [];
    for (var i = 0; i < 30; i++) {
        item.push({
            "id": "@guid",
            "ClassName": "@region",
            "EndTime": "@date",
            "ClassColor": "@color",
            "ConsumeHour": "@integer(36844, 368449)",
            "Deaths": "@integer(1099, 10993)",
            "Recovered": "@integer(1986, 19865)",
        })
    }

    let res = {
        Rs: item,
        Code: 0,
        Memo: ''
    };
    return res;
};

let SignIn = function () {

    let Rs = {
        token: "@guid"
    };
    let res = {
        Rs: Rs,
        Code: 0,
        Memo: '登陆成功'
    };
    return res;
};

let editbasicinfo = function () {

    let res = {
        Code: 0,
        Memo: '修改成功'
    };
    return res;
};

let modPwd = function () {
    let res = {
        Code: 0,
        Memo: '修改成功'
    };
    return res;
};
let logout = function () {
    let res = {
        Code: 0,
        Memo: '退出成功'
    };
    return res;
};

let MockState = 0;
if (MockState == 1) {
    Mock.mock('/api/worldDetail', 'post', worldDetail());
    Mock.mock('/api/SignIn', 'post', SignIn());//用户登录
    Mock.mock('/api/editbasicinfo', 'post', editbasicinfo());//用户设置修改
    Mock.mock('/api/modPwd', 'post', modPwd());//密码修改
    Mock.mock('/api/logout', 'post', logout());//退出登陆
// test
    Mock.mock('/api/TestClassPreFinishListQuery', 'post', TestClassPreFinishListQuery());//

}

export default Mock;
