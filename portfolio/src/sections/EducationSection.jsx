import { Button } from "../components/Button";
import data from "../../data.json"

export default function EducationSection() {
    return (
        <div className="container mb-5" id="education">
            <div className="h4 fw-bolder">Education</div>
            <div className="mb-3">
                <div className="row justify-content-center row-cols-1 row-cols-lg-2 mb-3 m-0">
                    {
                        data.education.map((item, key) => (
                            <div className="col p-2" key={key}>
                                <EducationCard
                                    file={item.file}
                                    title={item.title}
                                    subtitle={item.subtitle}
                                />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}


function EducationCard({ file, title, subtitle = "" }) {

    return (
        <div class="card shadowed h-100">
            <div class="card-body">
                <div className="d-flex justify-content-center my-4">
                    <img src={`/assets/gif/${file}`} style={{ height: "10vh" }} className="img-mono img-fluid" alt={file} srcset="" />
                </div>
                <h4 class="card-title text-nowrap fw-bold text-center text-capitalize">{title}</h4>
                {
                    subtitle && (
                        <h6 class="card-subtitle mb-2 text-body-secondary text-center text-capitalize">{subtitle}</h6>
                    )
                }
            </div>
        </div>
    )
}