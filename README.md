# codeChecker

A back-end program in Javascrip that checks whether an input is validly written in code (but spy code)

You get the number of possible code pairs and then the number of translations.

You get a series of possible code pairs put in.

You get a translation of some sets of letters.

This looks like:

[Integer: number of possible code pairs, Integer: number of translations, String: code pair (x however many), String: translated pairs (x however many)]

We assume that all translations are either 2 letters or 3 letters.

Invalid if it does not have the two numbers at the beginning. Invalid if it does not correlate correctly with the number of codes / translations.


INPUT       |      OUTPUT
---------------------------
`[1, 1, "ab", "aa bb"] => ["yes"]` 

`[1, 2, "ab", "aa cc"] => ["no"]`

`[1, 2, "ab", "bb aa"] => ["yes"]`

`[3, 3, "ab", "ac", "ad", "aaa acc", "aaa eee", "aaa bcd"] => ["yes", "no, "yes"]`

`[1, 1, "ab", "cd", "aa bb"] => throws error` (invalid because numbers do not match)

`["ab", "aa bb"]` => throws error (invalid because no numbers included)

## To run this on your machine

1. Fork this repository
2. Clone to local environment
3. `jest` to run the tests
