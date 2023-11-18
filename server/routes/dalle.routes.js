import express from 'express';
import * as dotenv from 'dotenv';
import OpenAI from 'openai';

dotenv.config();

const router = express.Router();


const openai = new OpenAI({
  apiKey: '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',
});



router.route('/').get((req, res) => {
  res.status(200).json({ message: "Hello from DALL.E ROUTES" })
})

router.route('/').post(async (req, res) => {
  try {
    // const { prompt } = req.body;
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

    const image = response.data.data[0].b64_json;

    res.status(200).json({ photo: image });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Something went wrong" })
  }
})

export default router;