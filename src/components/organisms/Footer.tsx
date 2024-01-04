import { Code } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    return (
        <footer className="mt-auto mb-6 flex flex-col justify-center items-center bottom-0">
            <FooterText />
            <FooterSrc />
        </footer>
    );
};


const FooterText = () => {
    const { t } = useTranslation();
    return (
        <p className="text-sm md:text-base">
            {t("footer.text")}
        </p>
    );
};

const FooterSrc = () => {
    const { t } = useTranslation();
    return (
        <a
            className="flex flex-row gap-2 text-sm md:text-base"
            target="_blank"
            href={'https://github.com/KyrillGobber/teaBruh'}
            rel="noopener noreferrer"
        >
            {t("footer.source")}
            <Code />
        </a>
    );
};
