<script src="../../../my-project/vue.config.js"></script>
<template>
    <div class="user">
        <div class="user-box">
            <div class="user-login">
                <h3 class="user-login-title">使用账户登录</h3>
                <Form :model="formItem" :label-width="40">
                    <FormItem label="账号:">
                        <Input v-model="formItem.username" placeholder="请输入账号"/>
                    </FormItem>
                    <FormItem label="密码:">
                        <Input v-model="formItem.password" placeholder="请输入密码"/>
                    </FormItem>
                    <div class="remember">
                        <Checkbox v-model="formItem.remember"><span class="remember-text">记住登录状态</span></Checkbox>
                    </div>
                    <div class="submit">
                        <Button type="primary" long @click.native="submit">登录</Button>
                    </div>
                </Form>
                <div class="user-login-register">没有账户 ? 点击此处 <a>注册</a></div>
            </div>
        </div>
        <!--<footer>言士文学 © 版权所有</footer>-->
    </div>
</template>
<script>
    import ajax from "../assets/api/ajax.js";

    export default {
        data() {
            return {
                formItem: {
                    username: '',
                    password: '',
                    remember: ''
                }
            }
        },
        methods: {
            submit() {
                ajax({
                    url: "/login.xzy",
                    data: {user_name: "admin", user_pwd: "21232f297a57a5a743894a0e4a801fc3"}
                }).then((value) => {
                    console.log(value);
                })
                this.$router.push('/home')
            }
        }
    }
</script>

<style scoped>
    .user {
        width: 100%;
        height: 100%;
        background: radial-gradient(circle, rgba(59, 174, 185, 0.7) 40%, rgba(59, 174, 185, 1)) 60%;
        position: relative;
    }

    .user-box {
        position: absolute;
        width: 100%;
        top: 200px;
    }

    .user-login {
        position: relative;
        width: 280px;
        height: 410px;
        padding: 20px 30px 0 30px;
        color: #466168;
        background: url(../assets/img/box-pattern.jpg) repeat;
        margin: 0 auto;
        box-shadow: 1px 1px 10px 5px rgba(72, 150, 157, .6);
    }

    .user-login-title {
        text-align: center;
        font-weight: 600;
        font-family: sans-serif;
        margin-bottom: 30px;
    }

    .user-login-register {
        font-size: 12px;
        text-align: center;
        margin-top: 35px;
    }

    .user-login-register > a {
        text-decoration: underline;
        cursor: pointer;
    }

    .remember {
        margin-bottom: 20px;
    }

    .remember-text {
        margin-left: 5px;
    }

    footer {
        font-size: 12px;
        text-align: center;
        position: absolute;
        color: #FFFFFF;
        bottom: 50px;
        width: 100%;
    }
</style>