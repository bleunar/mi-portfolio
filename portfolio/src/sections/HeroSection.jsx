import { Button } from "../components/Button";
import data from '../../data.json'

export default function HeroSection() {
    return (
        <>
            <div className="container mt-3 text-white" style={{ height: "40vh" }}>
                <div className="h-100 d-flex justify-content-end align-items-center flex-column">
                    <div className="text-center text-dark mb-3">
                        <div className="fs-1 fw-bolder text-capitalize">{data.hero.full_name}</div>
                        <div className="h4">{data.hero.tagline}</div>
                    </div>

                    <div className="d-flex fs-5 justify-content-center gap-3 mb-5">
                        <Button type="primary"
                            onClick={() => {
                                location.href = "#achievements"
                            }}
                        >Hire</Button>

                        <Button type="primary"
                            onClick={() => {
                                location.href = "#skill-set"
                            }}
                        >View More</Button>
                    </div>

                </div>
            </div>
        </>
    )
}