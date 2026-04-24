import Navbar from "@/components/shared/Navbar";
import { montserrat } from "../layout";


const layout = ({children}) => {
    return (
        <div className={`${montserrat.className}`}>
            <Navbar></Navbar>
            {children}
        </div>
    );
};

export default layout;