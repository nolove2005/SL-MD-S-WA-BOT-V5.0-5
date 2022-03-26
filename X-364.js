/*COPYRIGHT (C) 2022 CODED BY NOIZE */

const { Sequelize } = require('sequelize');
const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

/*COPYRIGHT (C) 2022 CODED BY NOIZE */
function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
 PLKAFN: process.env.BAD_WORDS === undefined ? false : process.env.BAD_WORDS,
 PHONE: process.env.NUMBER === undefined ? '+94711502119' : process.env.NUMBER,   
 OA_NAME: process.env.DEPLOYER === undefined ? 'Ｚ Ξ ＮＯＩ' : process.env.DEPLOYER,    
};
