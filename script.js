function firstNonRepeatedChar(str) {
 // Write your code here
	let charMap=new Map()
	for(let t of str){
		if(charMap.has (t)){
			charMap.set(t,charMap.get(t)+1)
		}else{
			charMap.set(char,1)
		}
	}
for(let t of str){
	if(charMap.get(t)==1){
		return t
	}
}
return null	
}
// const input = prompt("Enter a string");
// alert(firstNonRepeatedChar(input)); 
