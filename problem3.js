/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let withoutDuplicate = new Set(nums)
    if(withoutDuplicate.size == nums.length){
        return false
    }
    else{
        return true
    }
};
