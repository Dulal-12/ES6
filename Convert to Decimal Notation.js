function convertToDecimal(perc) {
	let newPerc = perc.map(value => parseFloat(value.substring(0,value.length-1)));
	return newPerc.map(value=> value/100);
}