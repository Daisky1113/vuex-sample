<template>
  <v-row justify="center">
    <v-col cols="9" class="mt-3">
      <v-card flat>
        <v-row>
          <v-col cols="3" class="mt-4">
            <div class="d-flex justify-center mb-4">
              <v-avatar size="128" class="mb-4">
                <!-- <v-img :src="photoUrl" /> -->
              </v-avatar>
            </div>
            <div class="d-flex justify-center">
              <slot name="voteBtn" />
            </div>
          </v-col>
          <v-col cols="9">
            <v-card-text>
              <p class="subtitle-2 font-weight-bold">プロダクト名</p>
              <p class="text-body-1 mb-10">
                {{ productName }}
              </p>
              <p class="subtitle-2 font-weight-bold">使用技術</p>
              <div class="mb-10">
                <v-chip
                  v-for="(topic, index) in topicArr"
                  :key="index + topic"
                  class="ml-2"
                >
                  {{ topic }}
                </v-chip>
              </div>
              <p class="subtitle-2 font-weight-bold">技術的工夫</p>
              <div class="mb-10">
                <p
                  v-for="(p, index) in tecDetailArr"
                  :key="index + p"
                  class="text-body-1 mb-1"
                >
                  {{ p }}
                </p>
              </div>

              <p class="subtitle-1 font-weight-bold">サービス的工夫</p>
              <div class="mb-10">
                <p
                  v-for="(p, index) in serviceDetailArr"
                  :key="index + p"
                  class="text-body-1 mb-1"
                >
                  {{ p }}
                </p>
              </div>
            </v-card-text>
            <v-card-actions> </v-card-actions>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
    <v-col cols="3">
      <v-card>
        <v-card-title> プロダクト情報登録 </v-card-title>
        <v-card-text>
          <v-text-field outlined dense label="Product Name" />
          <v-text-field outlined dense label="使用技術(半角スペース区切り)" />
          <v-textarea outlined dense label="技術的こだわり" />
          <v-textarea outlined label="サービス的こだわり" />
        </v-card-text>
        <v-card-actions class="pb-4">
          <v-spacer />
          <v-btn outlined small @click="registerProduct"> 登録する </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>
<script>
import { mapState, mapGetters, mapMutations, mapActions } from "vuex";

export default {
  components: {},
  data: () => ({}),
  computed: {
    ...mapState("user", ["product"]),
    topicArr() {
      return this.product.topics.split(" ");
    },
    tecDetailArr() {
      return this.product.tecDetail.split(/\r\n|\r/);
    },
    serviceDetailArr() {
      return this.product.serviceDetail.split(/\r\n|\n/);
    },
  },
  methods: {
    ...mapMutations("user", [
      "setProductName",
      "setProductTopics",
      "setProductTecDetail",
      "setProductServiceDetail",
    ]),
    registerProduct() {
      console.log(this.productName);
      console.log(this.tecTopic);
      console.log(this.tecDetail);
      console.log(this.serviceDetail);
    },
  },
};
</script>
