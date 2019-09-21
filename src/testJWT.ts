import bcrypt from "bcrypt"
import Base64 from "./base64"

const func = async () => {
  const base64 = new Base64
  const header = base64.encode('{"alg":"bcrypt","typ":"JWT"}')
  const payload = base64.encode('{"sub":"1","iat":"20190921"}')

  const unsignedToken = header + "." + payload

  const token = await bcrypt.hash(unsignedToken, 10).catch(() => { console.log("暗号化失敗") })

  console.log(token)
}

func()
