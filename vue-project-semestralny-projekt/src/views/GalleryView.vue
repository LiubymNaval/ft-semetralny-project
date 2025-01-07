<template>
<section class="slides-container">
    <div class="slide fade">
    <img src="/img/training.jpg">
    <div class="slide-text">
        Kvalitné tréningy
    </div>
    </div>
    <div class="slide fade">
    <img src="/img/Coah_training.jpg">
    <div class="slide-text">
        Najlepší tréneri a metódy
    </div>
    </div>
    <div class="slide fade">
    <img src="/img/Tournament match.jpg">
    <div class="slide-text">
        Pravidelné víťazstvá
    </div>
    </div>
    <div class="slide fade">
    <img src="/img/team.jpg">
    <div class="slide-text">
        Teamový duch
    </div>
    </div>
    <div class="slide fade">
    <img src="/img/FC_Lomberx_player.jpg">
    <div class="slide-text">
        Budúca špičková kariéra
    </div>
    </div>
    <a id="prev" class="prev">❮</a>
    <a id="next" class="next">❯</a>
</section>
</template>

<script>
import "@/assets/slider.css"; 
import slider from "@/utils/slider.js"; 

export default {
  name: "GalleryView",
  mounted() {
    slider(); 
  },
};
</script>