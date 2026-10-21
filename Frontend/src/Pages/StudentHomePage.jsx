
import {
    Clock,
    CircleArrowRight,
    GraduationCap,
    IdCardLanyard,
    Sun,
    CalendarDays,
    QrCode,
    Megaphone,
    ArrowRight,
    FileText
} from "lucide-react";

import { Link } from "react-router-dom";
import { NavBarComponent } from "../Components/NavBarComponent.jsx";
import { TabBarComponent } from "../Components/TabBarComponent.jsx";

import "./StudentHomePage.css";

export function StudentHomePage() {
    return (
        <div className="student-home-page">

            <NavBarComponent />

            {/* Student Profile Card */}
            <div className="student-card-component">

                <div className="student-card-left-side">
                    <p className="greeting">
                        <Sun size={15} />
                        Good Morning
                    </p>

                    <p className="name">Omar</p>

                    <p className="student-id">
                        <IdCardLanyard size={15} />
                        2123153
                    </p>

                    <p className="cgpa">
                        <GraduationCap size={15} />
                        CGPA 3.37
                    </p>
                </div>

                <div className="student-card-right-side">
                    <img
                        src={`${import.meta.env.BASE_URL}pictures/WhatsApp Image 2026-10-21 at 5.53.25 PM.jpeg`}
                        alt="Student Profile"
                    />
                </div>

            </div>

            {/* Lectures and Sections */}
            <div className="lectures-announcement-component">

                <div className="upper-lectures-announcement-side">
                    <span className="badge-item">
                        <span className="shiny-dot green"></span>
                        Lecture
                    </span>

                    <span className="badge-item">
                        <span className="shiny-dot blue"></span>
                        Section
                    </span>
                </div>

                <div className="middle-lectures-announcement-side">
                    <p className="lecture-item">
                        <Clock size={16} />
                        Software Maintenance Fundamentals
                    </p>

                    <p className="section-item">
                        <CircleArrowRight size={16} />
                        Computer Graphics
                    </p>
                </div>

                <div className="lower-lectures-announcement-side">
                    <Link to="/lectures" className="details-btn">
                        Lecture Details
                    </Link>
                </div>

            </div>

            {/* Upcoming Deadlines, Attendance and Announcements */}
            <section className="student-quick-access">

                {/* Upcoming Deadlines */}
                <div className="dashboard-section deadlines-section">

                    <div className="dashboard-section-header">
                        <h2>
                            <CalendarDays size={19} />
                            Upcoming Deadlines
                        </h2>

                        <span className="section-count">
                            2 upcoming
                        </span>
                    </div>

                    <div className="deadline-list">

                        <div className="deadline-item">
                            <div className="deadline-icon">
                                <FileText size={19} />
                            </div>

                            <div className="deadline-info">
                                <h3>Database Assignment</h3>
                                <p>Database Systems</p>

                                <span className="deadline-date">
                                    Due tomorrow
                                </span>
                            </div>

                            <ArrowRight
                                size={18}
                                className="deadline-arrow"
                            />
                        </div>

                        <div className="deadline-item">
                            <div className="deadline-icon">
                                <FileText size={19} />
                            </div>

                            <div className="deadline-info">
                                <h3>Software Engineering Quiz</h3>
                                <p>Software Engineering</p>

                                <span className="deadline-date">
                                    Due in 4 days
                                </span>
                            </div>

                            <ArrowRight
                                size={18}
                                className="deadline-arrow"
                            />
                        </div>

                    </div>

                    <Link
                        to="/assignments"
                        className="dashboard-action"
                    >
                        View All Deadlines
                        <ArrowRight size={16} />
                    </Link>

                </div>

                {/* Right Side: Attendance and Announcements */}
                <div className="student-quick-access-right">

                    {/* QR Attendance */}
                    <div className="dashboard-section attendance-section">

                        <div className="quick-access-icon attendance-icon">
                            <QrCode size={23} />
                        </div>

                        <div className="quick-access-content">
                            <h2>QR Attendance</h2>

                            <p>
                                Scan the lecture QR code to mark your
                                attendance quickly.
                            </p>
                        </div>

                        <Link
                            to="/attendance"
                            className="quick-access-button"
                        >
                            Mark Attendance
                            <ArrowRight size={16} />
                        </Link>

                    </div>

                    {/* Announcements */}
                    <div className="dashboard-section announcements-section">

                        <div className="quick-access-icon announcement-icon">
                            <Megaphone size={23} />
                        </div>

                        <div className="quick-access-content">
                            <h2>Announcements</h2>

                            <p>
                                Stay updated with the latest news from
                                your lecturers and university.
                            </p>
                        </div>

                        <Link
                            to="/announcements"
                            className="quick-access-button"
                        >
                            View Updates
                            <ArrowRight size={16} />
                        </Link>

                    </div>

                </div>

            </section>

            <TabBarComponent />

        </div>
    );
}
