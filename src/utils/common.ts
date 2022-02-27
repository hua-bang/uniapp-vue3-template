/**
 * 根据key找到存储再Storage的值
 * @param key string 查询的键值名称
 * @returns any 返回Storage中对应key的值 
 */
export function getLocalStorageValueByKey(key: string) { 
  const value = uni.getStorageSync(key); 
  return value ? JSON.parse(value) : '';
}

/**
 * 检验url是否合法/完整
 * @param url string 输入的网址
 * @returns boolean 检验url是否合法/完整
 */
export function isCompleteUrl(url: string): boolean { 
  return /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/.test(url);
}