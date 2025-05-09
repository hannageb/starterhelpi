import './faq.css'
import GoHomeScreen from './homepages/FAQ_user_home';
import Footer from '../footer';

function FAQ(){
    return(
        <div>
            <GoHomeScreen></GoHomeScreen>
            <div className="Desc">
                <h5 style={{color: '#E6D9D9'}}>Some frequently asked questions</h5>
            </div>
            
            <div className='Container'>
                <div className='FaQ'>
                    <div>
                        <h6 style={{fontWeight:'bold'}}>What is this for?</h6>
                        <p>This is a final project for CISC275</p>
                    </div>
                </div>
                <div className='FaQ'>
                    <div>
                        <h6 style={{fontWeight:'bold'}}>What would this help with?</h6>
                        <p>This will help you find what field areas might work with you</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
export default FAQ