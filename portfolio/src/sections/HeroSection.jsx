import { Button } from "../components/Button";
import data from '../../data.json'

import Person from "/assets/hero/persona.png"

export default function HeroSection() {
    return (
        <>
            <div className="container my-5">

                <div className="row row-cols-1 row-cols-lg-2 shadowed bg-light">
                    <div className="col my-5">
                        <div className="h-100 d-flex justify-content-center align-items-center flex-column">
                            <div className="text-center text-dark mb-3">
                                <div className="h1 fw-bolder text-capitalize">{data.hero.full_name}</div>
                                <div className=" shadowed p-1 bg-light">{data.hero.tagline}</div>
                            </div>

                            <div className="d-flex fs-5 justify-content-center gap-3">
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
                    <div className="col d-none d-lg-block">
                        <img src={Person} style={{ height: "40vh" }} class="w-100 object-fit-cover img-fluid" alt="hero image"></img>
                    </div>
                </div>
            </div>
        </>
    )
}