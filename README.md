# javascriptNotes

### Array
* Array数组找到重复和位置
```
let repeat = [1,2,3,3,3,1,4] 
repeat.forEach((item, index) => {
   let repeatCopy = [...repeat]
   repeatCopy.splice(index, 1)
   if (repeatCopy.includes(item)) {
	console.log(item, index)
   }
})
```
### SSH
* 基于mac linux git生成ssh
```
  ssh-keygen -t rsa -C  email  // email就是你的邮箱。
  ls -a //查看你的目录 -a显示你的隐藏目录。
  cat id_rsa.pub //显示你的ssh。把这个复制到你的github或者gitlab添加到你的ssh里面就好了。
```
