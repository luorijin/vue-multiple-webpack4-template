/**
 * currentStyle属性和getComputedStyle属性不能设置属性,只能获取
 *currentStyle:该属性只兼容IE,不兼容火狐和谷歌
 *写法:ele.currentStyle["attr"]或者ele.currentStyle.attr;
 *getComputedStyle:该属性是兼容火狐谷歌,不兼容IE
 *写法:window.getComputedStyle(ele,null)[attr]获取是window.getComputedStyle(ele,null).attr
 * @param {dom元素} oElement 
 * @param {获取属性如：with，height} sName 
 */
function getStyle(oElement, sName){
    return oElement.currentStyle ? oElement.currentStyle[sName] : getComputedStyle(oElement, null)[sName];
}


/**
 * 判断元素是否是dom元素
 * 先要对HTMLElement进行类型检查，因为即使在支持HTMLElement
 * 的浏览器中，类型却是有差别的，在Chrome,Opera中HTMLElement的类型为function，此时就不能用它来判断了
 * @param {dom元素} oElement 
 */
function isDom(oElement){
    // eslint-disable-next-line quotes
    if(typeof HTMLElement === 'object'){
        return oElement instanceof HTMLElement;
    }else{
        // eslint-disable-next-line quotes
        return oElement && typeof oElement === 'object' && oElement.nodeType === 1 && typeof oElement.nodeName === 'string';
    }
}