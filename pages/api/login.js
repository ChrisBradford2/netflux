import { NextApiRequest, NextApiResponse } from "next";
import jwt from "jsonwebtoken";

const KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IkpvaG4gRG9lIiwicGFzc3dvcmQiOjEyMzR9.lcLSz_89u2lUiDV75JyEANd1oPkiO_nSX0cGIlRpskY'

export default function apiLogin (req = NextApiRequest, res = NextApiResponse) {
    if(!req.body){
        res.statusCode = 404;
        res.end('Error')
        return
    }

    const { username , password } = req.body

    res.json({
        token: jwt.sing(
            {
                username,
                admin: username === 'john.doe@example.com' && password === '1234'
            },
            KEY
        )
    })
}