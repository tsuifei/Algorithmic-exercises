// 找出陣列中最小值
/* 思路：
先設一個變數存取最小值 min，每跑一次迴圈就讓這個 min 去比較陣列中的[i]
如果[i]比 min 小，就把[i]指派給 min ，最後再把  min 回傳就可得到最小數

*/

function findMinNub(arr) {
  let min = arr[0];
  for(let i = 1; i <arr.length; i++){
    if(min > arr[i]) {
      min = arr[i]
    }
  }
  return min
}

const arr = [2,1,3,5,-10,0,-42,0.42]
console.log(findMinNub(arr));








<h4 style="text-align: center; color: #cccccc; font-weight:bold;">Aéronautique</h4>
<ul>
 	<li>Cité de l’Espace</li>
 	<li>Dassault</li>
 	<li>Derichebourg</li>
 	<li>Safran</li>
 	<li>Turbomeca</li>
</ul>

