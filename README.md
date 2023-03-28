#code-checker

Building a program that checks whether something is validly written in code (not software code, but spy code)

You get the number of possible code pairs and then the number of translations.

You get a series of possible code pairs put in.

You get a translation of some sets of letters.

We assume that all translations are either 2 letters or 3 letters.

Invalid if it does not have the two numbers at the beginning. Invalid if it does not correlate correctly with the number of codes / translations.


INPUT       |      OUTPUT
---------------------------
[1, 1, "ab", "aa bb"] => ["yes"]
[1, 2, "ab", "aa cc"] => ["no"]
[1, 2, "ab", "bb aa"] => ["yes"]
[3, 3, "ab", "ac", "ad", "aaa acc", "aaa eee", "aaa bcd"] => ["yes", "no, "yes"]
[1, 1, "ab", "cd", "aa bb"] => throws error (invalid because numbers do not match)
["ab", "aa bb"] => throws error
