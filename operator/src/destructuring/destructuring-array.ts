let numbers = ['one', 'two', 'three', 'four', 'five']
let [nums1, nums2] = numbers

console.log(nums1, nums2)

let [, , nums3, nums4] = numbers
console.log(nums3, nums4);

[nums4, nums3] = [nums3, nums4]
console.log(nums3, nums4);

let [color1, color2 = 'blue'] = ['black']
console.log(color1, color2);

/*
    실행 결과
    one two
    three four
    four three
    black blue
 */