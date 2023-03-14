
window.Vue.component('header-principal', {
  data() {
    return {
      temaestilo: '',
      darkmodeusuario: false,
    };
  },
  template: `
          <div>
            <div class="pageHome">
              <div class="header">
                  <div class="headerMenu"></div>
            </div>
            <div class="titulo">
              <h5><span >{{nomappnegro}}</span><span style= "color: #54b63d"> {{nomappverde}}</span></h5>
            </div>
          </div>
          </div>
    `,
  // props: ['usr_nombre', 'usr_apellido',  'usr_puesto', 'ws', 'Sucursal', 'NombreSucursal'],
  props: {
    nomappnegro: String,
    nomappverde: String,
  },

  methods: {
    cerrarAplicacion: function () {
     localStorage.clear();
      window.close();
    },
    
  },

  
});
