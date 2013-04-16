var vcard = {
    name: {
        firstName: 'Asta',
        lastName: 'Mañana'
    },
    emails: [
        'asta@obob.com',
        'asta.m@bleh.net',
        'manana.asta@blokarak.tk'
    ],
    address: {
        street: 'Gloria St.',
        city: 'Makati City',
        country: 'Philippines',
        postalCode: '1210'
    },
    phones: [
        {
            'area-code': '02',
            'line-number': '673-2012'
        },
        {
            'area-code': '046',
            'line-number': '752-4112'
        }
    ]
};

document.getElementById("first-name").innerHTML = vcard.name.firstName;
document.getElementById("last-name").innerHTML = vcard.name.lastName;

document.getElementById("email-1").innerHTML = vcard.emails[0];
document.getElementById("email-2").innerHTML = vcard.emails[1];
document.getElementById("email-3").innerHTML = vcard.emails[2];

document.getElementById("street").innerHTML = vcard.address.street;
document.getElementById("city").innerHTML = vcard.address.city;
document.getElementById("country").innerHTML = vcard.address.country;
document.getElementById("postal-code").innerHTML = vcard.address.postalCode;

document.getElementById("phone-1-area-code").innerHTML = vcard.phones[0]["area-code"];
document.getElementById("phone-1-line-number").innerHTML = vcard.phones[0]["line-number"];
document.getElementById("phone-2-area-code").innerHTML = vcard.phones[1]["area-code"];
document.getElementById("phone-2-line-number").innerHTML = vcard.phones[1]["line-number"];