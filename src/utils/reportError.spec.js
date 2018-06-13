const chai = require('chai')

const reportError = require('./reportError')

describe('reportError', () => {
    it('should report error', () => {
        const error = new Error('foo')
        const cb = (error) => {
            chai.assert.exists(error)
            chai.assert.exists(error.data)
            const value = error.status
            const expected = 'FAILURE'
            chai.assert.equal(value, expected)
        }
        reportError(cb)(error)
    })
    it('should report succes', () => {
        const customData = {
            foo: 'baz'
        }
        const cb = (error, response) => {
            const value = response
            const expected = {
                status: 'SUCCESS',
                data: customData,
            }
            chai.assert.deepEqual(value, expected)
        }
        reportError(cb)(null, customData)
    })
})