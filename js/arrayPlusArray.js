/*
I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

P.S. Each array includes only integer numbers. Output is a number too.
*/

function arrayPlusArray(arr1, arr2) {
    let sumArr1 = arr1.reduce((acc, c) => acc + c, 0)

    let sumArr2 = arr2.reduce((acc, c) => acc + c, 0)

    return sumArr1 + sumArr2
  }

// Alternative Including concat method

function arrayPlusArray(arr1, arr2) {
   return arr1.concat(arr2).reduce((acc, c) => acc + c, 0)
}
