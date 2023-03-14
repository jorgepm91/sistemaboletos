window.cargarEstiloOscuro= function() {  
  /* Los estilos de este componenete se obtienen generic style */
  /* Solo se implementa para un correcto flujo */
};
window.cargarEstiloClaro= function() {  
  /* Los estilos de este componenete se obtienen generic style */
  /* Solo se implementa para un correcto flujo */
};

window.Vue.component('venta-boletos', {
  props: {
    menurecibido:'',
  },
  data() {
    return {
      /* arreglo opciones del menu */
      listmenu: [],
      mostrar: false,
      txtbuscado: '',
      verencontrados: false,
      listfounds: [],
      verror: false,
      msjerror: '',
      esboleto:false,
      esventa:false,
      esevento:false
    };
  },
  template: `
<div>
  <template>      
            <div v-if="esventa">
              <div class="ventaestilo">
                  
                <input type="date"/>
              </div>
            </div>
            <div v-if="esboleto">
              Aqui va boleto
            </div>
            <div v-if="esevento">
              <componente-evento></componente-evento>
            </div>
            <div class="piepag">
              <div class="btnCenter">
                <v-btn class="btn botonPrimario"  @click="accionSalir()">Salir</v-btn>
              </div>
            </div>
   </template>
<!-- Seccion buscador interno menu hamburguesa -->
			<div id="effect" class="ui-widget-content ui-corner-all">
				<div id="menuPrincipal">
				<div class="header-usuario">
			
				<div id="inf-usuario">
                    <br>
					Menú Principal<br>
				</div>
				</div>
				<div id="busqueda">
				<form id="miForm" name="miForm"  >
				<div class="w87"><input  v-model="txtbuscado" type="text" id="busca"  @input="buscarlista()">
				<input type="button" class="buscar" value=""></div>
				</form>
			  	<template v-if="verror"> <div class="divError" >{{msjerror}}</div> </template>
				</div>
<!-- Aqui se realiza una busqueda, muestra lista coincidencias y oculta menu principal -->
				<div id="menu">
				<template v-if="verencontrados">
				<ul class="l-navegacion nivel1">
						<li v-for="item in listfounds" v-on:mouseover=mouseover(item) v-on:mouseleave=mouseleave
            v-on:click = mostrarform(item.opcion)
            >					
						<div>
					  	{{item.name}}
						</div>
						</a>
						</li>
					</ul>
				</template>
<!-- Aqui muestra menu cargado, solo se cargan dos niveles, si se realiza una busqueda se oculta -->
				<template v-if="!verencontrados">
				<ul class="l-navegacion nivel1">
						<li v-for="item in listmenu" v-on:mouseover=mouseover(item) v-on:mouseleave=mouseleave
            v-on:click = mostrarform(item.opcion)>
						<a :href=item.link target="iframeContent">
						<div>
						{{item.name}}
						</div>
					
						</a>
          </li>
        </ul>
        </template>
				</div>
				</div>
			</div>
  </div>
	`,
  methods: {

    mostrarform(opcion){

      if(opcion == "venta"){
        this.esventa = true;
        this.esboleto= false;
        this.esevento = false;
      }else if(opcion == "boleto"){
        this.esventa = false;
        this.esboleto= true;
        this.esevento = false;
      }else{
        this.esventa = false;
        this.esboleto= false;
        this.esevento = true;
      }
    },
    
    mouseover: function (item) {
      try {
        if (item.listl2.length > 0) {
          this.mostrar = true;
        }
      } catch (error) {}
    },
    mouseleave: function () {
      this.mostrar = false;
    },
    cargarlistmenu: function () {
      console.log('>> carga lista menu'); //debug
      /*****Carga por medio de arreglo por pseudoparametro props */
      /*  %respuesta%;% */
      /* Aqui se recibe items desde un arreglo recibido desde props */
      /* %respuesta%=% %this%.%menurecibido%;%Eliminar porcentajes  */

  
       const respuesta = [
        {
          name: 'Venta Boleto',
          opcion: 'venta',
          listl2: [],
        },
        {
          name: 'Administra Boletos',
          opcion: 'boleto',
          listl2: [],
        },
        {
          name: 'Administra Eventos.',
          opcion: 'evento',
          listl2: [],
        },
       
      ];

    if(respuesta){
      /*** Carga de elementos a arreglo formateado para mostrar */
      respuesta.forEach(element => {
        this.listmenu.push(element);
      });
    }else{
      this.emitirError('Error al cargar Menú');
    }

    },
    buscarlista: function () {
      this.listfounds = [];
      this.verror = false;
      if (this.txtbuscado.length > 0) {
        this.listmenu.forEach(elem=>{
          if(elem.listl2){
            elem.listl2.forEach(iteml2=>{
              this.buscaCoincidencia(iteml2,this.txtbuscado);
            });
          }
          this.buscaCoincidencia(elem,this.txtbuscado);
        });
        if (this.listfounds.length > 0) {
          this.verencontrados = true;
        } else {
          this.emitirError('Sin coincidencias');
        }
      } else {
        this.verencontrados = false;
        this.verror = false;
      }
    },
    buscaCoincidencia: function(item, buscado){
      if (item.name.toUpperCase().includes(buscado.toUpperCase())) {
        this.listfounds.push(item);
      }
    },
    emitirError(msj) {
      this.verror = true;
      this.msjerror = msj;
    },
    agregaMenuHamburger: function () {
      const divmenu = document.querySelector('.headerMenu');
      divmenu.innerHTML =
        "<a href='#' id='hamburger'><img src='Recursos/imagenes/Genericas/btn_hamburguer.svg' alt='Menú principal' class='imgHamburgesa'></a>";
    },
    accionSalir: function () {
      window.close();
    },
  },
  mounted() {
    this.agregaMenuHamburger();
  },

  created() {
    this.cargarlistmenu();
  },
});

$(document).ready(function () {
  // Menu hambuergesa
  let mostrar = false;
  $('#effect').toggle(false);
  $('#hamburger').click(function (event) {
    event.stopPropagation();
    $('#effect').toggle('slide');
    mostrar = !mostrar;
  });

  $(document).click(function () {
    if (mostrar) {
      $('#effect').toggle('slide');
      mostrar = false;
    }
  });
  $('#effect').click(function (event) {
    event.stopPropagation();
  });
  $('#miForm').submit(function (e) {
    e.preventDefault();
  });
});