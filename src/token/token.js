import { Message } from 'element-ui';

const isLoginToken = () => {
    const token = localStorage.getItem("token");
    if (!token) {
        Message({
            showClose: true,
            message: "请先登录",
            type: "error",
            duration: "3000"
        });

    }
    return token;
}

const setToken = (token) => {
    localStorage.setItem("token", token);
}


export default {
    isLoginToken,
    setToken
}