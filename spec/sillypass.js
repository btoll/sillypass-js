'use strict';

describe('sillypass', () => {
    let sillypass = require('../index');

    function isString(str) {
        return Object.prototype.toString.call(str) === '[object String]';
    }

    describe('.size', () => {
        it('should have a default passphrase size of twelve', () => {
            expect(sillypass.size).toBe(12);
        });

        it('should allow the passphrase size to be changed', () => {
            sillypass.size = 8;
            expect(sillypass.size).toBe(8);
        });

        it('should not allow a negative size passphrase', () => {
            expect(() => {
                sillypass.size = -5;
            }).toThrow();
        });
    });

    describe('#generate', () => {
        it('should be an alias of #getPassword', () => {
            expect(sillypass.generate).toBe(sillypass.getPassword);
        });
    });

    describe('#getPassword', () => {
        it('should return a string', () => {
            expect(isString(sillypass.getPassword())).toBe(true);
        });

        it('should return an empty passphrase when passed a size argument of zero', () => {
            expect(sillypass.getPassword(0)).toBe('');
        });

        it('should return an empty passphrase when passed a negative size argument', () => {
            expect(sillypass.getPassword(-5)).toBe('');
        });

        it('should return a passphrase equal to the current size value when not passed an argument', () => {
            expect(sillypass.getPassword().length).toBe(sillypass.size);
        });
    });
});

