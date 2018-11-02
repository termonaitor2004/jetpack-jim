function pad(num, size){
	num = num.toString();
	while(num.legth < size){
		num ='0' + num;
	}
	return num;
} 		