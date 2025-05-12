import { useState } from "react";
import { Navigate } from "react-router";

function GoHomeScreen() {
    const [goToHome, setGoToHome] = useState(false);

    if (goToHome) return <Navigate to="/" />;

    return (
        <div>
            <header className="header">
                <h1 className="centerTitle">FAQ</h1>
                <button onClick={() => setGoToHome(true)} className="home-button">
                    <img src="./cisc275-logo.png" alt="polar bear wearing a graduation cap" width="50" height="50" />
                </button>
            </header>

            <div className="Container">
                <div className="FaQ">
                    <h3>How does this site work?</h3>
                    <p>You answer a few questions, and we recommend careers based on your answers.</p>
                </div>

                <div className="FaQ">
                    <h3>Who can use this?</h3>
                    <p>Anyone exploring career options—students, grads, or career switchers.</p>
                </div>

                <div className="FaQ">
                    <h3>Can I retake the quiz?</h3>
                    <p>Yes! You can retake it anytime if your interests change.</p>
                </div>

                <div className="FaQ">
                    <h3>Do I need an account?</h3>
                    <p>No account is needed, but you can create one to save your results.</p>
                </div>

                <div className="FaQ">
                    <h3>Is my data private?</h3>
                    <p>Yes. We never share your info, and everything is stored securely.</p>
                </div>

                <div className="FaQ">
                    <h3>What kinds of careers are suggested?</h3>
                    <p>We recommend a wide range—from tech to creative and more.</p>
                </div>

                <div className="FaQ">
                    <h3>How long does the quiz take?</h3>
                    <p>Most users complete it in under 5 minutes. It's quick and fun!</p>
                </div>

                <div className="FaQ">
                    <h3>Can I share my results with others?</h3>
                    <p>Yes! You can download or screenshot your results to share with friends or mentors.</p>
                </div>
            </div>
        </div>
    );
}

export default GoHomeScreen;
