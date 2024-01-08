import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export const CareerBlock = () => {
    const { t } = useTranslation();
    return (
        <Card>
            <CardHeader>
                <CardTitle>{t("career.title")}</CardTitle>
                <CardDescription>{t("career.desc")}</CardDescription>
            </CardHeader>
            <CardContent>

            </CardContent>
        </Card>
    );
};
