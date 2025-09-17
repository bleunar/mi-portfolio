import { Button } from "../components/Button";
import data from "../../data.json"

export default function SkillSetSection() {
    return (
        <div className="container mb-5" id="skill-set">
            <div className="h4 fw-bolder">Skill Sets</div>
            <div className="mb-3">
                <div className="row justify-content-center row-cols-1 row-cols-md-3 row-cols-lg-4 row-cols-xxl-5 mb-3 m-0">
                    {
                        data.skill_set.map((item, key) => (
                            <div className="col p-2" key={key}>
                                <SkillSetCard
                                    file={item.gif}
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


function SkillSetCard ({file, title, subtitle = ""}) {

    return (
        <div class="card shadowed h-100">
            <div class="card-body">
                <div className="d-flex justify-content-center my-4">
                    <img src={`/assets/gif/${file}`} style={{height:"10vh"}} className="img-mono img-fluid" alt={file} srcset="" />
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