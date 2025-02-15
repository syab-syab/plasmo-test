import type { PlasmoCSConfig } from "plasmo"

import { useMessage } from "@plasmohq/messaging/hook"

export const config: PlasmoCSConfig = {
  all_frames: true
}

const QueryTextAnywhere = () => {
  const { data } = useMessage<string, string>(async (req, res) => {
    // popup.tsxで指定されたidがwebページに存在したら、その中身を返す
    res.send(document.querySelector(req.body).textContent)
  })
  return (
    <div
      style={{
        padding: 8,
        fontWeight: "bold",
        color: "red"
      }}>
      {/* popup.tsxで入力したidを表示する */}
      {data}
    </div>
  )
}

export default QueryTextAnywhere