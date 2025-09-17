export default function FooterSection() {
    return (
        <>
            <div className="bg-white p-2 border-bottom-0 border-start-0 border-end-0" style={{ border: "3px solid black" }}>
                <div className="container d-flex justify-content-between align-items-center ">
                    <div className="d-flex">
                        <div className="p text-muted">Check this out at <span className="text-primary cursor-pointer" onClick={() => window.open("https://github.com/bleunar/mi-portfolio", "_blank")}>Github</span></div>
                    </div>

                    <div className="d-flex gap-2">
                        <div className="text-muted">
                            Made by @bleunar
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}