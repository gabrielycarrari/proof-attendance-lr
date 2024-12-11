import AttendanceCard from "./AttendanceCard";

const ListAttendancesCards = ({items}) => {
    // console.log("itens: ", items);
    return (
        <>  
            <div className="py-3">
                <hr />
                <div className="row pt-3">
                    {items.map(u => <AttendanceCard item={u} key={u.id} />)}
                </div>
            </div>
        </>
    );
}

export default ListAttendancesCards;