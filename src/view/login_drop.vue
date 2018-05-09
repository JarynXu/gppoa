<template>
    <div id="loginRegist" class="container">
        <div style="text-align: center;height:200px;vertical-align:middle;"><h1>高校网络舆情分析系统</h1></div>
        <div class="form row">
            <form class="form-horizontal col-sm-offset-3 col-md-offset-3" id="login_form"
                  v-bind:class="{show:isShowLogin,hide:!isShowLogin}">
                <div class="col-sm-9 col-md-9">
                    <h3 class="form-title" style="text-align: center">登录</h3>
                    <div class="form-group">
                        <i class="fa fa-user fa-lg"></i>
                        <input class="form-control required" type="text" placeholder="请输入用户名" name="username"
                               autofocus="autofocus" maxlength="15" v-model="userName" value="admin"/>
                    </div>
                    <div class="form-group">
                        <i class="fa fa-lock fa-lg"></i>
                        <input class="form-control required" type="password" placeholder="请输入密码" name="password"
                               maxlength="15" v-model="userPwd" value="admin"/>
                    </div>
                    <div class="form-group">
                        <hr/>
                        <a href="javascript:;" id="register_btn" @click="showRegist()">创建一个新用户</a>
                    </div>
                    <div class="form-group">
                        <input type="button" class="btn btn-success pull-right" value="登录" @click="login()"/>
                    </div>
                </div>
            </form>
        </div>

        <div class="form row">
            <form class="form-horizontal col-sm-offset-3 col-md-offset-3" id="register_form"
                  v-bind:class="{show:isShowRegist,hide:!isShowRegist}">
                <div class="col-sm-9 col-md-9">
                    <h3 class="form-title" style="text-align: center">注册</h3>
                    <div class="form-group">
                        <i class="fa fa-user fa-lg"></i>
                        <input class="form-control required" type="text" placeholder="4到15位字母、数字或下划线" name="username"
                               autofocus="autofocus" v-model="registUserName"/>
                    </div>
                    <div class="form-group">
                        <i class="fa fa-lock fa-lg"></i>
                        <input class="form-control required" type="password" placeholder="6到15位字母、数字和特殊字符"
                               id="register_password"
                               name="password" v-model="registUserPwd"/>
                    </div>
                    <div class="form-group">
                        <i class="fa fa-check fa-lg"></i>
                        <input class="form-control required" type="password" placeholder="请再次输入密码"
                               name="rpassword" v-model="registUserRePwd"/>
                    </div>
                    <div class="form-group">
                        <input type="button" class="btn btn-success pull-right" value="注册" @click="regist()"/>
                        <input type="button" class="btn btn-info pull-left" id="back_btn" value="返回登录"
                               @click="showLogin()"/>
                    </div>
                </div>
            </form>
        </div>
    </div>

</template>
<script>
    export default {
        created: function () {
            var self = this;
        },
        data() {
            return {
                userName: "",
                userPwd: "",
                isShowLogin: true,
                isShowRegist: false,
                registUserName: "",
                registUserPwd: "",
                registUserRePwd: ""
            }
        },
        methods: {
            showLogin: function () {
                this.isShowRegist = false;
                this.isShowLogin = true;
            },
            showRegist: function () {
                this.isShowLogin = false;
                this.isShowRegist = true;
            },
            login: function () {
                if (tool.isEmptyObj(this.userName)) {
                    tool.showDialog("用户名不能为空！");
                    return;
                }
                if (tool.isEmptyObj(this.userPwd)) {
                    tool.showDialog("密码不能为空！");
                    return;
                }
                tool.ajax({
                    url: "/hadooptieba/login.xzy",
                    data: {user_name: this.userName, user_pwd: md5(this.userPwd)}
                }, function (result) {
                    if (result.code == 0) {
                        tool.showDialog("登陆成功！");
                        window.location.href = "/hadooptieba/html/home.html";
                    }
                });
            },
            regist: function () {
                var userNamePattern = /^[a-zA-Z0-9_]{4,15}$/;//用户名正则，4到15位字母、数字或下划线的组合
                var userPwdPattern = /^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[~!@#$%^&*?]).{6,15}$/;//密码强度正则，6-15位，包括至少1个字母，1个数字，1个特殊字符
                console.log(this.registUserName);
                console.log(this.registUserPwd);
                console.log(this.registUserRePwd);
                if (tool.isEmptyObj(this.registUserName)) {
                    tool.showDialog("用户名不能为空！");
                    return;
                }
                if (!userNamePattern.test(this.registUserName)) {
                    tool.showDialog("用户名必须是4到15位字母、数字或下划线的组合！");
                    return;
                }
                if (tool.isEmptyObj(this.registUserPwd)) {
                    tool.showDialog("密码不能为空！");
                    return;
                }
                if (!userPwdPattern.test(this.registUserPwd)) {
                    tool.showDialog("密码必须为6到15位字母、数字和特殊字符的组合！");
                    return;
                }
                if (tool.isEmptyObj(this.registUserRePwd)) {
                    tool.showDialog("请再次输入密码！");
                    return;
                }
                if (this.registUserPwd != this.registUserRePwd) {
                    tool.showDialog("两次输入的密码不一致，请重新输入");
                    return;
                }
                tool.ajax({
                    url: "/hadooptieba/regist.xzy",
                    data: {user_name: this.registUserName, user_pwd: md5(this.registUserPwd)}
                }, function (result) {
                    tool.showDialog("注册成功！");
                    window.location.href = "/hadooptieba/html/login.html";
                })

            }
        }
    }
</script>
<style scoped>
    #loginRegist {
        background: url(../assets/img/background.jpg) no-repeat;
        background-size: cover;
        font-size: 16px;
    }

    .form {
        background: rgba(255, 255, 255, 0.2);
        width: 400px;
        margin: auto;
    }

    #login_form {
        display: none;
    }

    #register_form {
        display: block;
    }

    .show {
        display: none;
    }

    .hide {
        display: block;
    }

    .fa {
        display: inline-block;
        top: 27px;
        left: 6px;
        position: relative;
        color: #ccc;
    }

    input[type="text"], input[type="password"] {
        padding-left: 26px;
    }

    .checkbox {
        padding-left: 21px;
    }
</style>
