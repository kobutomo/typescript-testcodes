const timeout = (second: number) => {
  return new Promise<string>((resolve, reject) => {
    if (second < 2) {
      setTimeout(() => resolve(second.toString() + "秒経過"), second * 1000)
    }
    else {
      setTimeout(() => reject("timeover"), second * 1000)

    }
  })
}
const oneSecond = async () => {
  console.log(await timeout(1).catch(err => err))
}
const twoSeconds = async () => {
  console.log(await timeout(2).catch(err => err))
}
const threeSeconds = async () => {
  console.log(await timeout(3).catch(err => err))
}
const testFunc = async () => {
  console.log("start")
  oneSecond()
  twoSeconds()
  threeSeconds()
}
testFunc()
