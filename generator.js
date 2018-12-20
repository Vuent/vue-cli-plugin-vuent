module.exports = (api, options, rootOptions) => {
  api.extendPackage({
    dependencies: {
      'vuent': '^0.4.0'
    }
  })

  api.injectImports(api.entryFile, `import Vuent from 'vuent'`)
}
