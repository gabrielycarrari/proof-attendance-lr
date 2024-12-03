import EventCard from "./EventCard";

const ListEventsCards = ({items}) => {
    return (
        <>  
            <div className="py-3">
                <hr />
                <div className="row">
                    {items.map(u => <EventCard item={u} key={u.id} />)}
                </div>
            </div>
        </>
    );
}

export default ListEventsCards;