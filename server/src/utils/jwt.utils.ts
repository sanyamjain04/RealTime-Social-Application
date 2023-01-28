import jwt from 'jsonwebtoken'

export const signToken = (userId: number) => jwt.sign({ userId }, process.env.JWT_SECRET as string)

