import qs from 'qs';
import cookie from 'cookie';
import axios from 'axios';

export default async (req, res) => {
    const {
        body: { email, slug },
    } = req

    // create next-auth user via email provider
    const options = {
        method: 'GET',
        url: `${process.env.FRONT_URL}/api/auth/csrf`
    };

    const GetCSRFResponse = await axios(options);

    const params = {
        email: String(email),
        callbackUrl: `${process.env.FRONT_URL}/`,  // http://localhost:3000/
        csrfToken: String(GetCSRFResponse.data.csrfToken), // this comes from the upper example
        json: 'true'
    };

    const data = qs.stringify(params);

    // pase the cookie before sending
    const parsedCookie = cookie.parse(GetCSRFResponse.headers['set-cookie'].join('; '));
    delete parsedCookie.Path;
    delete parsedCookie.SameSite;

    const Cookie = Object.entries(parsedCookie)
        .map(([key, val]) => cookie.serialize(key, val))
        .join('; ');

    const signinOptions = {
        method: 'POST',
        url: `${process.env.FRONT_URL}/api/auth/signin/email`, // http://locahost:300 endpoint that creates the new user
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            Cookie
        },
        data
    };

    const { status } = await axios(signinOptions); // then get the response, in my case I just need to know the status

    res.status(200).json({ email, slug, status })
}