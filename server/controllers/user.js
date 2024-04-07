import { TryCatch } from '../middlerwares/error.js';
import { User } from '../models/user.js'
import { compare } from "bcrypt";
import { sendToken } from '../utils/features.js';
import { ErrorHandler } from '../utils/utility.js';
//Create a new user and save it to the database and save in cookie
const newUser = async (req, res) => {
    const { name, username, password, bio } = req.body;
    const avatar = {
        public_id: "sdjks",
        url: "skdjfkl",
      };
    
      const user = await User.create({
        name,
        bio,
        username,
        password,
        avatar,
      });
    
      sendToken(res, user, 201, "User created");
}
// Login user and save token in cookie
const login = TryCatch(async (req, res, next) => {
    const { username, password } = req.body;
  
    const user = await User.findOne({ username }).select("+password");
  
    if (!user) return next(new ErrorHandler("Invalid Username or Password", 404));
  
    const isMatch = await compare(password, user.password);
  
    if (!isMatch)
      return next(new ErrorHandler("Invalid Username or Password", 404));
  
    sendToken(res, user, 200, `Welcome Back, ${user.name}`);
  });

  const getMyProfile = TryCatch(async (req, res, next) => {
    const user = await User.findById(req.user);
  
    if (!user) return next(new ErrorHandler("User not found", 404));
  
    res.status(200).json({
      success: true,
      user,
    });
  });
export {newUser,login,getMyProfile}