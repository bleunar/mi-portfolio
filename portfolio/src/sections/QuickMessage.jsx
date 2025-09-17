import { useState } from "react";
import { Button } from "../components/Button";
import InputField from "../components/InputField";
import TextArea from "../components/TextArea";
import { useNotifications } from "../contexts/NotificationContext";

export default function QuickMessage() {
    const {notifyError, notifyConfirm} = useNotifications()
    const [name, setName] = useState("")
    const [message, setMessage] = useState("")

    const handleSendQuickMessage = async () => {
        try {
            notifyConfirm("Quick Message Sent", `From ${name}: ${message}`)
        } catch (error) {
            notifyError("Failed to send quick message", error)
        }
    }

    return (
        <>
            <div className="container">
                <div className="h4 fw-bold">Leave a Message</div>
                <div className="mb-3">
                    <div className="row">
                        <div className="col-4">
                            <InputField
                                type="text"
                                label="Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                shadowed
                            />
                        </div>

                        <div className="col-8">
                            <TextArea
                                label="Quick Message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => handleSendQuickMessage()}>Send</Button>
                    </div>
                </div>
            </div>
        </>
    )
}