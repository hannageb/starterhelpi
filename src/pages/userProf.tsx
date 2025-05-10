import './userProf.css'
import GoHomeScreen from './homepages/FAQ_user_home';
import Footer from '../footer';

function UserProf(){
    return(
        <div>
            <GoHomeScreen/>
            <div className='UserProf'>
                <h6>Profile</h6>
            </div>

            <Footer/>
        </div>
    )
}
export default UserProf