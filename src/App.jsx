import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import RegisterEvent from "./RegisterEvent";
import RegisterAttendance from "./RegisterAttendance";
import MyEvents from "./MyEvents";
import MyAttendances from "./MyAttendances";
import Login from "./Login";
import Signup from "./Signup";
import NotFound from "./NotFound";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/my-events" element={<MyEvents />} />
                    <Route path="/my-attendances" element={<MyAttendances />} />
                    <Route path="/register-event" element={<RegisterEvent />} />
                    <Route path="/register-attendance" element={<RegisterAttendance />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                </Route>
                <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;