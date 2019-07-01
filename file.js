let path = require('path')
let fs = require('fs')
let fsPromise = fs.promises;
let filename = path.join(__dirname, './data.json')

fsPromise.readFile(filename, 'utf-8').then(data => {
  data = JSON.parse(data)

  // 方法一
  for (item in data) {
    if (data[item].id === 1) {
      data[item].name = '周华健'
    }
  }
  // 方法二
  // let newary = data.map(item => {
  //   if (item.id === 1) {
  //     item.name = '香蕉'
  //   }
  //   return item
  // })

  fsPromise.writeFile(filename, JSON.stringify(data), 'utf-8')
  console.log('我执行完了')
})


//  for of 循环
// let arr = [

//   { name: '华剑', age: 19 },
//   { name: '小张', age: 155 }
// ]
// for (item of arr) {
//   console.log(item)
// }

