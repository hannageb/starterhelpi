import './userProf.css'
import GoHomeScreen from './homepages/FAQ_user_home';

function UserProf(){
    return(
        <div>
            <GoHomeScreen/>
            <div className="Desc">
                <h5 style={{color: '#E6D9D9'}}>This is where you can see your profile</h5>
            </div>

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