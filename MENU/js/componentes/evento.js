
window.Vue.component('calendario', window.VueFlatpickr);
window.vm = new window.Vue({
  data: {
    date: null,//pickers,
  },
});
window.Vue.component('componente-evento', {
props: {
menurecibido:'',
},
data() {
return {
/* arreglo opciones del menu */
listmenu: [],
tituloevento:'',
fechainicio:'',
fechafin:'',
totalboletos:''

};
},
template: `
<div>
  <div class="formevento">
    <h1>Genera Evento</h1>
    <br>
    <p>Ingresa los datos en el formulario</p>
    <br>
    Otorga un nombre al evento: <input type="text"  v-model="tituloevento" class="inputentradatxt"/>
    <div class="divCol4">
   
      <div class="col4">
        Fecha Inicial:<br>
        <calendario  class="CajaTexto" v-model="fechainicio" ></calendario>
      </div>
      <div class="col4">
        Fecha Final:<br>
        <calendario class="CajaTexto" v-model="fechafin" ></calendario>
      </div>
      <div class="col4">&nbsp;<br>
        
      </div>
    </div>

    <div class="divCol4">   
    <div class="col4">
      Total boletos: <input type="text"  v-model="totalboletos" class="inputentradacl"/>      
    </div>
    <div class="col4">
    
    </div>
    <div class="col4">&nbsp;<br>
      <v-btn class="btn botonPrimarioExtendido"  >Registrar </v-btn>
    </div>
  </div>

  </div>
</div>
`,
methods: {
registrarEvento(){

}

},
mounted() {

},

created() {

},
});