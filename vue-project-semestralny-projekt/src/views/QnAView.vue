<template>
    <main class="container">
      <section>
        <div class="container">
          <div class="col-100 text-center">
            <h1>Máte otázky?</h1>
            <p>Prosím, zodpovedali sme najčastejšie otázky týkajúce sa nášho mládežníckeho klubu LOMBERX FC</p>
          </div>
        </div>
      </section>
  
      <section>
        <div class="accordion" v-for="(item, index) in questions" :key="index">
          <div class="question" @click="toggleAnswer(index)">
            {{ item.question }}
          </div>
          <div class="answer" v-show="item.showAnswer">{{ item.answer }}</div>
        </div>
      </section>
    </main>
  </template>
  
  <script>
  import '@/utils/akordeon.js';
  export default {
    data() {
      return {
        questions: [
          {
            question: "Čo je LOMBERX FC?",
            answer: "LOMBERX FC - je mládežnícky futbalový klub, ktorý poskytuje vysoko kvalitnú futbalovú prípravu a vytvára komfortné podmienky pre rozvoj osobnosti každého účastníka.",
            showAnswer: false
          },
          {
            question: "Aký trénerský tím je v klube?",
            answer: "Trénerský tím LOMBERX FC pozostáva z kvalitných odborníkov vo futbalovom priemysle s mnohoročným skúsenostiam práce s mládežníckymi tímami.",
            showAnswer: false
          },
          {
            question: "Čo zahŕňa tréningový program v klube?",
            answer: "Program zahŕňa futbalové lekcie, intenzívne tréningy na zlepšenie rýchlosti, vytrvalosti, sily, tréningy taktiky a rozhodovania sa na ihrisku.",
            showAnswer: false
          },
          {
            question: "V akých súťažiach sa zúčastňuje LOMBERX FC?",
            answer: "Klub aktívne súťaží v rôznych turnajoch a šampionátoch na miestnej, regionálnej a národnej úrovni.",
            showAnswer: false
          },
          {
            question: "Aký je zameranie klubu okrem športových tréningov?",
            answer: "Okrem športových tréningov sa klub venuje aj rozvoju osobnosti teenagerov, pomáha formovať vodcovské schopnosti a zodpovednosť.",
            showAnswer: false
          },
          {
            question: "Ako LOMBERX FC pomáha svojim účastníkom po skončení výučby?",
            answer: "LOMBERX FC nie len ukončuje vzdelávanie, ale aj pokračuje v podpore svojich účastníkov v ich ďalších krokoch. Poskytujeme možnosti pre ďalšie profesionálne rozvoj, smerujúc absolventov k profesionálnym futbalovým klubom alebo futbalovým akadémiám.",
            showAnswer: false
          },
          {
            question: "Ako sa pripojiť k tímu LOMBERX FC?",
            answer: "Aby ste sa pripojili k tímu LOMBERX FC, môžete vyplniť špeciálny formulár na našej webovej stránke v sekcii 'Kontakty' a odoslať nám svoj email. My sa s vami spojíme a odpovieme vám na váš email.",
            showAnswer: false
          }
        ]
      };
    },
    methods: {
      toggleAnswer(index) {
        this.questions[index].showAnswer = !this.questions[index].showAnswer;
      }
    },
    mounted() {
        var accordion = document.getElementsByClassName('accordion');
        for (let a of accordion) {
            a.addEventListener("click", function () {
                this.classList.toggle('active');
            });
        }
    }
  };
</script>
<style src="@/assets/akordeon.css"></style>