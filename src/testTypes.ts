let a = ["aa", 11] //(string | number)[]
type obj = {
  a: string
  b: number
  c: boolean
  d: (string | number)[]
  e?: string
}
let b: obj = {
  a: "aa",
  b: 1,
  c: true,
  d: ["aa", 11]
}
b.e = 'aa'

type obj2 = {
  [key: string]: number
}
let c: obj2 = {
  a: 1,
  b: 1_000_000
}

// ※ほしい
// 正規表現でstring型を表現
// https://github.com/Microsoft/TypeScript/issues/6579

const regex = /[a-z]/i
const test = regex.test("baa") //boolean
console.log(test)
