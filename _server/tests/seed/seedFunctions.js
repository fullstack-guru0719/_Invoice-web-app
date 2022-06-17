require('dotenv').config();
const { mongoose, connect } = require('../../db/mongoose');
const { Invoice } = require('../../models/Invoice');
const { AutoId } = require('../../models/AutoId');
const gravatar = require('gravatar');
const { userSeedData, autoIdSeedData } = require('./seedData');
const slugify = require('slugify');

const populateData = async () => {
    if (mongoose.connection.readyState === 0) {
        connect();
    }

    console.log('\n[PROCESS:SEED] Deleting Invoice Data');

    await Invoice.deleteMany({}).exec();

    // for (let user of userSeedData) {
    //     const userData = await new User({
    //         social: user.social,
    //         photoURL: user.photoURL,
    //         password: user.password,
    //         role: user.role,
    //         from: user.from,
    //         firstName: user.firstName,
    //         lastName: user.lastName,
    //         phone: user.phone,
    //         email: user.email,
    //         address: user.address,
    //         clients: user.clients,
    //         products: user.products
    //     }).save();
    //     userId = userData._id;
    // }

    console.log('[PROCESS:FIN] Completed Deleting Inovice Data');

    console.log('[PROCESS:SEED] Seeding AutoId');

    await AutoId.deleteMany({}).exec();

    for (let autoIdData of autoIdSeedData) {
        const autoId = await new AutoId({
            field_counts: autoIdData.field_counts,
            field_name: autoIdData.field_name,
            field_value: autoIdData.field_value
        }).save();
    }

    console.log('[PROCESS:FIN] Completed Seeding AutoId Data');

    await mongoose.connection.close();
};

module.exports = { populateData };
