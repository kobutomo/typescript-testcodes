const timeout = (second: number) => {
  return new Promise<string>(resolve => {
    setTimeout(() => resolve(second.toString() + "秒経過"), second * 1000)
  })
}
const testFunc = async () => {
  const [one, two, three] = await Promise.all([timeout(1), timeout(2), timeout(3)])
  console.log(one)
  console.log(two)
  console.log(three)
}
testFunc()
