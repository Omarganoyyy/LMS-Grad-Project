import { House, User, Grip, Users, Settings } from 'lucide-react';
import { Link } from 'react-router-dom';
import './TabBarComponent.css';

export function TabBarComponent() {
    return (
        <nav className="tab-bar-container" aria-label="Main Navigation">
            <ul>
                <li>
                    <Link to="/">
                        <House size={20} />
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to="/profile">
                        <User size={20} />
                        <span>Profile</span>
                    </Link>
                </li>
                <li>
                    <Link to="/services">
                        <Grip size={20} />
                        <span>Services</span>
                    </Link>
                </li>
                <li>
                    <Link to="/community">
                        <Users size={20} />
                        <span>Community</span>
                    </Link>
                </li>
                <li>
                    <Link to="/settings">
                        <Settings size={20} />
                        <span>Settings</span>
                    </Link>
                </li>
            </ul>
        </nav>
    );
}