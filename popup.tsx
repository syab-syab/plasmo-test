import { useState } from "react"
import { sendToBackground, sendToContentScript } from "@plasmohq/messaging"

function IndexPopup() {
  const [mesBG, setMesBG] = useState<number>(0)
  const [selector, setSelector] = useState<string>("#itero")
  const [mesCS, setMesCS] = useState<string>("")

  return (
    <div style={{width: "10rem"}}>
      <p>オプションとかバックグラウンドとかタブとかやる</p>
      <div>
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
        }>BGボタン</button>        
      </div>
      <div>
      <input value={selector} onChange={(e) => setSelector(e.target.value)} />
        <p>contents script: {mesCS}</p>
        <button onClick={
          async () => {
            const csResponse = await sendToContentScript({
              // contents/any-url-query-text.tsx 行きだけど
              // ファイル名とnameを対応させる必要は無いっぽい？
              name: "query-selector-text",
              // inputで入力された内容(selector)を送る
              body: selector
            })
            // selectorで入力されたidのタグがwebページに存在したら内容が返される
            setMesCS(csResponse)
          }
        }
        >
          CSボタン
        </button>
        <p>{mesCS}</p>
      </div>
    </div>
  )
}

export default IndexPopup
