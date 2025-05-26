import callSadghuru from "../assets/call-sadghuru.svg";
import "./CallSadghuru.css"
import { BlandWebClient } from "bland-client-js-sdk";
import { useRef, useState } from "react";
import { authorizeAgent } from "../SessionTokenGenerate";

export function CallSadghuru({ AGENT_ID }) {

    const [isTalking, setIsTalking] = useState(false);
    const clientRef = useRef(null);

    const handleTalkToSadghuru = async () => {
        if (isTalking) {
            if (clientRef.current) {
                await clientRef.current.stopConversation();
                console.log("Stopped conversation with Sadghuru.");
            }
            setIsTalking(false);
            return
        }

        setIsTalking(true);
        try {
            const token = await authorizeAgent({ AGENT_ID });
            console.log("Session Token:", token);

            const client = new BlandWebClient(AGENT_ID, token);

            clientRef.current = client;

            await client.initConversation({
                sampleRate: 44100
            })

            console.log("Started conversation with Sadghuru.");
        } catch (error) {
            console.error("Error starting conversation:", error);
            setIsTalking(false);
        }
    }

    return (
        <div className="call-sadghuru">
            {isTalking ? (
                <>
                    <div className="voice-wave">
                        <div></div><div></div><div></div><div></div><div></div>
                    </div>
                    <button className="end-call-button" onClick={handleTalkToSadghuru}>
                        End Call
                    </button>
                </>
            ) : (
                <>
                    <img src={callSadghuru} alt="Call Sadghuru" />
                    <button className="start-call-button" onClick={handleTalkToSadghuru}>
                        Call
                    </button>
                </>
            )}
        </div>
    );
}