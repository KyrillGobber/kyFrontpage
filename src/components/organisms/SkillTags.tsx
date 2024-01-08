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
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "../ui/hover-card";

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
                <HoverCard openDelay={500}>
                    <HoverCardTrigger>
                        <Badge key={skill} className="text-md cursor-default">
                            {skill}
                        </Badge>
                    </HoverCardTrigger>
                    <HoverCardContent>
                        <a
                            className="underline"
                            target="_blank"
                            href={"https://github.com/KyrillGobber/.dotfiles"}
                            rel="noopener noreferrer"
                        >
                            Arch btw x)
                        </a>
                    </HoverCardContent>
                </HoverCard>
            );
        }
        return (
            <Badge key={skill} className="text-md cursor-default">
                {skill}
            </Badge>
        );
    });
};
