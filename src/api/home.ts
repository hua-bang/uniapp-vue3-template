import request from '../utils/request';


export const homeApiDemo = () => {
  return request({
    url: 'https://www.baidu.com'
  });
};