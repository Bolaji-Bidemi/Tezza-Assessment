import "./App.css";
import Login from "./pages/login/Login";
// import Sidebar from './components/sidebar/Sidebar';
import Layout from "./pages/Layout/Layout";
import WorkPlace from "./pages/workPlace/WorkPlace";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Clients from "./pages/clients/Clients";
import ClientProfile from "./pages/clientProfile/clientProfile";
import Schedule from "./pages/schedule/Schedule";
import Payment from "./pages/payment/Payment";
import Task from "./pages/task/Task";
import Message from './pages/messages/Message'
import Report from './pages/report/Report'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<WorkPlace />} />
          <Route path="/clients" element={<Clients />} />
          <Route path="/client/profile" element={<ClientProfile />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/task" element={<Task />} />
          <Route path="/message" element={<Message />} />
          <Route path="/report" element={<Report />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
