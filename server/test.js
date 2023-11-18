import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: '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',
});

const prompt = 'A photo of a cat sitting on a table.';

openai.createImage({
  prompt,
  size: '1024x1024',
})
  .then((response) => {
    const url = response.data.data[0].url;
    console.log(`Image generated: ${url}`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
