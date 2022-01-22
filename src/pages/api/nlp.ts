import type { NextApiRequest, NextApiResponse } from 'next'
import axios, {AxiosRequestConfig} from 'axios'

export default async (req:NextApiRequest, res:NextApiResponse) => {
    const {
        body: { text, max_length },
    } = req;

    // create next-auth user via email provider
    const options:AxiosRequestConfig<any> = {
        method: 'POST',
        url: `${process.env.NLPCLOUD_ENDPOINT}/gpu/gpt-j/generation`,
        headers: {
            "Authorization":process.env.NLPCLOUD_TOKEN,
            "Content-Type":"application/json"
        },
        data: {text, max_length},
    };
    
    const generation = await axios(options);

    res.status(200).json({ generation })
}