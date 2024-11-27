import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import RegisterEvent from "./RegisterEvent";
import RegisterAttendance from "./RegisterAttendance";
import MyEvents from "./MyEvents";
import MyAttendances from "./MyAttendances";
import Login from "./Login";
import Signup from "./Signup";
import EventDetails from "./EventDetails";
import NotFound from "./NotFound";
import Authorization from "./Authorization";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/my-events" element={<Authorization allowedProfile={0}><MyEvents /></Authorization>} />
                    <Route path="/my-attendances" element={<Authorization allowedProfile={1}><MyAttendances /></Authorization>}/>
                    <Route path="/register-event" element={<Authorization allowedProfile={0}><RegisterEvent /></Authorization>} />
                    <Route path="/register-attendance" element={<Authorization allowedProfile={1}><RegisterAttendance /></Authorization>} />
                    <Route path="/login" element={<Authorization allowedProfile={null}><Login /></Authorization>} />
                    <Route path="/signup" element={<Authorization allowedProfile={null}><Signup /></Authorization>} />
                    <Route path="/event-details" element={<Authorization allowedProfile={0}><EventDetails /></Authorization>} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;