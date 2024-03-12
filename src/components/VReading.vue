<script setup>

import VNavigator from "@/components/VNavigator.vue";
import VPoster from "@/components/VPoster.vue";
import VFooter from "@/components/VFooter.vue";
</script>

<template>
  <div style="padding:2rem">
    <VNavigator next="Ahlaki" current="Hakkında" previous="Incelemesi"/>
    <VPoster name="Sabyrzhan" course="Phys-Ped-2" src="https://cdn.dribbble.com/userupload/13131060/file/original-54abf604c34c347440f19cc4b987525b.jpg?resize=1200x664"/>
    <div class="overview-description">
      <h1 class="overview-header">
        Kitap hakkında
      </h1>
      <div class="overview-questions">
        <div>
          <h2>
            Simyanın sembolizmi
          </h2>
          <p>
            Kitap, ana karakter Santiago'nun kendini keşfetme ve ruhsal dönüşüm
            sürecini göstermek için kullanılan birçok simya sembolü ve alegori
            içermektedir. Kitapta simya, yalnızca metalleri dönüştürmenin kadim
            bilimi olarak değil, aynı zamanda ruhsal uyum ve içgörü elde etmenin
            sembolik bir sanatı olarak da sunuluyor.
          </p>
        </div>
        <br>
        <div style="display: flex; width: 100%;justify-content: center">
          <img src="https://images.saymedia-content.com/.image/t_share/MTg3MjcwOTM3MzI1MDIxMDcw/the-alchemist-by-paulo-coelho-book-review.jpg" alt="" style="width:90%;margin: auto 0;border: 1px solid;border-radius: 5px">
        </div>
        <br>
        <div>
          <h2>
            Gerçek hayattan ilham
          </h2>
          <p>
            Kitabın fikri Paulo Coelho'nun İspanya gezisi sırasında aklına geldi.
            Kendisi, bir gün İspanya'nın Taragona kentindeki taş katedralin
            avlusundayken sanki birisi ona Aziz Gregory hakkında sözler
            fısıldıyormuş gibi hissettiğini söyledi - bu ona "Simyacı"nın senaryosunu
            yaratma konusunda ilham verdi.
          </p>
        </div>
        <br>
        <p>
          Simyacı, Brezilyalı yazar Paulo
          Coelho'nun yazdığı çok satan bir kitaptır.
          Kitap ilk olarak 1988'de yayınlandı ve o
          zamandan beri dünya çapında
          milyonlarca okuyucu kazandı. Kaderini ve
          gerçek mutluluğunu bulmak için
          yolculuğa çıkan Santiago adında genç bir
          adamın hikayesini anlatıyor.
        </p>
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