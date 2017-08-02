import *  as validators from '../src/validators';
var assert = require('assert');
var expect = require('expect.js');

describe('Validators', function() {

    describe('required', done => {
        it("should validate without error", done => {
            validators.required('name','Ivan').then(done).catch(done);
        });
        it("should validate with error", done => {
            validators.required('name','').then(done).catch(result => {
                expect(result).to.be.an(Error);
                expect(result.field).to.be('name');
                done();
            });
        });
    });

    describe('email', () => {
        it("should validate without error", done => {
            validators.email('email','ivan@vilanculo.me').then(done).catch(done);
        });

        it("should validate with error", done => {
            validators.email('email','ivan@vilanculo.me.').then(() => {
                done(new Error(/Does not validate with error/))
            }).catch(result => {
                expect(result).to.be.an(Error);
                expect(result.field).to.be('email');
                done();
            });
        });
    });

    describe('min', () => {
        it("should validate without error", done => {
            validators.min('email','Ivan', [3]).then(done).catch(done);
        });

        it("should validate with error", done => {
            validators.min('email','Ivan', [5]).then(() => {
                done(new Error(/Does not validate with error/))
            }).catch(result => {
                expect(result).to.be.an(Error);
                expect(result.field).to.be('email');
                done();
            });
        });
    })

    describe('max', () => {
        it("should validate without error", done => {
            validators.max('email','Ivan', [4]).then(done).catch(done);
        });

        it("should validate with error", done => {
            validators.max('email','Ivan', [3]).then(() => {
                done(new Error(/Does not validate with error/))
            }).catch(result => {
                expect(result).to.be.a(Error);
                expect(result.field).to.be('email');
                done();
            });
        });
    })
});