import jwt from 'jsonwebtoken'

export const signToken = (userId: any) => jwt.sign({ userId }, process.env.JWT_SECRET as string)

