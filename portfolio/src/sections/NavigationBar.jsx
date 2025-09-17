import { Button } from "../components/Button";
import data from "../../data.json"
import { useNotifications } from "../contexts/NotificationContext";
import copy from "copy-to-clipboard";

export default function NavigationBar() {
    const {notifyInform} = useNotifications()

    const handleCopyToClipboard = (text) => {
        copy(text)
        notifyInform("Copied to Clipboard", text)
    }

    return (
        <>
            <div className="bg-white p-3 fixed-top border-top-0 border-start-0 border-end-0" style={{ border: "3px solid black" }}>
                <div className="container d-flex justify-content-between align-items-center ">
                    <Button onClick={() => location.href = "/"}>
                        <i class="bi bi-house-fill"></i>
                    </Button>

                    <div className="d-flex justify-content-end gap-2">
                        {
                            data && data.contacts.map((item, key) => (
                                <Button key={key} onClick={() => handleCopyToClipboard(item.value)}>
                                    <i class={`bi bi-${item.icon}-fill`}></i>
                                </Button>
                            ))
                        }

                        <div className="border border-end border-black ms-1 me-2"></div>


                        {
                            data && data.socials.map((item, key) => (
                                <Button key={key} onClick={() => window.open(item.value, "_blank")}>
                                    <i class={`bi bi-${item.icon}`}></i>
                                </Button>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="w-100" style={{ height: "7vh" }}></div>

        </>
    )
}