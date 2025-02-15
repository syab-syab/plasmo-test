import { useState } from "react"
import { sendToBackground } from "@plasmohq/messaging"

function IndexPopup() {
  const [mesBG, setMesBG] = useState<number>(0)

  // const messageSend = () => {
  //   chrome.runtime.sendMessage(
  //     {
  //       action: "test",
  //       data: "test data"
  //     },
  //     function(response) {
  //       alert(response.data)
  //     }
  //   )
  // }

  return (
    <div style={{width: "10rem"}}>
      <p>オプションとかバックグラウンドとかタブとかやる</p>
      <p>background: {mesBG}</p>
      <button onClick={
        async () => {
          const resp = await sendToBackground({
            // nameはbackground/messagesの中にあるtsファイルの名前に対応するっぽい
            // ex) background/messages/test-message.ts の場合は name: "test-message"
            name: "test-message",
            body: {
              input: 123
            }
          })
          // backgroundからres.sendで値が返ってくる
          setMesBG(resp)
        }
      }>ボタン</button>
    </div>
  )
}

export default IndexPopup
