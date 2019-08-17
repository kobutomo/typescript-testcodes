const timeout = (second: number) => {
  return new Promise<void>((resolve, reject) => {
    if (second < 4) {
      setTimeout(() => resolve(console.log(second.toString() + "秒経過")), second * 1000)
    }
    else {
      setTimeout(() => reject(console.log("timeover")), second * 100)
    }
  })
}

const outputTimeLog = async (second: number) => {
  await timeout(second).catch(err => err)
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
