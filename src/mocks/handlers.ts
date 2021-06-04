import { rest } from 'msw'
import { data } from '../data'

export const handlers = [
  rest.get('/.netlify/functions/hello', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(data)
    )
  })
]
