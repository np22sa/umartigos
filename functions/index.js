const functions = require('firebase-functions');
const { Nuxt } = require('nuxt');
const express = require('express');

const app = express();

const config = {
    dev: false,
    buildDir: 'nuxt',
    build: {
        publicPath: '/'
    }
};

const nuxt = new Nuxt(config);

// function handleRequest(req, res){
//     res.set('Cache-Control', 'public, max-age=600, s-maxage=1200');
//     nuxt.renderRoute('/')
//     .then(result=> {
//         res.send(result.html);
//     })
//     .catch(e=>{
//         res.send(e);
//     });
// }

// app.get('*', handleRequest);
function handleRequest(req, res) {
    res.set('Cache-Control', 'public, max-age=150, s-maxage=150');
    return new Promise((resolve, reject) => {
      nuxt.render(req, res, promise => {
        promise.then(resolve).catch(reject)
      })
    });
  }
  
  app.use(handleRequest);
exports.ssrapp = functions.https.onRequest(app);