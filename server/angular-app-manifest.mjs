
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://samarreda7.github.io/Trendify/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/Trendify/trendify",
    "route": "/Trendify"
  },
  {
    "renderMode": 2,
    "route": "/Trendify/trendify"
  },
  {
    "renderMode": 2,
    "route": "/Trendify/service"
  },
  {
    "renderMode": 2,
    "route": "/Trendify/products"
  },
  {
    "renderMode": 2,
    "route": "/Trendify/contactus"
  },
  {
    "renderMode": 2,
    "route": "/Trendify/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5809, hash: '2a022e6decf91ccc41bb04fa5b66583616dde9e2771c4fed88a306b81d59a6be', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1411, hash: '08a4c465f16cccf8ef714c007c27fdcfe3126dbe819dce201a9681dd50890552', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contactus/index.html': {size: 30159, hash: 'f6a7beaaf6403c6e8b2fdc96e51e9971ba7c17a95c8f88654b8aa4204f337d9c', text: () => import('./assets-chunks/contactus_index_html.mjs').then(m => m.default)},
    'service/index.html': {size: 27363, hash: '9bb53e77018631609c16837c6aab71890648de5f9036ed548f1965b0adf1c3ff', text: () => import('./assets-chunks/service_index_html.mjs').then(m => m.default)},
    'products/index.html': {size: 25799, hash: 'e672c9d69cfda0c2318761eb42bc356debde6a13b8b855fc8f11bc47d1e57b80', text: () => import('./assets-chunks/products_index_html.mjs').then(m => m.default)},
    'trendify/index.html': {size: 62997, hash: '8d3b16e04368080a1fb037828d21e09848ad0aa4c3b64bd714809de8a210df1d', text: () => import('./assets-chunks/trendify_index_html.mjs').then(m => m.default)},
    'styles-N4U4NH4X.css': {size: 306422, hash: 'vzvACda5DqI', text: () => import('./assets-chunks/styles-N4U4NH4X_css.mjs').then(m => m.default)}
  },
};
