import { useTranslation } from "react-i18next";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Badge } from "../ui/badge";
import { MySkills } from "@/lib/constants";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";

export const SkillTags = () => {
    const { t } = useTranslation();
    return (
        <Card>
            <CardHeader>
                <CardTitle>{t("skills.title")}</CardTitle>
                <CardDescription>{t("skills.desc")}</CardDescription>
            </CardHeader>
            <CardContent>
                <BadgeContainer />
            </CardContent>
        </Card>
    );
};

const BadgeContainer = () => {
    return (
        <div className="flex flex-wrap gap-2 w-full">
            <Badges />
        </div>
    );
};

const Badges = () => {
    return MySkills.map((skill) => {
        if (skill.includes("Linux")) {
            return (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger>
                            <Badge key={skill} className="text-md cursor-default">
                                {skill}
                            </Badge>
                        </TooltipTrigger>
                        <TooltipContent className="flex justify-center">
                            <a
                                className="underline"
                                target="_blank"
                                href={"https://github.com/KyrillGobber/.dotfiles"}
                                rel="noopener noreferrer"
                            >
                                Arch btw x)
                            </a>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            );
        }
        return (
            <Badge key={skill} className="text-md cursor-default">
                {skill}
            </Badge>
        );
    });
};
