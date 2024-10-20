import EventCard from "./EventCard";

const ListEventsCards = () => {
    return (
        <>  
            <div className="py-3">
                <hr />
                <div className="row">
                    
                    {[...Array(6)].map((_, index) => (
                        <EventCard key={index} />
                    ))}
                    
                </div>
            </div>
        </>
    );
}

export default ListEventsCards;