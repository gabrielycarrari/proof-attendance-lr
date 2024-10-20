import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Layout from "./Layout";
import RegisterEvent from "./RegisterEvent";
import RegisterAttendance from "./RegisterAttendance";
import NotFound from "./NotFound";
import Login from "./Login";
import Signup from "./Signup";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
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