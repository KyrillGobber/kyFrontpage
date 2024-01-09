import { CareerBlock } from "./CareerBlock";
import { SkillTags } from "./SkillTags";
import { SetupCarousel } from "../molecules/SetupCarousel";
import Portrait from "../../assets/images/portrait.jpg";
import { ContactCard } from "./ContactCard";

export const MainContent = () => {
    return (
        <div className="container pt-32 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
                <img src={Portrait} alt="Portrait" className="scale-75 rounded-2xl visible sm:hidden" />
                <CareerBlock />
            </div>
            <div className="flex flex-col justify-start items-start gap-4">
                <img src={Portrait} alt="Portrait" className="scale-75 rounded-2xl collapse sm:visible" />
                <SkillTags />
                <SetupCarousel />
                <ContactCard />
            </div>
        </div>
    );
};

