# chatgpthook

This is a post-commit githook that uses the chatgpt.js file to send the new code from a commit to chatgpt text-davinci-003 model.  With the code change prefixed with "write the implementation for the following test as a function" as the prompt.

The idea is that you undertake a TDD way of working wherby you write a test, commit and then chatgpt suggests an implementation that you can copy pasta and see if it passes the test.

Getting started
1. You will need node installed on your machine.
2. Copy the post-commit file to your git hooks directory eg .git/hooks/
3. Put the chatgpt.js file in the root of your project directory.
4. You will need obtain and store an API key as an enviroment variable - more info here https://help.openai.com/en/articles/5112595-best-practices-for-api-key-safety
