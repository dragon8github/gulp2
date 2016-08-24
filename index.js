let UserEntity = require('./UserEntity.js').UserEntity;
class UserService
{
	constructor(userEntity)
	{
		Object.assign(this,userEntity);   //合并对象，相当于继承了所有的属性（没有继承方法）
	}

	getVersion()
	{
		console.log("1.0");
	}
}

let userEntity = new UserEntity();
userEntity.UserName = "LeeloveMp";
userEntity.UserPwd = "1234556";
var userService = new UserService(userEntity);
console.log(userService);