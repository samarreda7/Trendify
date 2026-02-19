
export default {
  basePath: 'https://samarreda7.github.io/Trendify',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
