/* eslint-disable quotes */
'use strict';

const crypto = require('crypto');

const bucket = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_.,<>?;:!@#$%&*()-+[]^=/'"\\\``;
const bucketLength = bucket.length;
let size = 12;

function makePassword(n) {
    let res;

    if (n < 1) {
        return '';
    }

    res = [];

    res.push(
        bucket[(new Uint32Array(crypto.randomBytes(1))[0] % bucketLength + 0)]
    );

    return res.concat(makePassword(--n)).join('');
}

const sillypass = Object.create(null, {
    /**
     * The default size of the generated password.
     */
    size: {
        get: () => size,
        set: v => {
            if (v < 1) {
                throw new Error('sillypass: Negative password sizes are not allowed.');
            }

            size = v;
        }
    },

    /**
     * Either pass in a number to use as the password length or set `sillypass.size`
     * to the preferred default.
     */
    getPassword: {
        value: n => {
            if (n < 1) {
                return '';
            }

            return makePassword(n || size);
        }
    }
});

sillypass.generate = sillypass.getPassword;

module.exports = sillypass;

