const checkCode = require('./codeChecker.js')

describe('CodeChecker',() => {
  it('returns yes when a simple code is valid',() => {
    expect(checkCode([1, 1, "ab", "aa bb"])).toEqual(["yes"]) 
  })
})