# Minimum Value to Get Positive Step by Step Sum

Given an array of integers ```nums```, you start with an initial positive value startValue.

In each iteration, you calculate the step by step sum of ```startValue``` plus elements in ```nums``` (from left to right).

Return the minimum positive value of ```startValue``` such that the step by step sum is never less than 1.

#### Example 1:
```
Input: nums = [-3,2,-3,4,2]
Output: 5
```

#### Example 2:
```
Input: nums = [1,2]
Output: 1
```

#### Constraints:
```
1 <= nums.length <= 100
-100 <= nums[i] <= 100
```
