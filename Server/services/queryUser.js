import User from '../model/userModel.js'

export const FindByEmail = async (email) => {
  const user = await User.findOne({ email })
  return user
}

export const Create = async (name, email, hashedPassword, avatar) => {
  const user = await User.create({
    name,
    email,
    password: hashedPassword,
    avatar,
  })
  return user;
}
