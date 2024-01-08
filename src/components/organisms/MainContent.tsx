import { CareerBlock } from "./CareerBlock";
import { SkillTags } from "./SkillTags";
import { SetupCarousel } from "../molecules/SetupCarousel";
import Portrait from "../../assets/images/portrait.jpg";
import { ContactCard } from "./ContactCard";

export const MainContent = () => {
    return (
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
                <CareerBlock />
            </div>
            <div className="flex flex-col gap-4">
                <img src={Portrait} alt="Portrait" className="scale-75 rounded-2xl" />
                <SkillTags />
                <SetupCarousel />
                <ContactCard />
            </div>
        </div>
    );
};

