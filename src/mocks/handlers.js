import {rest} from "msw";

export const handlers = [
    rest.post("http://api.backend.server/savefeedback",
        async (req, res, ctx) => {

            const data = await req.json();

            return res(
                // Respond with a 200 status code
                 ctx.status(200),
                ctx.json(data)
            )
        })]