import ConfereJs from '../src/Confere'
import validators from '../src/validators'

var assert = require('assert')
var expect = require('expect.js')

describe('Validators', function () {

  describe('required', done => {
    it('should validate without error', done => {
      validators.required('name', 'Ivan').then(done).catch(done)
    })
    it('should validate with error', done => {
      validators.required('name', '').then(done).catch(result => {
        expect(result).to.be.an(Error)
        expect(result.field).to.be('name')
        done()
      })
    })
  })

  describe('boolean', done => {
    it('should validate without error', done => {
      validators.required('remember-me', '1').then(done).catch(done)
    })
    it('should validate with error', done => {
      validators.required('remember-me', 'trua').then(done).catch(result => {
        expect(result).to.be.an(Error)
        done()
      })
    })
  })

  describe('dates', () => {

    describe('date', () => {

      it('should validate without error', done => {
        validators.date('birth_date', '1992-02-13', [], ConfereJs.getDefaults()).then(done).catch(done)
      })

      it('should validate with error', done => {
        validators.date('birth_date', '1992/02/12', [], ConfereJs.getDefaults()).then(() => {
          done(new Error(/Does not validate with error/))
        }).catch(result => {
          expect(result).to.be.an(Error)
          done()
        })
      })
    })

    describe('after', () => {

      it('should validate without error', done => {
        validators.after('birth_date', '1992-02-13', ['1992-02-12'], ConfereJs.getDefaults()).then(done).catch(done)
      })

      it('should validate with error', done => {
        validators.after('birth_date', '1992-02-13', ['1992-02-14'], ConfereJs.getDefaults()).then(() => {
          done(new Error(/Does not validate with error/))
        }).catch(result => {
          expect(result).to.be.an(Error)
          done()
        })
      })
    })

    describe('after_or_equal', () => {

      it('should validate without error', done => {
        validators.after_or_equal('birth_date', '1992-02-13', ['1992-02-13'], ConfereJs.getDefaults())
          .then(validators.after_or_equal('birth_date', '1992-02-13', ['1992-01-13'], ConfereJs.getDefaults()))
          .then(done).catch(done)
      })

      it('should validate with error', done => {
        validators.after_or_equal('birth_date', '1992-02-13', ['1992-02-14'], ConfereJs.getDefaults()).then(() => {
          done(new Error('Did not trow error'))
        }).catch((result) => {
          expect(result).to.be.an(Error)
          done()
        })
      })
    })

    describe('before', () => {

      it('should validate without error', done => {
        validators.before('birth_date', '1992-02-13', ['1992-02-14'], ConfereJs.getDefaults()).then(done).catch(done)
      })

      it('should validate with error', done => {
        validators.before('birth_date', '1992-02-13', ['1992-02-12'], ConfereJs.getDefaults()).then(() => {
          done(new Error(/Does not validate with error/))
        }).catch(result => {
          expect(result).to.be.an(Error)
          done()
        })
      })
    })

    describe('before_or_equal', () => {

      it('should validate without error', done => {
        validators.before_or_equal('birth_date', '1992-02-13', ['1992-02-14'], ConfereJs.getDefaults())
          .then(validators.before_or_equal('birth_date', '1992-02-13', ['1992-02-13'], ConfereJs.getDefaults()))
          .then(done).catch(done)
      })

      it('should validate with error', done => {
        validators.before_or_equal('birth_date', '1992-02-13', ['1992-02-12'], ConfereJs.getDefaults()).then(() => {
          done(new Error(/Does not validate with error/))
        }).catch(result => {
          expect(result).to.be.an(Error)
          done()
        })
      })
    })
  })

  describe('Strings', () => {
    describe('min', () => {
      it('should validate without error', done => {
        validators.min('email', 'Ivan', [3]).then(done).catch(done)
      })

      it('should validate with error', done => {
        validators.min('email', 'Ivan', [5]).then(() => {
          done(new Error(/Does not validate with error/))
        }).catch(result => {
          expect(result).to.be.an(Error)
          expect(result.field).to.be('email')
          done()
        })
      })
    })

    describe('max', () => {
      it('should validate without error', done => {
        validators.max('email', 'Ivan', [4]).then(done).catch(done)
      })

      it('should validate with error', done => {
        validators.max('email', 'Ivan', [3]).then(() => {
          done(new Error(/Does not validate with error/))
        }).catch(result => {
          expect(result).to.be.a(Error)
          expect(result.field).to.be('email')
          done()
        })
      })
    })

    describe('email', () => {
      it('should validate without error', done => {
        validators.email('email', 'ivan@vilanculo.me').then(done).catch(done)
      })

      it('should validate with error', done => {
        validators.email('email', 'ivan@vilanculo.me.').then(() => {
          done(new Error(/Does not validate with error/))
        }).catch(result => {
          expect(result).to.be.an(Error)
          expect(result.field).to.be('email')
          done()
        })
      })
    })

    describe('alpha', () => {
      it('should validate without error', done => {
        validators.alpha('username', 'isneezy')
          .then(validators.alpha('username', 'isnEEZy')).then(done).catch(done)
      })

      it('should validate with error', done => {
        validators.alpha('username', '@isneezy').then(() => {
          done(new Error('Did not throw error'))
        }).catch((result) => {
          expect(result).to.be.an(Error)
          done()
        })
      })
    })

    describe('alpha_dash', () => {
      it('should validate without error', done => {
        validators.alpha_dash('username', 'isne_ezy')
          .then(validators.alpha_dash('username', 'isn_-EEZy')).then(done).catch(done)
      })

      it('should validate with error', done => {
        validators.alpha('username', '@isneezy').then(() => {
          done(new Error('Did not throw error'))
        }).catch((result) => {
          expect(result).to.be.an(Error)
          done()
        })
      })
    })

    describe('alpha_numeric', () => {
      it('should validate without error', done => {
        validators.alpha_dash('username', 'isneezy02')
          .then(validators.alpha_dash('username', 'issEEZy221')).then(done).catch(done)
      })

      it('should validate with error', done => {
        validators.alpha('username', '@isneezy_22').then(() => {
          done(new Error('Did not throw error'))
        }).catch((result) => {
          expect(result).to.be.an(Error)
          done()
        })
      })
    })

    describe('between', () => {
      it('should validate without error', done => {
        validators.between('username', 'isneezy', [4, 16])
          .then(validators.between('username', [1, 1, 1, 1, 1], [4, 16])).then(done).catch(done)
      })

      it('should validate with error', done => {
        validators.between('username', 'isn', [4, 16])
          .then(() => {
            done(new Error('Did not throw error'))
          })
          .catch((result) => {
            expect(result).to.be.an(Error)
            done()
          })
      })
    })

    describe('url', () => {
      it('should validate without error', done => {
        validators.url('website', 'http://ivan.vilanculo.me')
          .then(validators.url('website', 'https://ivan.vilanculo.co.mz')).then(done).catch(done)
      })

      it('should validate with error', done => {
        validators.url('website', 'htt://www.a@_-.com')
          .then(() => {
            done(new Error('Did not throw error'))
          })
          .catch((result) => {
            expect(result).to.be.an(Error)
            done()
          })
      })
    })
  })

  describe('Numbers', () => {
    describe('digits', () => {
      it('should validate without error', done => {
        validators.digits('number', 12345678901234, [14]).then(done).catch(done)
      })

      it('should validate with error', done => {
        validators.digits('number', 1234567890123, [15]).then(() => {
          done(new Error('Did not throw error'))
        }).catch((result) => {
          expect(result).to.be.an(Error)
          done()
        })
      })
    })

    describe('integer', () => {
      it('should validate without error', done => {
        validators.integer('number', '12345678901234').then(done).catch(done)
      })

      it('should validate with error', done => {
        validators.integer('number', '123456a7890123a').then(() => {
          done(new Error('Did not throw error'))
        }).catch((result) => {
          expect(result).to.be.an(Error)
          done()
        })
      })
    })
  })
})