const bcrypt = require('bcrypt');

class CommonFunction {

    constructor () {

    }

   async encryptPassword  (password) {
       await bcrypt.genSalt(10, async function (err, salt) {
           await bcrypt.hash(password, salt, ).then((err, hash) => {
                return hash;
           })
        });

        
    }
}

module.exports = CommonFunction

