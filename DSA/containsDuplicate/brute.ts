function containsDuplicate(nums: number[]): boolean {
  // let numsObject = {};
  let numsSet = new Set(nums);
  if (numsSet.size === nums.length) {
    return false;
  }
  return true;
}
