<template>
<div class="app">
  <div class="listaProdutos">
      <app-ficha-produto v-for="(artigo, index) in artigos" 
                        :key="index"
                        :produto="artigo.produto" 
                        :valor="+artigo.valor"
                        v-on:click.native="carregaCarrinho(artigo)"    
                        style="cursor: pointer" />
  </div>
    <div class="listaCarrinhoCompras">
      <br>
      <h2>Carrinho de Compras</h2>
      {{ultimaCompra | date }} - {{ sum() }}€
      <app-ficha-produto v-for="(artigo, index) in carrinhoCompras" 
                        :key="index"
                        :produto="artigo.produto" 
                        :valor="+artigo.valor"
                        v-on:click.native="descarregaCarrinho(artigo)"    
                        style="cursor: pointer" /> 
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import appFichaProduto from '@/components/app-ficha-produto';
export default {
    components:{
        appFichaProduto
    },
    data () {
        return {
            carrinhoCompras:[],
            ultimaCompra: false
        }
    },
    methods:{
        carregaCarrinho(artigo){
            this.carrinhoCompras.unshift({...artigo, dataCompra: new Date()});
            this.ultimaCompra = this.carrinhoCompras[0].dataCompra;
        },
        descarregaCarrinho(index){
            this.carrinhoCompras.splice(index,1)
        },
        sum() {
            if (this.carrinhoCompras.length < 1) {
                return 0
            } else {
                return this.carrinhoCompras.map( (a) => Math.floor(a.valor))
                                           .reduce((a,b)=>{return  a + b })}
        }
    },
    filters: {
        formataData(dados){
            return dados.toString().slice(0,10)
        }
    },
   async asyncData() {
        // ES6 async/await 
        let { data } = await axios.get('https://umartigos.firebaseio.com/.json')
        return {artigos: data}
    }

    
//   asyncData() {
//     // retornar uma Promessa
//     return axios.get('https://umartigos.firebaseio.com/.json')
//       .then((res) => {
//         return { artigos: res.data }
//       })
//   },

//   data() {
//       return {
//           artigos:[
//               {
//                 produto:"Produto XYZ",
//                 valor:25                  
//               },
//               {
//                 produto:"Produto XPTO",
//                 valor:5                  
//               },
//               {
//                 produto:"Produto GTO",
//                 valor:15                  
//               }                            
//           ]
//       }
//   }
}
</script>
<style scoped>
.app{
    margin-top: 4.5rem;
    display:flex;
    flex-direction: row;
    justify-content: space-around;
}
.listaProdutos{
    display:flex;
    align-items: center;
    flex-direction: column;
}
.listaCarrinhoCompras{
    display:flex;
    min-width: 500px;
    align-items: center;
    flex-direction: column;
    border-radius: 5px;
    border: 1px solid #06c4d1;
    background-color: #eee;
}
input {
  display: block;
  width: 100%;
  box-sizing: border-box;
  font: inherit;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 5px;
}
</style>


