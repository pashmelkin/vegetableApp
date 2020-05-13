const supertest = require('supertest')
const expect = require('chai').expect
const sinon = require('sinon')

const server = require('../../src/server')
const veggiesReader = require('../../src/middleware/readVeggies')

const request = supertest(server)

describe('GET /v1/veggies is routed correctly from the server', function () {
  var readVeggiesStub
  before(function () {
    readVeggiesStub = sinon.stub(veggiesReader, 'readVeggies')
      .returns({ veggies: 'tomato' })
  })

  after(function () {
    readVeggiesStub.restore()
  })

  it('responds with json: async version', async function () {
    const response = await request.get('/v1/veggies')

    expect(response.status).to.equal(200)
    expect(readVeggiesStub.calledOnce).to.be.true
  })
  it('responds with json: callback version')
})
