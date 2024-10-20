import EventCard from "./EventCard";
import EventCardAndamento from "./EventCardAndamento";
import EventCardFinalizado from "./EventCardFinalizado";

const ListEventsCards = () => {
    return (
        <>  
            <div className="py-3">
                <hr />
                <div className="row">
                    <EventCard />
                    <EventCardAndamento />
                    <EventCardFinalizado />
                    {[...Array(3)].map((_, index) => (
                        <EventCard key={index} />
                    ))}
                    
                </div>
            </div>
        </>
    );
}

export default ListEventsCards;