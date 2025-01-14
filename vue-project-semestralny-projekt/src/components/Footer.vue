<template>
    <footer class="container bg-black text-greenyellow">
        <div class="row">
        <div class="col-25">
        <h4>Kto sme</h4>
        <p>LOMBERX FC - je mládežnícky futbalový klub, ktorý nielen poskytuje vysoko kvalitnú futbalovú prípravu, 
            ale tiež vytvára pohodlné podmienky pre rozvoj osobnosti každého účastníka.</p>
        </div>
        <div class="col-25">
        <h4>Kontaktujte nás</h4>
        <ul>
        <li><i class="fa fa-envelope" aria-hidden="true"><a
        href="mailto:LomberxFC@gmail.com" style="color: greenyellow">
        LomberxFC@gmail.com</a></i></li>
        <li><i class="fa fa-phone" aria-hidden="true"><a
        href="tel:0909555222" style="color: greenyellow"> 0909555222</a></i></li>
        </ul>
        </div>
        <div class="col-25">
        <h4>Rýchle odkazy</h4>
        <ul>
            <li><RouterLink to="/" class="green-link">Domov</RouterLink></li>
            <li><RouterLink to="/galeria" class="green-link">Galéria</RouterLink></li>
            <li><RouterLink to="/kontakt" class="green-link">Kontakt</RouterLink></li>
            <li><RouterLink to="/recenzie" class="green-link">Recenzie</RouterLink></li>
            <li><RouterLink to="/profil" class="green-link">Profil</RouterLink></li>
        </ul>
        </div>
        <div class="col-25">
        <h4>Nájdete nás</h4>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10614.839764656655!2d18.0910518!3d48.3084298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xba2bad032d96b960!2sFakulta%20pr%C3%ADrodn%C3%BDch%20vied%20a%20informatiky!5e0!3m2!1ssk!2ssk!4v1669307792855!5m2!1ssk!2ssk" width="300" height="150" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> 
        </div>
        </div>
        <div class="row">
        Created and designed by Liubym Naval
        </div>
    </footer>
  </template>
  
<script>
  export default {
    name: 'Footer',
  };
</script>
<style scoped>
.green-link {
  color: greenyellow; 
  text-decoration: none;
}

.green-link:hover {
  text-decoration: underline; 
}
</style>