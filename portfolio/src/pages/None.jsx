import { Button } from "../components/Button";

export default function NonePage() {
    return (
        <>
            <div className="d-flex justify-content-center align-items-center" style={{ height: "92vh" }}>
                <div className="p-3 shadowed bg-white text-start">
                    <div className="h4 fw-bolder">Uh oh...</div>
                    <div className="p mb-4">The page you are looking for is currently unavailable</div>

                    <div className="d-flex justify-content-center">
                        <Button type="primary" onClick={() => location.href = "/"}>
                            Return Home
                        </Button>
                    </div>
                </div>
            </div>


        </>
    )
}