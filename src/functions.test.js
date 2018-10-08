/**
 * Define a function max() that takes two numbers as arguments
 * and returns the largest of them. Use the if-then-else
 * construct available in Javascript.
 */

let max = (a, b) => {
  if (a > b) {
    return a
  } else {
    return b
  }
}
// ...

/**
 * Define a function maxOfThree() that takes three
 * numbers as arguments and returns the largest of them.
 */

let maxOfThree = (a, b, c) => {
  if (a > b) {
    if (a > c) {
      return a
    } else {
      return c
    }
  } else {
    if (c > b) {
      return c
    } else {
      return b
    }
  }
}
// ...

/*
* Define a function sum() that takes two numbers as
* arguments and computes the sum of those two numbers.
*/
let sum = (a, b) => {
  return a + b
}
// ...

/*
* Define a function sumOfArray that calculates the sum of
* all the numbers in an array.
*/
let sumOfArray = arry => {
  let totalNum = arry.reduce((total, numbers) => {
    return (total += numbers)
  }, 0)
  return totalNum
}
// ...

/**
 * Write a function isVowel() that takes a character (i.e. a string of length 1)
 * and returns true if it is a vowel, false otherwise.
 */
let isVowel = b => {
  if (
    b === "a" ||
    b === "e" ||
    b === "i" ||
    b === "i" ||
    b === "u" ||
    b === "A" ||
    b === "E" ||
    b === "I" ||
    b === "O" ||
    b === "U"
  ) {
    return true
  } else {
    return false
  }
}

// ...

/**
 * Write a function rovarspraket() that will translate
 * a text into a "rövarspråket". That is, double every
 * consonant and place an occurrence of "o" in between.
 *
 * For example, rovarspraket("this is fun") should
 * return the string "tothohisos isos fofunon".
 */
// take a sentence and turn it into an array
// then do a loop threw the array to check for consonant
//if consonant then + o + letter to the new string else continue the array
// add the o to the new string
//return new string with the o in between each consonant

const rovarspraket = sentence => {
  if (typeof sentence === "number") {
    return sentence.toString()
  }
  const arr = sentence.split("")
  let Consonant = []
  for (let i = 0; i < arr.length; i++) {
    const letter = arr[i]
    if ("bcdfghjklmnpqrstvwxyz".indexOf(letter) >= 0) {
      Consonant.push(letter + "o" + letter)
    } else {
      Consonant.push(letter)
    }
  }
  return Consonant.join("")
}

/**
 * Define a function reverse() that computes
 * the reversal of a string. For example,
 * reverse("skoob") should return the
 * string "books".
 */

// take the words and split it to an array
// then use reverse to reverse the words into an array using split
// the join to connect the array back with it being reversed

let reverse = word => {
  let wordArry = word.split("")
  let newWordArry = []
  for (let i = word.length - 1; i >= 0; i--) {
    newWordArry.push(wordArry[i])
  }
  let newWord = newWordArry.join("")

  return newWord
}

/**
 * Write a function findLongestWord() that takes an
 * string returns the first, longest word in the array.
 *
 * i.e. findLongestWord("book dogs") should return "book"
 */
const findLongestWord = words => {
  let wordsArr = words.split(" ")
  if (words === "everything") {
    return "life the universe and everything"
  } else {
    let sortedWordsArr = wordsArr.sort((a, b) => b.length - a.length)
    return sortedWordsArr[0]
  }
}
/**
 * NOTE: Don't modify anything below this line...
 */

/* eslint-disable no-undef */

import test from "ava"
import { isNumber } from "util"

test("max()", t => {
  t.is(max(1, 3), 3)
  t.is(max(0, 3), 3)
  t.is(max(10, 3), 10)
  t.is(max(-1, -3), -1)
  t.is(max("aaa", 0), 0)
  t.true(isNaN(max("aaa", "bbb")))
})

test("maxOfThree()", t => {
  t.is(maxOfThree(1, 3, 2), 3)
  t.is(maxOfThree(0, 3, -1), 3)
  t.is(maxOfThree(10, 3, 50), 50)
  t.is(maxOfThree(-1, -3, -10), -1)
  t.is(maxOfThree("aaa", 0, 1), 1)
  t.true(isNaN(maxOfThree("aaa", "bbb", "ccc")))
})

test("sum()", t => {
  t.is(sum(8, 11), 19)
  t.is(sum(4, 100), 104)
})

test("sumOfArray()", t => {
  t.is(sumOfArray([1, 2]), 3)
  t.is(sumOfArray([1, 2, 3]), 6)
  t.is(sumOfArray([10, 9, 8]), 27)
  t.is(sumOfArray([]), 0)
})

test("isVowel()", t => {
  t.is(isVowel(0), false)
  t.is(isVowel("B"), false)
  t.is(isVowel("b"), false)
  t.is(isVowel("a"), true)
  t.is(isVowel("E"), true)
})

test("rovarspraket()", t => {
  t.is(rovarspraket("a"), "a")
  t.is(rovarspraket("b"), "bob")
  t.is(rovarspraket("cat"), "cocatot")
  t.is(rovarspraket("javascript"), "jojavovasoscocroripoptot")
  t.is(rovarspraket(0), "0")
})

test("reverse()", t => {
  t.is(reverse("books"), "skoob")
  t.is(reverse("we don't want no trouble"), "elbuort on tnaw t'nod ew")
})

test("findLongestWord()", t => {
  t.is(findLongestWord("book dogs"), "book")
  t.is(findLongestWord("life the universe and everything"), "everything")
})

/* eslint-enable */
