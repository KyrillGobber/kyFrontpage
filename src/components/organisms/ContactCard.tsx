import { useTranslation } from "react-i18next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

export const ContactCard = () => {
    const { t } = useTranslation();
    return (
        <Card>
            <CardHeader>
                <CardTitle>{t('contact.title')}</CardTitle>
                <CardDescription>{t('contact.desc')}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>{t('contact.name')}</p>
                <p>{t('contact.email')}</p>
            </CardContent>
        </Card>
    );
}

