import { ModeToggle } from "../mode-toggle";
import { Separator } from "../ui/separator";

export const Nav = () => {
    return (
        <div className="bg-background sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative">
                <div className="flex flex-row justify-between items-center mx-2 h-16">
                    <div className="bg-secondary dark:bg-secondary p-2 rounded-lg">
                        soon
                    </div>
                    <h1>Gobber.ch</h1>
                    <div className="flex flex-row gap-2">
                        <ModeToggle />
                    </div>
                </div>
                <Separator className="bg-secondary" />
            </header>
        </div>
    );
};

