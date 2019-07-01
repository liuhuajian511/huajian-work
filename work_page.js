let arr = [1, 2, [3, 4, [5, 6, [7, 8]]]];
function fn(arr) {
  return arr.reduce((result, item) => {
    return result.concat(Array.isArray(item) ? fn(item) : item)
  }, [])
}
console.log(fn(arr))//[ 1, 2, 3, 4, 5, 6, 7, 8 ]




//3.作业 getName => get - name  互相转换

var str = 'getNameOldName';
var newStr = ''
//驼峰转中划线
// var reg1 = /([A-Z])/g //匹配A-Z
// for (item in str) {
//   if (str[item].charCodeAt() < 97) {
//     newStr = str.replace(reg1, '-' + '$1').toLowerCase()
//   }
// }
// console.log(newStr)//get-name-old-name
// 中划线转驼峰
// var middle = 'get-name-old-name';
// var reg2 = /-(\w)/g //全局匹配-和小写字母
// function tallName(name) {
//   return name.replace(reg2, ($, $1) => {
//     // console.log($)//返回出匹配的结果 -n
//     // console.log($1)//匹配出第一个反向引用 （-w）例如n
//     return $1.toUpperCase()
//   })
// }
// console.log(tallName(middle))
