import profilePic from '../assets/star_partners_bland_ai_logo.png';
import './ProfileImage.css';

export function ProfileImage() {
    return (
        <div className="profile-image">
            <img src={profilePic} alt="Profile" />
        </div>
    );
}