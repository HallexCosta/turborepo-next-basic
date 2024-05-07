import jwt from 'jsonwebtoken'

const jwtSecret = 'secret'

export const authJwtToken = (username: string) => {
  const exp = new Date()
  exp.setDate(exp.getDate() + 1) // increase 1 day
  const payload = {
    username,
    iat: Math.floor(Date.now() / 1000) - 30,
    exp: +exp
  }
  const token = jwt.sign(payload, jwtSecret)
  console.log({ token })
  return {
    token,
    expirationDate: exp
  }
}

export const verifyAuthJwtToken = (token: string) => {
  try {
    return jwt.verify(token, jwtSecret)
  } catch (e) {
    return false
  }
}
