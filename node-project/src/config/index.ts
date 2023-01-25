import merge from 'lodash.merge'

process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const stage = process.env.STAGE || 'local';
let enconfig;
if( stage === 'production' ) {
    enconfig = require('./prodcution').default;

}else if ( stage === 'local' ) {
    enconfig = require('./local').default;
    
}else if ( stage === 'staging' ) {
    enconfig = require('./staging').default;
       
} else {
    enconfig = require('./local').default;
}
export default merge({
    stage,
    env: process.env.NODE_ENV,
    port : 3001,
    secrets: {
        jwt: process.env.JWT_SECRET,
        dbUrl: process.env.DB_URL,
    }
}, enconfig);


