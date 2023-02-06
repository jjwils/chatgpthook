# chatgpthook

This is a post-commit githook that uses the chatgpt.js file to send the new code from a commit to chatgpt text-davinci-003 model.  With the code change prefixed with "write the implementation for the following test as a function" as the prompt.

The idea is that you undertake a TDD way of working wherby you write a test, commit and then chatgpt suggests an implementation that you can copy pasta and see if it passes the test.
