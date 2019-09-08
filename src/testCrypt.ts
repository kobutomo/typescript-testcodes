import bcrypt from "bcrypt"

const func = async () => {

  const hash01 = await bcrypt.hash("password", 10)
  console.log("hash01：" + hash01)

  const hash02 = await bcrypt.hash("tomoro", 10)
  console.log("hash02：" + hash02)


  const compare01 = await bcrypt.compare("password", hash01)
  console.log(compare01)

  const compare02 = await bcrypt.compare("tomoro", hash02)
  console.log(compare02)
}

func()
