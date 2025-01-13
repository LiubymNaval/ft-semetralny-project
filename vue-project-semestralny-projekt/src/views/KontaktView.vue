<template>
  <main class="container">
    <section>
      <div class="row" style="background-color: greenyellow">
        <div class="col-100 text-center"> 
          <h2>Máte ešte nejaké otázky alebo by ste sa chceli pripojiť k klubu LOMBERX FC?</h2>   
          <p>Prosím, kontaktujte nás vyplnením kontaktného formulára</p>
        </div>
      </div>
      <div class="col-100 text-center" style="background-color: greenyellow">
        <h3>Napíšte nám</h3>
        <form id="contact" @submit.prevent="submitForm">
          <input type="text" placeholder="Vaše meno" v-model="formData.meno"><br>
          <input type="email" placeholder="Váš email" v-model="formData.email"><br>
          <textarea placeholder="Vaša správa" v-model="formData.sprava"></textarea><br>
          <input type="checkbox" id="agree" v-model="formData.agree"><label for="agree"> Súhlasím so spracovaním osobných údajov</label><br>
          <input type="submit" value="Odoslať" :disabled="!formData.agree">
        </form>
        <div id="error" class="text-red" v-if="error">
          {{ error }}
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { useFormStore } from '@/stores/formStore';

export default {
  setup() {
    const formStore = useFormStore();

    const submitForm = async () => {
      try {
        if (!formStore.formData.meno || !formStore.formData.email || !formStore.formData.sprava) {
          formStore.error = 'Všetky polia sú povinné.';
          return;
        }
        const response = await formStore.submitForm();
        console.log("submitForm response:", response);  

        if (response.success) {
          alert("Správa bola úspešne odoslaná!");
        } else {
           alert("Chyba pri odosielaní správy: " + response.message);
          }
        } catch (error) {
              formStore.error = 'Chyba pri odosielaní správy!';
              console.error('Error in submitForm:', error);
          }   
    };

    return {
      formData: formStore.formData,
      error: formStore.error,
      submitForm,
    };
  },
};
</script>