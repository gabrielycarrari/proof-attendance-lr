import AttendanceCard from "./AttendanceCard";

const ListAttendancesCards = () => {
    return (
        <>  
            <div className="py-3">
                <hr />
                <div className="row pt-3">
                    {[...Array(3)].map((_, index) => (
                        <AttendanceCard key={index} />
                    ))}
                    
                </div>
            </div>
        </>
    );
}

export default ListAttendancesCards;