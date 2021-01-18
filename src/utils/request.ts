/**
 * request 网络请求工具
 * 更详细的 api 文档: https://github.com/umijs/umi-request
 */
import { extend } from 'umi-request';
import { history } from 'umi';
import { notification } from 'antd';
import _ from 'lodash';
import { PROXY_KEY } from '../../config/proxy';

const codeMessage: any = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

const ignoreUrl = ['/identity/login'];

/**
 * 异常处理程序
 */
const errorHandler = async (error: { response: Response }): Promise<any> => {
  const { response } = error;
  const { status }: any = response;

  if (status === 400 && !window.sessionStorage.getItem('token')) {
    const res = await response.json();

    notification.error({
      message: `请求错误 ${status}`,
      description: res.error.message,
    });

    return {
      ...response,
      ...res,
    };
  }

  if (status === 401) {
    /*
    notification.error({
      message: `登录已过期，请重新登录`,
      duration: 2,
    });
    */
    window.localStorage.clear();
    window.sessionStorage.clear();
    history.replace({
      pathname: '/user/login',
    });
  }

  if (
    ignoreUrl.some((i) => response.url.indexOf(i) > 0) &&
    status.toString[0] !== '4'
  ) {
    return response;
  }

  if (status !== 401) {
    notification.error({
      message: `请求错误 ${status}`,
      description: codeMessage[response.status] || response.statusText,
    });
  }

  return response;
};

/**
 * 配置request请求时的默认参数
 */
const request = extend({
  errorHandler, // 默认错误处理
  credentials: 'include', // 默认请求是否带上cookie
  // prefix: process.env.PUBLIC_URL,
});

request.interceptors.request.use((url, options) => {
  const theOptions = _.clone(options);

  let proxyUrl = `/${PROXY_KEY}${url}`;

  const token = window.localStorage.getItem('token');
  // '/xx/{id}/yy' 处理 删除 params.id
  if (theOptions.params) {
    const regBrace = /({.*?})/;
    proxyUrl.split(regBrace).forEach((e) => {
      if (regBrace.test(e)) {
        const paramsKey = e.slice(1, -1);
        // @ts-ignore
        proxyUrl = proxyUrl.replace(e, theOptions.params[paramsKey]);
        // @ts-ignore
        delete theOptions.params[paramsKey];
      }
    });
  }

  if (
    token &&
    (theOptions.method === 'post' ||
      theOptions.method === 'put' ||
      theOptions.method === 'patch' ||
      theOptions.method === 'delete' ||
      theOptions.method === 'get')
  ) {
    const headers = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${token}`,
    };

    return {
      url: proxyUrl,
      options: { ...theOptions, headers },
    };
  }
  return {
    url: proxyUrl,
    options: theOptions,
  };
});

export default request;
