import Header from "@/components/shared/Header";
import Navbar from "@/components/shared/Navbar";


const MainLayout = ({children}) => {
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default MainLayout;