const supertest = require('supertest')
const expect = require('chai').expect
const sinon = require('sinon')

const server = require('../../src/server')

const request = supertest(server)

describe('Swagger enpoind exists', function () {
  it('responds with 304', async function () {
    const response = await request.get('/v1/api-docs/')
    const responseSize = Object.keys(response).length

    expect(response.status).to.equal(200)
    expect(responseSize).to.be.at.least(5)
  })
})
