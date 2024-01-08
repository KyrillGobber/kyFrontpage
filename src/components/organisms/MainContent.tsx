import { CareerBlock } from "./CareerBlock";
import { SkillTags } from "./SkillTags";
import { SetupCarousel } from "../molecules/SetupCarousel";
import Portrait from "../../assets/images/portrait.jpg";

export const MainContent = () => {
    return (
        <div className="container grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
                <CareerBlock />
            </div>
            <div className="flex flex-col gap-4">
                <img src={Portrait} alt="Portrait" className="scale-75" />
                <SkillTags />
                <SetupCarousel />
            </div>
        </div>
    );
};

