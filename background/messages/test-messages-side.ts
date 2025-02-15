import type { PlasmoMessaging } from "@plasmohq/messaging";

export type RequestBody = {
  input: string
}

export type RequestResponse = string

const handler: PlasmoMessaging.MessageHandler<
  RequestBody,
  RequestResponse
> = async (req, res) => {
  const { input } = req.body
  res.send("From test-message-side.ts: " + input)
}

export default handler