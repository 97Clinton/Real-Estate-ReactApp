import SearchBar from "../../components/searchBar/SearchBar";
import "./homePage.scss";


function HomePage() {
    return (
        <div className="homePage">
            <div className="textContainer">
                <div className="wrapper">
                    <h1 className="title">
                        Find Real Estate & Get Your Dream Place
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing 
                        elit, sed do eiusmod tempor incididunt ut labore 
                        et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis laboris nisi ea commodo consequat.
                    </p>

                    <SearchBar />

                    <div className="boxes">
                        <div className="box">
                            <h1>10+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>200</h1>
                            <h2>Awards Gained</h2>
                        </div>
                        <div className="box">
                            <h1>2000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="imageContainer">
                <img src="/bg.png" alt="" />
            </div>
        </div>
    )
}

export default HomePage;