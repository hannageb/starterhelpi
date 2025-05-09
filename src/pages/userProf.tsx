import './userProf.css'
import GoHomeScreen from './homepages/FAQ_user_home';

function UserProf(){
    return(
        <div>
            <GoHomeScreen/>
            <div className='UserProf'>
                <h6>Profile</h6>
            </div>
            <footer className="footer">
                <p>Made with 💛 by Luc, Hanna & Isha — CareerHelpi 2025</p>
            </footer>
        </div>
    )
}
export default UserProf