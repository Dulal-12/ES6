const sliceSum = (arr, n) =>{
	let newArr =  arr.slice(0,n);
	const reducer = (acc , currentValue) => acc + currentValue;
	return newArr.reduce(reducer,0);
}