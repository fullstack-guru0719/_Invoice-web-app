module.exports = {
    userSeedData: [
        {
            social: {
                id: null,
                image: null,
                email: null
            },
            photoURL:
                '//www.gravatar.com/avatar/cda25d43aadf66459858f9ad60a879cf?s=220&r=pg&d=identicon',
            password: '12345',
            role: 'admin',
            from: 'custom-db',
            firstName: 'Super',
            lastName: 'Admin',
            phone: '+1-202-555-0104',
            email: 'admin@email.com',
            address: "President's Inaugural speech. 123 Main Street, New York, NY 10030",
            clients: [],
            products: []
        }
    ],
    autoIdSeedData: [{ field_counts: 0, field_name: 'invoice', field_value: 1000 }]
};
