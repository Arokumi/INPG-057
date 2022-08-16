// let arr = [27, 38, 4,43, 9, 82 ,10]

// function selectionSort(arr) {
//     let n = arr.length;
//     for (let i = 0; i < n; i++ ) {
//         let min = i;
//         for (let j = i+1; j < n; j++) {
//             if(arr[j] < arr[min]) {
//                 min=j;
//             }
//         } if (min != i) {
//             let tmp = arr[i];
//             arr[i] = arr[min];
//             arr[min] = tmp;
//         } console.log(arr);
//     }
// };

// selectionSort([27, 38, 4, 43, 9, 82 ,10]);

// function searchArray(arr, target) {
//     let n = arr.length
//     let targetFound = false;
//     let result = "";
//     for (let i=0; i<n; i++) {
//         if(arr[i] == target) {
//             result = i;
//             targetFound = true;
//         };
//     } if(targetFound===true){
//         console.log("Match found on index " + result);
//     } else {
//         console.log("No Matches Found...");
//     }
// };

// searchArray([27, 38, 4, 43, 9, 82 ,10], 21);
// searchArray([27, 38, 4, 43, 9, 82 ,10], 9);

function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++ ) {
        let min = i;
        for (let j = i+1; j < n; j++) {
            if(arr[j] < arr[min]) {
                min=j;
            }
        } if (min != i) {
            let tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        } 
    } console.log("sorted array into [" + arr + "]");
    return arr;
};
    
    function binarySearch(data, value) {
        selectionSort(data);
        console.log("Searching for " + value + " within the array.")
        let low = 0;
        let high = data.length - 1
        let foundValue = false;
        while (low <= high){
            let mid = Math.round((low + high)/2);
            if (data[mid] == value){
                foundValue = true;
                console.log("Found the value on index " + mid)
                break;
            } else if (data[mid]<value){
                low = mid + 1
            } else {
                high = mid - 1
            }
        } if(foundValue!=true){
            console.log(value + " is not in the array.");
        }
    };

binarySearch([27, 38, 4, 43, 9, 82, 10], 29);
binarySearch([27, 38, 4, 43, 9, 82, 10], 27);