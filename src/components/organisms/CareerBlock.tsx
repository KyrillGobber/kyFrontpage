import { useTranslation } from "react-i18next";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Experience, Experiences } from "@/lib/constants";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion";

const getCareerItems = () => {
    return Experiences.map((experience, index) => {
        return <CareerItem key={index} experience={experience} />;
    });
};

export const CareerBlock = () => {
    const { t } = useTranslation();
    return (
        <Card>
            <CardHeader>
                <CardTitle>{t("career.title")}</CardTitle>
                <CardDescription>{t("career.desc")}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col">
                {getCareerItems()}
            </CardContent>
        </Card>
    );
};

type CareerItemProps = {
    experience: Experience;
};

const TaskItems = ({ tasks }: { tasks: string[] }) => {
    const { t } = useTranslation();
    return tasks.map((task, index) => {
        return <p key={index}>- {t(task)}</p>;
    });
};

const CareerItem = ({ experience }: CareerItemProps) => {
    const { t } = useTranslation();
    return (
        <div className="flex flex-col gap-4 py-8">
            <div>
                <h2>{t(experience.title)}</h2>
                <span className="flex flex-row gap-2 divide divide-x">
                    <p>{t(experience.company)}</p>
                    <p className="text-gray-400 pl-2">{t(experience.time)}</p>
                </span>
            </div>
            <div>
                <Accordion type="single" collapsible defaultValue="item-1">
                    <AccordionItem value="item-1">
                        <AccordionTrigger>
                            {t("career.experienceDesc")}
                        </AccordionTrigger>
                        <AccordionContent>
                            {t(experience.desc)}
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger>
                            {t("career.skillsAndTechstack")}
                        </AccordionTrigger>
                        <AccordionContent>
                            <TaskItems tasks={experience.tasks} />
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
};
