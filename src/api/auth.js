import { request } from '@/utils/request'

export function login(data) {
    return request('weapp/authorizations', {
        method: 'post',
        data: data
    })
}

// 刷新token
export function refresh(token) {
    return request('authorizations/current', {
        method: 'put',
        header: {
            'Authorization': 'Bearer ' + token
        }
    })
}

//退出登录
export function logout(token) {
    return request('authorizations/current', {
        method: 'delete',
        header: {
            'Authorization': 'Bearer ' + token
        }
    })
}

// 获取验证码
export function getCaptcha(phone) {
    return request('captchas', {
      method: 'post',
      data: {
        phone: phone
      }
    })
}