import { useState } from "react"
import { sendToBackground } from "@plasmohq/messaging"

function OptionsIndex() {
  const [dataA, setDataA] = useState<string>("")
  const [messageDataA, setMessageDataA] = useState<string>("")

  const [dataB, setDataB] = useState<string>("")
  const [messageDataB, setMessageDataB] = useState<string>("")

  return (
    <>
      <div>
        <input onChange={(e) => setDataA(e.target.value)} value={dataA} />
        <button onClick={
          async () => {
            const resp = await sendToBackground({
              name: "test-messages-string",
              body: {
                input: dataA
              }
            })
            setMessageDataA(resp)
          }
        }
        >Send to background</button>
        <p>{messageDataA}</p>
      </div>
      <div>
        <input onChange={(e) => setDataB(e.target.value)} value={dataB} />
        <button onClick={
          async () => {
            const resp = await sendToBackground({
              name: "test-messages-string",
              body: {
                input: dataB
              }
            })
            setMessageDataB(resp)
          }
        }
        >Send to background</button>
        <p>{messageDataB}</p>
      </div>
    </>

  )
}

export default OptionsIndex