webpackJsonp([4],{EPGY:function(o,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e,n=r("mtWM"),a=(e=n)&&e.__esModule?e:{default:e};t.default={data:function(){return{novoProduto:{produto:"",valor:0}}},methods:{submeterFormulario:function(){return a.default.post("https://umartigos.firebaseio.com/.json",this.novoProduto)}}}},Gjib:function(o,t,r){"use strict";var e=function(){var o=this,t=o.$createElement,r=o._self._c||t;return r("form",{staticClass:"form",on:{submit:function(t){t.preventDefault(),o.submeterFormulario(t)}}},[r("div",{staticClass:"input-control"},[r("label",[o._v("Produto")]),r("input",{directives:[{name:"model",rawName:"v-model",value:o.novoProduto.produto,expression:"novoProduto.produto"}],attrs:{type:"text"},domProps:{value:o.novoProduto.produto},on:{input:function(t){t.target.composing||o.$set(o.novoProduto,"produto",t.target.value)}}})]),r("div",{staticClass:"input-control"},[r("label",[o._v("Preço")]),r("input",{directives:[{name:"model",rawName:"v-model",value:o.novoProduto.valor,expression:"novoProduto.valor"}],attrs:{type:"text"},domProps:{value:o.novoProduto.valor},on:{input:function(t){t.target.composing||o.$set(o.novoProduto,"valor",t.target.value)}}})]),r("br"),r("button",{staticClass:"button",attrs:{type:"submit"}},[o._v("Enviar")])])};e._withStripped=!0;var n={render:e,staticRenderFns:[]};t.a=n},LGtD:function(o,t,r){var e=r("Q09X");"string"==typeof e&&(e=[[o.i,e,""]]),e.locals&&(o.exports=e.locals);r("rjj0")("102c7bd8",e,!1,{sourceMap:!1})},Q09X:function(o,t,r){(o.exports=r("FZ+f")(!1)).push([o.i,".input-control[data-v-4c707199]{margin:10px 0}.input-control label[data-v-4c707199]{display:block;font-weight:700;color:#06c4d1}.input-control input[data-v-4c707199]{display:block;width:100%;-webkit-box-sizing:border-box;box-sizing:border-box;font:inherit;border:1px solid #ccc;border-radius:4px;padding:5px}.input-control input[data-v-4c707199]:focus{background-color:#eee;outline:none}.form[data-v-4c707199]{max-width:550px;-webkit-box-sizing:border-box;box-sizing:border-box;margin:30px;margin-top:60px;padding:30px;text-align:justify;-webkit-box-shadow:0 0 24px rgba(0,0,0,.3);box-shadow:0 0 24px rgba(0,0,0,.3);width:100%}.button[data-v-4c707199]{font:inherit;cursor:pointer;border-radius:4px;border:1px solid #06c4d1;background-color:#fff;color:#06c4d1;text-decoration:none;padding:10px 30px}.button[data-v-4c707199]:active,.button[data-v-4c707199]:hover{color:#fff;background-color:#06c4d1}",""])},g11p:function(o,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=r("EPGY"),n=r.n(e);for(var a in e)"default"!==a&&function(o){r.d(t,o,function(){return e[o]})}(a);var i=r("Gjib"),u=!1;var d=function(o){u||r("LGtD")},s=r("VU/8")(n.a,i.a,!1,d,"data-v-4c707199",null);s.options.__file="pages\\admin.vue",t.default=s.exports}});