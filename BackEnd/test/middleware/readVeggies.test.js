const expect = require('chai').expect
const sinon = require('sinon')

const veggiesReader = require('../../src/middleware/readVeggies')
const data = require('../../src/datalayer/readData.js')

describe('Middleware ReadVeggies', function () {
  var readVeggiesDataStub
  before(function () {
    readVeggiesDataStub = sinon.stub(data, 'readData')
      .returns({ veggies: 'onion' })
  })

  after(function () {
    readVeggiesDataStub.restore()
  })

  it('responds with data: check the response', async function () {
    const response = veggiesReader.readVeggies()
    expect(readVeggiesDataStub.calledOnce).to.be.true
    expect(response.veggies).to.equal('onion')
  })
})
