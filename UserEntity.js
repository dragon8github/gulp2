class UserEntity
{
	get UserName(){return this._UserName} //获取属性,命名必须大写开头
	set UserName(n){this._UserName = /^\w{5,19}$/.test(n)?n:null} //设置属性，命名必须大写开头

	get UserPwd(){return this._UserPwd} //获取属性,命名必须大写开头
	set UserPwd(n){this._UserPwd = /^\w{5,19}$/.test(n)?n:null} //设置属性，命名必须大写开头
}

exports.UserEntity = UserEntity;