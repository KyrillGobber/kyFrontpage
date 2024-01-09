import { useTranslation } from "react-i18next";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export const ContactCard = () => {
    const { t } = useTranslation();
    return (
        <Card className="self-center">
            <CardHeader>
                <CardTitle>{t("contact.title")}</CardTitle>
                <CardDescription>{t("contact.desc")}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-center items-center">
                <a
                    target="_blank"
                    href={"mailto:info@gobber.ch"}
                    rel="noopener noreferrer"
                >
                    <Button variant="secondary" className="text-xl font-bold">{t("contact.email")}</Button>
                </a>
            </CardContent>
        </Card>
    );
};
