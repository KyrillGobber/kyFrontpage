import { useTranslation } from "react-i18next";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "../ui/card";
import { Button, buttonVariants } from "../ui/button";
import { Copy } from "lucide-react";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

export const ContactCard = () => {
    const { t } = useTranslation();

    const handleOnCopyClick = () => {
        navigator.clipboard.writeText("info@gobber.ch");
        toast(t("contact.emailCopied"));
    };

    return (
        <Card className="self-center">
            <CardHeader>
                <CardTitle>{t("contact.title")}</CardTitle>
                <CardDescription>{t("contact.desc")}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-row justify-center items-center gap-2">
                <a
                    target="_blank"
                    href={"mailto:info@gobber.ch"}
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ variant: "default" }), "text-xl font-bold")}
                >
                    {t("contact.email")}
                </a>
                <Button variant="secondary" onClick={() => handleOnCopyClick()}>
                    <Copy />
                </Button>
            </CardContent>
        </Card>
    );
};
