const checkCode = require('./codeChecker.js')

describe('CodeChecker',() => {
  it('returns yes when a simple code is valid',() => {
    expect(checkCode([1, 1, "ab", "aa bb"])).toEqual(["yes"]) 
  })
  it ('returns no when a simple code is invalid',() => {
    expect(checkCode([1, 1, "ab", "ac ac"])).toEqual(["no"]) 
  })
})

