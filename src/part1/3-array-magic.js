
export default function magicArray(arr) {
	var sum = 0;
	for(var i=0;i<arr.length;i++){
		if(arr[i]%7 != 0)
			sum += arr[i];
	}
	return sum;
}