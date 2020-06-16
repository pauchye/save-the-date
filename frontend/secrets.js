const keys = require('../config/secrets');

console.log('const config = {')
Object.entries(keys).forEach(([k, v]) => {
    console.log(`  ${k}: '${v}',`)
})
console.log('}')
console.log('window.secrets = config;')
console.log('export default config;')
