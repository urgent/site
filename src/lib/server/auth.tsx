import { getSession } from 'next-auth/react'

export async function getTokenFromCtx(req) {
    return await getSession({ req })
}