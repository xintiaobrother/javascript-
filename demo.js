/**
 * 数组找到重复和位置
 */

let arryRepeat = [1,2,3,3,3,1,4] 
arryRepeat.forEach((item, index) => {
   let arryRepeatCopy = [...arryRepeat]
   arryRepeatCopy.splice(index, 1)
   if (b.includes(item)) {
	console.log(item, index)
   }
})
