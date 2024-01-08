import { AtSign, Code, Github, Linkedin } from "lucide-react";
import { useTranslation } from "react-i18next";

export const Footer = () => {
    return (
        <footer className="mt-auto mb-6 flex flex-col justify-center items-center bottom-0 gap-4">
            <FooterText />
            <FooterSocials />
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

const FooterSocials = () => {
    return (
        <div className="grid grid-flow-col gap-4">
            <a
                target="_blank"
                href={'mailto:kyrill@gobber.ch'}
                rel="noopener noreferrer"
            >
                <AtSign />
            </a>
            <a
                target="_blank"
                href={'https://github.com/KyrillGobber'}
                rel="noopener noreferrer"
            >
                <Github />
            </a>
            <a
                target="_blank"
                href={'https://www.linkedin.com/in/kyrill-gobber-022a71199/'}
                rel="noopener noreferrer"
            >
                <Linkedin />
            </a>
        </div>
    );
}

const FooterSrc = () => {
    const { t } = useTranslation();
    return (
        <a
            className="flex flex-row gap-2 text-sm md:text-base"
            target="_blank"
            href={'https://github.com/KyrillGobber/kyFrontpage'}
            rel="noopener noreferrer"
        >
            {t("footer.source")}
            <Code />
        </a>
    );
};
