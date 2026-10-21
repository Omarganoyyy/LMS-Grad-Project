import { Bell } from "lucide-react";
import { Link } from "react-router-dom";
import './NavBarComponent.css';

export function NavBarComponent() {
    return (
        <nav className="nav-bar-container" aria-label="Main Navigation">
            <div className="left-nav-side">
                <Link to="/" className="brand-link">
                    <span className="brand-badge">UC</span>
                    <h5 className="UniConnect">UniConnect</h5>
                </Link>
            </div>
            <div className="right-nav-side">
                <Link to="/notifications" aria-label="Notifications">
                    <Bell size={22} />
                </Link>
            </div>
        </nav>
    );
}