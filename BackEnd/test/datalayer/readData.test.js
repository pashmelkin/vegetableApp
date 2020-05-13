var fs = require('fs')

const expect = require('chai').expect
const sinon = require('sinon')

const data = require('../../src/datalayer/readData.js')

describe('datalayer Read Veggies Data', function () {
  var veggiesDataStub
  before(function () {
    veggiesDataStub = sinon.stub(fs, 'readFileSync')
      .returns({ veggies: 'peper' })
  })

  after(function () {
    veggiesDataStub.restore()
  })

  it('responds with data: check the response', async function () {
    const existFileStub = sinon.stub(fs, 'existsSync')
      .returns(true)

    const response = data.readData()

    expect(veggiesDataStub.calledOnce).to.be.true
    expect(response.veggies).to.equal('peper')

    fs.existsSync.restore()
  })

  it('responds with file not found', async function () {
    const existFileStub = sinon.stub(fs, 'existsSync')
      .returns(false)

    const response = data.readData()

    expect(response.toLowerCase().includes('file not found')).to.be.true

    existFileStub.restore()
  })

  it('spies on the existsSync function', async function () {
    var existsSyncSpy = sinon.spy(fs, 'existsSync')

    const response = data.readData()

    sinon.assert.calledOnce(existsSyncSpy)
    existsSyncSpy.restore()
  })
})
