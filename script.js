function calculateMinCost() {
  //your code here
  let inputData = document.querySelector("#rope-lengths").value;
  var inputArr = inputData.split(",");
  for(let i=0;i<inputArr.length;i++)
	 inputArr[i]=Number(inputArr[i]);
  
  var cost = 0;
  inputArr.sort(function(a,b){return a-b});	
  while(inputArr.length>1){
	  let element = inputArr[0]+inputArr[1];
	  cost += element;
	  inputArr.splice(0,2);
	  inputArr.push(element);
	  inputArr.sort(function(a,b){return a-b});	
  }	
	document.querySelector("#result").textContent = cost;
}  
