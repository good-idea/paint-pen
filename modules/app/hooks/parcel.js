const fs = require('fs')
const join = require('path').join

module.exports = async (ctx) => {
  console.log('==> Running Hook: cordova.js')
  console.log(join(ctx.opts.projectRoot, 'www', 'index.html'))
  const index = join(ctx.opts.projectRoot, 'www', 'index.html')
  let html = await fs.readFileSync(index, 'utf8')
  html = html.replace(
    '<i hidden>cordova.js</i>',
    '<script src="cordova.js"></script>',
  )
  fs.writeFileSync(index, html)
}
