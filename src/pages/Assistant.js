import { useState } from "react";

function Assistant() {

  const [question,setQuestion] = useState("");
  const [messages,setMessages] = useState([
    {text:"Hi! I'm your LearnLoop AI assistant. Ask me about courses, placements or meetings.", sender:"bot"}
  ]);

  const [typing,setTyping] = useState(false);

  const handleAsk = () => {

    if(question.trim()==="") return;

    const userMessage = {text:question, sender:"user"};

    setMessages(prev => [...prev, userMessage]);

    setTyping(true);

    setTimeout(()=>{

      let reply="";

      if(question.toLowerCase().includes("course")){
        reply="You can explore Web Development, Python and React courses in the Courses section.";
      }

      else if(question.toLowerCase().includes("placement")){
        reply="Practice mock tests for companies like Google, Amazon and Microsoft in the Placements page.";
      }

      else if(question.toLowerCase().includes("meeting")){
        reply="Check the Meetings page to join upcoming mentor sessions.";
      }

      else{
        reply="I'm here to help you learn and grow with LearnLoop!";
      }

      const botMessage={text:reply,sender:"bot"};

      setMessages(prev => [...prev, botMessage]);

      setTyping(false);

    },1200);

    setQuestion("");
  }

  return(

    <div style={{display:"flex",justifyContent:"center",marginTop:"40px"}}>

      <div style={{
        width:"420px",
        background:"rgba(0,0,0,0.45)",
        padding:"20px",
        borderRadius:"20px",
        backdropFilter:"blur(12px)",
        boxShadow:"0 10px 30px rgba(0,0,0,0.5)"
      }}>

        <h2 style={{textAlign:"center"}}>🤖 LearnLoop AI</h2>

        <div style={{
          height:"320px",
          overflowY:"auto",
          marginTop:"20px",
          marginBottom:"20px"
        }}>

          {messages.map((msg,index)=>(
            <div key={index}
            style={{
              display:"flex",
              alignItems:"flex-start",
              justifyContent: msg.sender==="user" ? "flex-end":"flex-start",
              marginBottom:"12px"
            }}>

              {msg.sender==="bot" && (
                <div style={{fontSize:"22px",marginRight:"6px"}}>🤖</div>
              )}

              <div style={{
                background: msg.sender==="user"
                ? "linear-gradient(45deg,#ff0055,#8e2de2)"
                : "#333",
                padding:"10px 14px",
                borderRadius:"16px",
                maxWidth:"70%",
                fontSize:"14px"
              }}>
                {msg.text}
              </div>

            </div>
          ))}

          {typing && (
            <div style={{display:"flex",alignItems:"center"}}>
              <div style={{fontSize:"22px",marginRight:"6px"}}>🤖</div>
              <div style={{
                background:"#333",
                padding:"8px 12px",
                borderRadius:"15px",
                fontSize:"14px"
              }}>
                AI is typing...
              </div>
            </div>
          )}

        </div>

        <div style={{display:"flex",gap:"10px"}}>

          <input
          type="text"
          placeholder="Ask something..."
          value={question}
          onChange={(e)=>setQuestion(e.target.value)}
          style={{
            flex:1,
            padding:"10px",
            borderRadius:"20px",
            border:"none",
            outline:"none"
          }}
          />

          <button
          onClick={handleAsk}
          style={{
            padding:"10px 18px",
            borderRadius:"20px",
            border:"none",
            background:"linear-gradient(45deg,#ff0055,#8e2de2)",
            color:"white",
            cursor:"pointer"
          }}
          >
            Send
          </button>

        </div>

      </div>

    </div>

  )
}

export default Assistant;