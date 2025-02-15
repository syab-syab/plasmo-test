import type { PlasmoMessaging } from "@plasmohq/messaging"

// popup.tsxからsendToBackgroundで送られてくるデータ型
// 今回は body: { input: 123 } の型
export type RequestBody = {
  input: number
}

export type RequestResponse = number

const handler: PlasmoMessaging.MessageHandler<
  // 第一引数がpopup.tsxからsendToBackgroundで送られてくる型
  RequestBody,
  // 第二引数がpopup.tsxへ送る返り値の型
  RequestResponse
> = async (req, res) => {
  const { input } = req.body

  res.send(input + 1)
}

export default handler