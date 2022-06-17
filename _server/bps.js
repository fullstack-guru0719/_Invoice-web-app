// const sites = [
//     {
//         id: '1',
//         name: 'Site',
//         city: 'Sweden',
//         state: 'Skåne län',
//         countryCode: 'se',
//         address: 'August Palms plats 1, 211 54 Malmö, Sweden',
//         zipCode: '211 54',
//         phone: '+4512345678',
//         default: false,
//         inboundProxyNumber: '+46858097614',
//         geopos: {
//             latitude: 55.5979986,
//             longitude: 13.0074229
//         }
//     },
//     {
//         id: '324',
//         name: 'Site',
//         city: 'Sweden',
//         state: 'Skåne län',
//         countryCode: 'se',
//         address: 'Ormvråksgatan 15, 215 62 Malmö, Sweden',
//         zipCode: '215 62',
//         phone: '+4612345678',
//         default: false,
//         inboundProxyNumber: '+46858097614',
//         geopos: {
//             latitude: 55.566644,
//             longitude: 13.0104304
//         }
//     }
// ];

// const arrayOfTrueDefault = sites.filter(site => site.default);

// const trueOrFalse = arrayOfTrueDefault.length === 0 ? true : false;
// const idArray = arrayOfTrueDefault.map(el => el.id);

// console.log('trueOrFalse is');
// console.log(trueOrFalse);
// console.log('id array is');
// console.log(idArray);
// // const isDefault = Object.keys(sites[0].default).forEach(key => {
// //     if (key === true) return true;
// //     return false;
// // });

// // console.log(isDefault);

const sites = [
    {
        id: '1',
        name: 'Site',
        city: 'Sweden',
        state: 'Skåne län',
        countryCode: 'it',
        address: 'August Palms plats 1, 211 54 Malmö, Sweden',
        zipCode: '211 54',
        phone: '+4512345678',
        default: true,
        inboundProxyNumber: '+46858097614',
        geopos: {
            latitude: 55.5979986,
            longitude: 13.0074229
        },
        status: 'ACTIVE'
    },
    {
        id: '321456985',
        name: 'Italy',
        city: 'Pietrasanta',
        state: 'Toscana',
        countryCode: 'it',
        address: 'Via San Bartolomeo, 37, 55045 Pietrasanta LU, Italy',
        zipCode: '55045',
        phone: '+3912345678',
        default: true,
        inboundProxyNumber: '+46858097614',
        geopos: {
            latitude: 43.9692172,
            longitude: 10.2185956
        },
        status: 'ACTIVE'
    },
    {
        id: '324',
        name: 'Site',
        city: 'Sweden',
        state: 'Skåne län',
        countryCode: 'it',
        address: 'Ormvråksgatan 15, 215 62 Malmö, Sweden',
        zipCode: '215 62',
        phone: '+4612345678',
        default: false,
        inboundProxyNumber: '+46858097614',
        geopos: {
            latitude: 55.566644,
            longitude: 13.0104304
        },
        status: 'ACTIVE'
    },
    {
        id: '5858',
        name: 'Viareggio',
        city: 'Viareggio',
        state: 'Toscana',
        countryCode: 'it',
        address: '55049 Viareggio, Province of Lucca, Italy',
        zipCode: '55049',
        phone: '+3912345678',
        default: false,
        inboundProxyNumber: '+46858097614',
        geopos: {
            latitude: 43.8657267,
            longitude: 10.2513103
        },
        status: 'ACTIVE'
    },
    {
        id: '987456',
        name: 'Forte Dei Marmi',
        city: 'Forte dei Marmi',
        state: 'Toscana',
        countryCode: 'it',
        address: '55042 Forte dei Marmi, Province of Lucca, Italy',
        zipCode: '55042',
        phone: '+4526542598',
        default: false,
        inboundProxyNumber: '+46858097614',
        geopos: {
            latitude: 43.9579617,
            longitude: 10.1672792
        },
        status: 'ACTIVE'
    }
];
const sites1 = [];

const defaultSite = (allSites, locale) => {
    if (!allSites || !allSites.length) return undefined;
    const countryCode = locale.substr(3, 4).toLowerCase();
    // CRITERIA
    //   1. is default, same country, active
    //   2. is default, same country, inactive
    //   3. is default, any country, active
    //   4. is default, any country, inactive
    //   5. sites(active).length === 1
    // //   6. undefined
    // const c1 = allSites.filter(
    //     site => site.default && site.countryCode === countryCode && site.active
    // );
    // if (c1[0]) return c1[0].id;

    // const c2 = allSites.filter(
    //     site => site.default && site.countryCode === countryCode && !site.active
    // );
    // if (c2[0]) return c2[0].id;

    const c3 = allSites.filter(site => site.default && site.status === 'ACTIVE');
    console.log('c3', c3);
    if (c3[0]) return c3[0].id;

    const c4 = allSites.filter(site => site.default && !site.active);
    console.log('c4', c4);
    if (c4[0]) return c4[0].id;

    const c5 = allSites.filter(site => site.active);
    console.log('c5', c5);
    if (c5.length === 1) return c5[0].id;
    return null;
};

console.log(defaultSite(sites1, 'en_IT'));