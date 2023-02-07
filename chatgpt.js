const { Configuration, OpenAIApi } = require("openai");
const configuration = new Configuration({
    organization: "org-wDgrw5IfdhdW6JPw8zb6neUB",
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

async function chatgpt(request) {

    //let axiosResponse = await openai.listModels();
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




