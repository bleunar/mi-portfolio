import SkillSetSection from "../sections/SkillSetSection";
import HeroSection from "../sections/HeroSection";
import QuickMessage from "../sections/QuickMessage";
import EducationSection from "../sections/EducationSection";
import FooterSection from "../sections/Footer";

export default function Home() {
    return (
        <>
            <div className="container-fluid p-0">
                <HeroSection />
                <SkillSetSection />
                <EducationSection />
                <QuickMessage />
                <div className="container my-5">
                <div className="p-3 shadowed bg-white">
                    <div className="p text-center fw-bold">More Content soon...</div>
                    
                    <div className="p text-center text-muted"> Articles, Interactivity (Likes, Comments, etc.)</div>
                </div>
                </div>
            </div>

            <FooterSection />


        </>
    )
}