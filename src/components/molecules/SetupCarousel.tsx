import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import SetupNormal from "../../assets/images/SetupNormalLight169.jpg";
import SetupFancy from "../../assets/images/SetupFancyLight169.jpg";
import { Card } from "../ui/card";

export const SetupCarousel = () => {
    return (
        <Card className="p-16">
            <Carousel className="rounded-xl">
                <CarouselContent>
                    <CarouselItem>
                        <img src={SetupNormal} alt="SetupNormal" />
                    </CarouselItem>
                    <CarouselItem>
                        <img src={SetupFancy} alt="SetupFancy" />
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </Card>
    );
};

