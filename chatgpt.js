const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-wDgrw5IfdhdW6JPw8zb6neUB",
    apiKey: "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",
});
const openai = new OpenAIApi(configuration);



async function chatgpt(request) {

    let axiosResponse = await openai.listModels();
    //console.log(axiosResponse.data);




    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: "write the implementation for the following test as a function - \n" +
            process.argv[2],
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
    });
    console.log(completion.data.choices[0].text);

}

chatgpt()




const axios = require('axios');


//
// async function sendRequest(addedLines) {
//     const response = await axios.post('https://api.openai.com/v1/engines/davinci/jobs', {
//         prompt: `Write the implementation for the following test\n${addedLines}`,
//         max_tokens: 2048,
//         model: "text-davinci-002"
//     });
//
//     return response.data.choices[0].text;
// }
//
// module.exports = sendRequest;

//require('make-runnable');

