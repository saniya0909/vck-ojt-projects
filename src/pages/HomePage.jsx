import Header from "../components/Header/Header";
import './HomePage.css';
import "../components/Header/Header.css";
import "../components/Footer/Footer.css";
import Footer from "../components/Footer/Footer";
import { Link } from "react-router-dom";
const HomePage = () => {
    return (
        <>
            <div><Header /></div>
            <div className="other" id="other">
                <article className="content">
                    <div className="banner">
                        <section className="hero-section">
                            <h1>Welcome to Vivekanand College!</h1>
                            <p>Your journey to excellence starts here.</p>
                            <button><Link to="/admissionspage">Apply Now!</Link>
                            </button>
                        </section>
                    </div>
                </article>
                <article className="info">
                    <p><b>Vivekanand College</b> is a premier educational institution dedicated to fostering academic excellence, innovation, and holistic development. Established in [Year of Establishment, e.g., 1980], we have proudly served generations of students, empowering them to achieve their full potential.</p>
                    <p>At Vivekanand College, we believe in a vibrant learning environment that extends beyond textbooks. Our state-of-the-art facilities, experienced faculty, and diverse student community create a unique ecosystem where curiosity thrives and future leaders are shaped.</p>
                </article>
                <article className="text">
                    <h2>Why Choose Vivekanand College?</h2>
                    <ul>
                        <li><b>Legacy of Excellence:</b> Decades of commitment to quality education.</li>
                        <li><b>Experienced Faculty:</b> Learn from renowned experts and passionate educators.</li>
                        <li><b>Modern Facilities:</b> Well-equipped labs, expansive library, and comfortable campus.</li>
                        <li><b>Holistic Development:</b> Focus on co-curricular activities, sports, and community service.</li>
                        <li><b>Strong Placements:</b> Excellent career opportunities with leading companies.</li>
                    </ul>
                </article>
                <figure className="image">
                    <figcaption>Campus Life & Facilities</figcaption>
                    <section className="img">
                        <img src="https://vck-ojt.vercel.app/assets/students-studying-DbLGuwF_.jpeg" />
                        <img src="https://vck-ojt.vercel.app/assets/campus-life-Crkero7B.jpg" />
                    </section>
                </figure>
                <section className="bottom">
                    <h4>Ready to explore our courses?</h4>
                    <button><Link to="/coursespage"><b id="bold">Explore Courses</b></Link></button>
                </section>
            </div>
            <div><Footer /></div>
        </>
    )
}
export default HomePage;