const timeout = (second: number) => {
  //<() => string>はresolveの引数の型
  return new Promise<() => string>((resolve, reject) => {
    if (second < 4) {
      setTimeout(() => resolve(() => {
        return second.toString()
      })
        , second * 1000)
    }
    else {
      // rejectの引数はvoidである必要はない。
      // この場合stringが引数に入ってるが問題ない。
      // rejectの引数に型アノテーションできない？
      // 我々はその謎を解明すべくアマゾンの奥地へ向かった。
      // 参考:https://orgachem.hatenablog.com/entry/2016/05/25/185157
      setTimeout(() => reject("hey"), second * 1000)
    }
  })
}

// async functionが値を返す場合、例えばstrirng型を返す場合、
// 関数の型は() => stringではなく() => Promise<string>となる。
// stringをreturnしているが、
// 厳密にいうとresolveでstringを引数にとるPromiseを返している。
// つまり、返り値を使いたい場合awaitが必要ということ。
const outputTimeLog = async (second: number) => {
  try {
    const data = await timeout(second)
    console.log(data())
  } catch (err) {
    console.log(err)
  }
}

const testFunc = async () => {
  console.log("start")
  outputTimeLog(1)
  outputTimeLog(2)
  outputTimeLog(3)
  outputTimeLog(4)
  outputTimeLog(5)
  outputTimeLog(6)
}
testFunc()
