import { useTranslation } from "react-i18next";

export const MainContent = () => {
    const { t } = useTranslation();
    return <h1>{t('random')}</h1>;
};

