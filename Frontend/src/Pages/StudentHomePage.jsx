import { GraduationCap, IdCardLanyard, Sun } from "lucide-react";
import { NavBarComponent } from "../Components/NavBarComponent.jsx";
import { TabBarComponent } from "../Components/TabBarComponent.jsx";
import './StudentHomePage.css';

export function StudentHomePage() {
    return (
        <div className="student-home-page">

            <NavBarComponent />

            <div className="student-card-component">

                <div className="student-card-left-side">

                    <p className="greeting"><Sun size={15}/>Good Morning</p>
                    <p className="name">Omar</p>
                    <p className="student-id"><IdCardLanyard size={15}/>2123153</p>
                    <p className="cgpa"><GraduationCap size={15}/>CGPA 3.37</p>

                </div>

                <div className="student-card-right-side">

                    <img src={`${import.meta.env.BASE_URL}pictures/WhatsApp Image 2026-10-21 at 5.53.25 PM.jpeg`}></img>

                </div>

            </div>

            <TabBarComponent />

        </div>
    )
}