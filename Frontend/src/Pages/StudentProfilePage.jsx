import { Link } from "react-router-dom";
import { User, Mail, GraduationCap, Hash, Calendar, Users, LogOut } from "lucide-react";
import './StudentProfilePage.css';
import { TabBarComponent } from "../Components/TabBarComponent";
import { NavBarComponent } from "../Components/NavBarComponent";

export function StudentProfilePage() {
    return (
        <div className="student-profile-page">
            <NavBarComponent/>

            <main className="student-profile-container">
                {/* Header Card with Overlapping Profile Image */}
                <div className="student-dentails-card">
                    <p className="student-name">Omar Mohamed Nabil Ali</p>
                    <p className="faculty">Faculty of Computer Science</p>
                    <p className="major">Software Engineering</p>
                    <img
                        src={`${import.meta.env.BASE_URL}pictures/WhatsApp Image 2026-10-21 at 5.53.25 PM.jpeg`}
                        alt="Student Profile"
                    />
                </div>

                {/* Personal Information Card */}
                <div className="profile-personal-info">
                    <p className="personal-info-title"><User size={18} /> Personal Info</p>
                    <p><User size={16} /> <strong>Name:</strong> Omar Mohamed Nabil Ali</p>
                    <p><Users size={16} /> <strong>Group:</strong> SE2</p>
                    <p><Hash size={16} /> <strong>ID:</strong> 342154</p>
                    <p><Calendar size={16} /> <strong>Academic Year:</strong> 3rd Year</p>
                </div>

                {/* Contact Information Card */}
                <div className="profile-contact-info">
                    <p className="contact-info-title"><Mail size={18} /> Contact Info</p>
                    <p><Mail size={16} /> <strong>Email:</strong> omarganoyyy@gmail.com</p>
                    <p><GraduationCap size={16} /> <strong>Academic Email:</strong> omar.ahmed.2005@gmail.edu.com</p>
                </div>

                {/* Update Info & Logout Action Card */}
                <div className="profile-update-info">
                    <div>
                        <p className="update-info">Session & Account</p>
                        <p>Manage your account settings and preferences</p>
                    </div>
                    <Link to="/login" className="logout">
                        <LogOut size={16} /> Logout
                    </Link>
                </div>
            </main>
            <TabBarComponent />

        </div>
    );
}