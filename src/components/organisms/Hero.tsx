import { useTranslation } from "react-i18next";
import { buttonVariants } from "../ui/button";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export const Hero = () => {
    const { t } = useTranslation();
    return (
        <div id="hero" className="w-screen h-screen">
            <div className="flex flex-col sm:pt-0 pt-32 justify-start sm:justify-center items-center h-screen gap-20">
                <div>
                    <div className="dark:animate-fadeIn dark:delay-500 flex flex-col gap-4">
                        <h1 className="text-xl sm:text-4xl">{t('hero.quotePart1')}</h1>
                        <h1 className="text-xl sm:text-4xl pl-12 sm:pl-24">{t('hero.quotePart2')}</h1>
                    </div>
                    <p className="pl-52 sm:pl-96 dark:animate-fadeIn dark:delay-1000">{`-${t('hero.gandhi')}`}</p>
                </div>
                <div className="container sm:w-1/3 dark:animate-fadeIn dark:delay-2000">
                    <p>{t('hero.entryText')}</p>
                </div>
                <a href="#main" className={cn(buttonVariants({ variant: "ghost" }),"dark:animate-fadeIn dark:delay-2000 gap-2")}>{t('hero.discover')}<ChevronDown/></a>
            </div>
        </div>
    );
}
