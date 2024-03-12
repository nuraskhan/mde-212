<script setup>

import VNavigator from "@/components/VNavigator.vue";
import VPoster from "@/components/VPoster.vue";
import VFooter from "@/components/VFooter.vue";
</script>

<template>
  <div style="padding:2rem">
    <VNavigator next="Hakkında" current="Incelemesi"/>
    <VPoster name="Nuraskhan" course="CS-2" src="https://cdn.dribbble.com/userupload/13141224/file/original-7a7e32f1cc9e89a41407195744f3effa.jpg?resize=1200x664"/>
    <div class="overview-description">
      <h1 class="overview-header">
        Kitap incelemesi
      </h1>
      <div class="overview-questions">
        <div style="display: flex; width: 100%;justify-content: center">
          <img src="https://i0.wp.com/goodqn.com/wp-content/uploads/2021/07/Meaning-of-life-paulo-coelho-1.jpg?resize=1080%2C675&ssl=1" alt="" style="width:80%;margin: auto 0;border: 1px solid;border-radius: 5px">

        </div>
        <div style="display: flex; width: 100%;justify-content: center">
          <div>
            <h2 style="text-align: center; font-size:35px">Paulo Coelho</h2>
            <h3>1947 Yılının 24 Ağustos</h3>
          </div>
        </div>
        <br>
        <p style="border-radius: 4px;border: 1px solid; padding: 10px;background-color: white">
          Paulo Coelho sadece bir yazar değil aynı
          zamanda bilge bir düşünürdür ve eserleri sıklıkla
          felsefi düşünce ve ruhsal gelişime dair fikirler
          içermektedir. Eserleri çoğu zaman insanlara
          yaşamın anlamını, kendini tanımayı ve kendini
          gerçekleştirmeyi arama konusunda ilham
          veriyor.
        </p>
      </div>

    </div>
  </div>
  <VFooter/>
</template>

<style scoped>
.overview-description{

}
.overview-header{
  margin-top: 20px;
  border: 2px solid;
  padding: 10px;
  box-shadow: 1px 1px 1px 1px;
  background-color: white;
}
.overview-questions{

  padding: 20px;
  margin-top: 2px;
}
</style>