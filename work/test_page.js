// //  1.作业： ?name=1&age=2&c=3 =>{name:1,age:2,c:3}
// // [{"id": 1,"name": "苹果"}, {"id": 2,"name": "山竹"}] id为1的这一项 name 修改成香蕉 读写
// // 利用 location.search 拿到?name=1&age=2&c=3

// var str = '?name=1&age=2&c=3';
// var newStr = str.substr(1)  // 或者str.slice(1)

// var arr = newStr.split('&')
// console.log(arr)
// var obj = {}

// for (item in arr) {
//   var itemArr = arr[item].split('=')
//   obj[itemArr[0]] = itemArr[1]

// }
// console.log(obj)

// 2.作业 6.27 实现数组扁平化
//  方法一
// [1, 2, [3, 4[5, 6, [7, 8]]]] => [1, 2, 3, 4, 5, 6, 7, 8]

// var arr = [1, 2, [3, 4, [5, 6, [7, 8]]]]
// var newArr = [];
// function forArr(arr) {
//   for (item of arr) {
//     if (item instanceof Array) {
//       forArr(item)
//     } else if (item) {
//       newArr.push(item)
//     }
//   }
// }
// forArr(arr)
// console.log(newArr)//[1, 2, 3, 4, 5, 6, 7, 8]
//方法二 利用reduce
// var arr = [1, 2, [3, 4, [5, 6, [7, 8]]]]
// var arr1 = [];
// var newArr = arr.reduce((prev, next) => {

//   console.log(prev)
//   return prev + next
// })
// console.log()

// 利用reduce 实现数组扁平化
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
