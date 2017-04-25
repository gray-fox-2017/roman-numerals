const assert = require('assert')

const romans = require('./roman_numerals.js')

describe('Convert To Roman Old Version', () => {
  it('should returns I if input is 1', () => {
    assert.equal(romans.to_roman_old(1), 'I')
  })
  it('should returns IIII if input is 4', () => {
    assert.equal(romans.to_roman_old(4), 'IIII')
  })
  it('should returns V if input is 5', () => {
    assert.equal(romans.to_roman_old(5), 'V')
  })
  it('should returns VIIII if input is 9', () => {
    assert.equal(romans.to_roman_old(9), 'VIIII')
  })
  it('should returns XIII if input is 13', () => {
    assert.equal(romans.to_roman_old(13), 'XIII')
  })
  it('should returns LIIII if input is 54', () => {
    assert.equal(romans.to_roman_old(54), 'LIIII')
  })
  it('should returns LV if input is 55', () => {
    assert.equal(romans.to_roman_old(55), 'LV')
  })
  it('should returns MCDLIII if input is 1453', () => {
    assert.equal(romans.to_roman_old(1453), 'MCDLIII')
  })
  it('should returns MDCXLVI if input is 1646', () => {
    assert.equal(romans.to_roman_old(1646), 'MDCXLVI')
  })
})


describe('Roman Numerals new', () => {
  it('4 becomes IV', () => {
    assert.equal(romans.to_roman(4), 'IV')
  })
  it('9 becomes IX', () => {
    assert.equal(romans.to_roman(9), 'IX')
  })
  it('13 becomes XIII', () => {
    assert.equal(romans.to_roman(13), 'XIII')
  })
  it('1453 becomes MCDLIII', () => {
    assert.equal(romans.to_roman(1453), 'MCDLIII')
  })
  it('1646 becomes MDCXLVI', () => {
    assert.equal(romans.to_roman(1646), 'MDCXLVI')
  })
})
