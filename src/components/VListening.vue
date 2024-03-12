<script setup>

import VNavigator from "@/components/VNavigator.vue";
import VPoster from "@/components/VPoster.vue";
import VFooter from "@/components/VFooter.vue";
</script>

<template>
  <div style="padding:2rem">
    <VNavigator  current="Ahlaki" previous="Hakkında"/>
    <VPoster name="Baubek" course="IS-2" src="https://cdn.dribbble.com/userupload/13107032/file/original-983c1a83a504cc875f535411cbeaacf9.jpg?resize=1200x664"/>
    <div class="overview-description">
      <h1 class="overview-header">
        Kitabın ahlaki
      </h1>
      <div class="overview-questions">
        <p style="border-radius: 4px;border: 1px solid; padding: 10px;background-color: white">
          Simyacı'dan öğrenilebilecek ana derslerden biri,
          hayattaki gerçek mutluluk ve anlamın yalnızca kişinin
          kendi içinde bulunabileceğidir. Kitap bize ne olursa
          olsun hayallerinizin peşinden gitmenin ve onları
          başarma yeteneğinize inanmanın önemli olduğunu
          öğretiyor.
        </p>
      </div>
      <div>
        <h1 style="text-align: center; font-style: italic; font-size: 40px; position: relative; top:60px; z-index: 10; color:white">İlginiz için teşekkür ederiz</h1>
        <img src="https://cdn.dribbble.com/userupload/13438791/file/original-c01e3e6345420eba7268b3545e2cf85e.jpg?resize=1200x900" alt="" style="width: 100%; position: relative;border-radius: 5px">

      </div>

    </div>
  </div>
  <VFooter/>
</template>

<style scoped>

.overview-header{
  margin-top: 20px;
  border: 2px solid;
  padding: 10px;
  box-shadow: 1px 1px 1px 1px;
}
.overview-questions{
  padding: 20px;
}
</style>