document.oncontextmenu = new Function('return false;');
window.app_obj = new window.Vue({
    el: '#app',
    vuetify: new window.Vuetify(),
   
});
//Modal
window.Vue.component('modalAvisoOk', {
    template: `
                <transition name="modal">
                    <div class="modal-mask">
                      <div class="modal-wrapper">
                        <div class="modal-container modal-long cuadroM" v-bind:class="tipo">
                          <div class="modal-body">
                             <div>
                                <div class="titModal">{{titModal}}</div>
                                <table class="tblModal">
                                    <tr>
                                        <td><img v-bind:src="foto"></td>
                                        <td>{{mensaje}}</td>
                                    </tr>
                  </table>
                  <div class="btnCenter">
                                    <a href="#" class="btn1" @click="$emit('abrir_siguiente')" >Aceptar</a>
                                </div>
                            </div>
                          </div><br>
                        </div>
                      </div>
                    </div>
                </transition>
            `,
    props: ['show', 'titModal', 'mensaje', 'foto', 'tipo', 'otro'],
});

window.Vue.component('modalAvisoError', {
    template: `
                <transition name="modal">
                    <div class="modal-mask">
                      <div class="modal-wrapper">
                        <div class="modal-container modal-long cuadroM" v-bind:class="tipo">
                          <div class="modal-body">
                             <div>
                                <div class="titModal">{{titModal}}</div>
                                <table class="tblModal">
                                    <tr>
                                        <td><img v-bind:src="foto"></td>
                                        <td>{{mensaje}}</td>
                                    </tr>
                  </table>
                  <div class="btnCenter">
                                    <a href="#" class="btn1" @click="$emit('abrir_siguiente')" >Aceptar</a>
                                </div>
                            </div>
                          </div><br>
                        </div>
                      </div>
                    </div>
                </transition>
            `,
    props: ['show', 'titModal', 'mensaje', 'foto', 'tipo', 'otro'],
});
window.Vue.component('modal-accion', {
    template: `<transition name="modal">
                <div class="modal-mask-modal">
                <div class="modal-wrapper">
                    <div class="modal-container modal-long cuadroM" v-bind:class="tipo">
                    <div class="modal-body">
                        <div>
                            <div class="titModal">{{ titulo }}</div>
                            <table class="tblModal">
                                <tr>
                                    <td><img v-bind:src="foto"></td>
                                    <td v-html = mensaje ></td>
                                </tr>
                            </table>
                            <div class="btnCenter">
                                <template v-if="Opc1">
                                    <a href="#" class="btn1" @click="$emit('accionaceptar')">Aceptar</a>
                                </template>
                                <template v-else-if="Opc2">
                                <a href="#" class="btn1" @click="$emit('accionaceptar')">Aceptar</a>
                                <a href="#" class="btn1 btnG" @click="$emit('accioncancelar')">Cancelar</a>
                                </template>
                                <template v-else-if="Opc3">
                                <a href="#" class="btn1" @click="$emit('accionsi')">Si</a>
                                <a href="#" class="btn1 btnG" @click="$emit('accionno')">No</a>
                                </template>
                            </div>
                            </div>
                        </div>
                    </div><br>
                    </div>
                </div>
                </div>
            </transition>`,
    props: ['titulo', 'mensaje', 'foto', 'tipo', 'Opc1', 'Opc2', 'Opc3'],
    model: {
        event: ['accionaceptar', 'accioncancelar', 'accionsi', 'accionno']
    }
})
window.vm = new window.Vue({
    data: {
        date: null,//pickers,
    },
});
$(document).ready(function () {
    /*Menu User*/
    const OPCIONESUSUARIO = '.MenuUser, .MenuUser1';
    $(OPCIONESUSUARIO).hide();
    $('.imgShowMenuUser').click(function (event) {
        event.stopPropagation();
        $(OPCIONESUSUARIO).toggle();
    });
    $(document).click(function () {
        $(OPCIONESUSUARIO).toggle(false);
    });
});
window.Vue.component('calendario', window.VueFlatpickr);
window.vm = new window.Vue({
    data: {
        date: null,//pickers,
    },
});