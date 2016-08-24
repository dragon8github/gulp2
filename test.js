let Lee = require('Lee');

let userEntity = new Lee.UserEntity();
userEntity.UserName = "LeeloveMp";
userEntity.UserPwd = "1234556";

let userService = new Lee.UserService(userEntity);

console.log(userService);