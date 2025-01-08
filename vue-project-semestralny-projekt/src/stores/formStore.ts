import { defineStore } from 'pinia';

interface FormData {
  meno: string;
  email: string;
  sprava: string;
  agree: boolean;
}

interface FormState {
  formData: FormData;
  error: string | null;
  success: boolean| null;
  message: string | null;  
}

export const useFormStore = defineStore('form', {
  state: (): FormState => ({
    formData: {
      meno: '',
      email: '',
      sprava: '',
      agree: false,
    },
    error: null,
    success: null,
    message: null,
  }),
  actions: {
    async submitForm(): Promise<any> {
      this.error = null;
      this.success = null;
      this.message = null;

      try {
        const response = await fetch('http://localhost/api/db/spracovanieFormulara.php', {
          method: 'POST',
          body: JSON.stringify({
            meno: this.formData.meno,
            email: this.formData.email,
            sprava: this.formData.sprava,
          }),
          headers: {
            'Content-Type': 'application/json',
          },
        });

        const result = await response.json();
        if (response.ok && result.status === 'success') {
            this.success = true;  
            this.message = result.message;
          return { success: true, message: result.message };
        } else {
          this.success = false; 
          this.error = result.message || 'Neznáma chyba pri odosielaní formulára.';
          return { success: false, message: this.error  }; 
        }
      } catch (error: any) {
        this.success = false;
        this.error = 'Chyba: ' + error.message;
        return {success: false, message: this.error};
      }
    },
  },
});