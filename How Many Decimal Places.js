const getDecimalPlaces = (num)=> {
	let num1 =  num.split('.');
	if(num1.length == 2){
		return num1[1].length;
	}
	else{
		return 0;
	}	
}