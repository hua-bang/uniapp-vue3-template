import { BASE_URL, TOKEN_NAME } from '../config/network';
import {
  isCompleteUrl,
  getLocalStorageValueByKey
} from './common';

type RequestConfig = Omit<UniApp.RequestOptions, 'success' | 'fail' | 'complete'>;
type ResponseResult<T> = Omit<UniApp.RequestSuccessCallbackResult, 'data'> & {
  data: T
};

const defaultRequestOptions: Partial<RequestConfig> = {
  method: 'GET',
  data: {}
};

function request<T>(option: RequestConfig): Promise<ResponseResult<T>> {
  const {
    url,
    header,
    ...restOption
  } = option;

  return new Promise((resolve, reject) => {

    const successHandler = (res: UniApp.RequestSuccessCallbackResult) => {
      resolve(res as ResponseResult<T>);
    };

    const failHandler = (err: UniApp.GeneralCallbackResult) => {
      reject(err);
    };

    const processHeader = (header: RequestConfig['header']): RequestConfig['header'] => {
      // const token = getLocalStorageValueByKey(TOKEN_NAME);
      // TODO: handle the header before request
      return header;
    };

    processHeader(header);

    uni.request({
      url: isCompleteUrl(url) ? url : (BASE_URL + url),
      header: processHeader(header),
      success: successHandler,
      fail: failHandler,
      ...defaultRequestOptions,
      ...restOption
    });
  });
}

export default request;