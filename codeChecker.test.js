const checkCode = require('./codeChecker.js')

describe('CodeChecker for a single translation',() => {
  it('returns yes when a simple code is valid',() => {
    expect(checkCode([1, 1, "ab", "aa bb"])).toEqual(["yes"]) 
  })
  it('returns yes when a different simple code is valid',() => {
    expect(checkCode([1, 1, "ac", "aa cc"])).toEqual(["yes"]) 
  })
  it ('returns no when a simple code is invalid',() => {
    expect(checkCode([1, 1, "ab", "ac ac"])).toEqual(["no"]) 
  })
  it ('returns no when a different code is invalid, using letters not contained in the pair',() => {
    expect(checkCode([1, 1, "ab", "cc dd"])).toEqual(["no"])
  })
  it ('returns no when a different code is invalid, as the letters are unchanged',() => {
    expect(checkCode([1, 1, "ac", "ac ac"])).toEqual(["no"])
  })
  it ('returns no when a different code is invalid, as one of the letters are unchanged',() => {
    expect(checkCode([1, 1, "ac", "ac cc"])).toEqual(["no"])
  })
})

describe('CodeChecker for two translations',() => {
  it('returns yes yes when two translations are valid',() => {
    expect(checkCode([1, 2, "ab", "aa bb", "aa bb"])).toEqual(["yes", "yes"]) 
  })
  it('returns no no when two translations are unchanged',() => {
    expect(checkCode([1, 2, "ab", "ab ab", "ab ab"])).toEqual(["no", "no"]) 
  })
  it('returns no no when two translations are invalid',() => {
    expect(checkCode([1, 2, "ab", "ab cf", "ab dg"])).toEqual(["no", "no"]) 
  })
})