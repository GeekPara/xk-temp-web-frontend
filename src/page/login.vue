<template>
  <v-container class="fill-height">
    <v-row align="center">
      <v-col align-self="center">
        <div class="mx-4 my-6">
          <h1 class="text-h5 font-weight-bol text-center">登录</h1>
          <h2 class="text-h6 font-weight-bol text-center">
            使用您的鑫考云账户
          </h2>
        </div>
        <div class="mx-4 my-6">
          <v-text-field
            v-model="mobile"
            label="手机号码"
            :rules="mobile_rule"
             prefix="+86"
            outlined
            shaped
          ></v-text-field>
          <v-text-field
            v-model="password"
            label="密码"
            :type="password_show ? 'text' : 'password'"
            outlined
            shaped
            :append-icon="password_show ? 'mdi-eye' : 'mdi-eye-off'"
            @click:append="password_show = !password_show"
          ></v-text-field>
        </div>
        <div class="mx-4">
          <v-checkbox
            v-model="agree_eula"
            label="同意《隐私协议》与《服务条款》。"
            color="blue darken-2"
            hide-details
          ></v-checkbox>
        </div>
        <div class="mx-4 my-8">
          <v-btn large color="blue darken-2" class="float-right">登录</v-btn>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: function () {
    return {
      mobile: "",
      password: "",
      mobile_rule: [(value) => /^1\d{10}$/.test(value) || "手机号码不合法"],
      password_show: false,
      agree_eula: false,
    };
  },
};
</script>
