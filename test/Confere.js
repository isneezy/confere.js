import expect from 'expect.js';
import Confere from '../src/Confere';

require('jsdom-global')();

describe('Confere.js', () => {

    describe("validate", () => {

        var config = {
            rules: {
                "name": "required|min:3|max:254",
                "surname": "required|min:3|max:254",
                "email": "required|email"
            }
        };

        it("should validate without errors", done => {

            var confere = new Confere(config);
            confere.validate({
                name: "Ivan",
                surname: "Vilanculo",
                email: "vilanculoivan@gmail.com"
            }).then(done).catch(done);
        });

        it("should validate with errors", done => {

            var confere = new Confere(config);
            confere.validate({
                name: "Iv",
                surname: "Vilanculo",
                email: "vilanculoivangmail.com"
            }).then(() =>{
                done(new Error("Validation does not throw error"));
            }).catch(result => {
                expect(result).to.be.an(Error);
                done();
            });
        })
    });

    describe("getDefaults", () => {
        it("should reurn key pair object as default options/config", done => {
            var options = Confere.getDefaults();
            expect(options).to.not.be.empty();
            expect(options).to.have.keys(['realTime', 'dateFormat', 'validators', 'rules']);
            done();
        })
    })

    describe('isEmpty', () => {
      it('sould return true', done => {
        let undef
        expect(Confere.isEmpty('')).to.be(true)
        expect(Confere.isEmpty(null)).to.be(true)
        expect(Confere.isEmpty(undef)).to.be(true)
        expect(Confere.isEmpty([])).to.be(true)
        expect(Confere.isEmpty({})).to.be(true)
        done()
      })

      it('should return true', done => {
        expect(Confere.isEmpty('something')).to.be(false)
        expect(Confere.isEmpty(Confere)).to.be(false)
        expect(Confere.isEmpty([1,2,3])).to.be(false)
        done()
      })
    })

});