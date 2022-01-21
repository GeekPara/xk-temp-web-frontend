<template>
  <v-container class="fill-height">
    <v-row>
      <v-col>
        <div class="mx-4 my-6">
          <h1 class="text-h5 font-weight-bol text-center">登录</h1>
          <h2 class="text-h6 font-weight-bol text-center">使用您的鑫考云账户</h2>
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
            style="border-radius: 0px 0px 16px 16px"
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
            style="dispaly: inline"
          >
            <template v-slot:label>
              同意《隐私协议》与《服务条款》。<a><b>了解详情</b></a>
            </template>
          </v-checkbox>
        </div>
        <div class="mx-4 my-8">
          <v-btn large dark color="blue darken-2" class="float-right">登录</v-btn>
        </div>
      </v-col>
    </v-row>
    <v-footer style="width: 100%; bottom: 0px; position: absolute; background: white">
      <v-col class="text-center" style="color: grey;">
        账户服务由<a
          style="color: inherit; border-bottom: 1px solid grey; text-decoration: none"
          href="http://home.xinkaoyun.com/"
          target="_blank"
          >鑫考云校园</a
        >提供
      </v-col>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    mobile: "",
    password: "",
    mobile_rule: [(value) => /^1\d{10}$/.test(value) || "手机号码不合法"],
    password_show: false,
    agree_eula: false,
  }),
};
</script>
