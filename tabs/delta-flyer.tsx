import { useState } from "react"
import { sendToBackground } from "@plasmohq/messaging"

// chrome-extension://<extension-id>/tabs/delta-flyer.html
// chrome-extension://pbeodeecijhhfgclelapdngoggkkcgbc/tabs/delta-flyer.html

function DeltaFlyerPage() {
  const [data, setData] = useState<string>("")
  const [messageData, setMessageData] = useState<string>("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: 16
      }}>

      <input onChange={(e) => setData(e.target.value)} value={data} />
      <hr />
      <button onClick={
        async () => {
          const resp = await sendToBackground({
            name: "test-messages-string",
            body: {
              input: data
            }
          })
          setMessageData(resp)
        }
      }
      >Send to background</button>
      <p>{messageData}</p>
    </div>
  )
}
 
export default DeltaFlyerPage