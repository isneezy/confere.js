import expect from 'expect.js';
import Confere from '../src/Confere';
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
    })

});