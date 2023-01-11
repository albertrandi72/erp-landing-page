import Header from "./Header";
import MainContent from "./MainContent";

export default function Dashboard() {
    return <div className=" min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
        <Header />
        <MainContent />
    </div>
}