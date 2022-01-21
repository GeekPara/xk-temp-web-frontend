<template>
  <v-container class="fill-height">
    <v-row>
      <v-col>
        <div class="mx-4 my-6">
          <h1 class="text-h5 font-weight-bol text-center">哪个是您？</h1>
          <h2 class="text-h6 font-weight-bol text-center">
            请选择一个您账号下的学生
          </h2>
        </div>
        <div class="mx-4 my-6">
            <v-list
      subheader
      two-line
    >

      <v-list-item
      >
        <v-list-item-avatar>
          <v-icon
            class="grey lighten-1"
            dark
          >
            mdi-account
          </v-icon>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>马浚哲</v-list-item-title>

          <v-list-item-subtitle>G2019</v-list-item-subtitle>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon>
            <v-icon color="grey lighten-1">mdi-arrow-right-drop-circle</v-icon>
          </v-btn>
        </v-list-item-action>
      </v-list-item>
</v-list>
        </div>
        <div class="mx-4">
          <v-checkbox
            v-model="rememberMyChoice"
            label="记住我的选择"
            color="blue darken-2"
            hide-details
          ></v-checkbox>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <p class="text-center">账户服务由<a>鑫考云校园</a>提供</p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data:  () =>({
      rememberMyChoice: false,
  }),
};
</script>
