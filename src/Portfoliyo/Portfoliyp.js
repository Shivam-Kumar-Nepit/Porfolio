import React from "react";
import './Portfoliyo.css'
function Portfoliyo() {
    return (
        <>
            <section className="hero_section">
                <div className="text_container">

                    <div className="navbar">
                        <a href="">Home</a>
                        <a href="">About</a>
                        <a href="">Contact</a>
                        <a href="">Service</a>
                    </div>

                    <h2><span className="lg_text">Hi,</span> I am Shivam Kumar</h2>
                    <h1><span className="lg_text">FULL STACK DEVELOPER</span></h1>
                </div>
            </section>

            <section className="black_box"><h2>Work, I CAN DO FOR <span>YOU</span></h2></section>
            <section className="Work">

                <div className="parent">
                    <div className="child1"> <h3>Web Development</h3>

                        <p>Web development refers to the creating, building, and maintaining of websites. It includes aspects such as web design, web publishing, web programming, and database management. It is the creation of an application that works over the internet i.e. websites.</p>
                    </div>

                    <div className="child2"><h3>Responsive Degine</h3>

                        <p>Responsive web design (RWD) is a website design strategy that adjusts to the screen size and orientation of the device being used. The goal is to make a website look and work well on any device.</p>
                    </div>
                    <div className="child3"> <h3>Database</h3>

                        <p>A database is an electronically stored, systematic collection of data. It can contain any type of data, including words, numbers, images, videos, and files. You can use software called a database management system (DBMS) to store, retrieve, and edit data.</p>
                    </div>
                </div>

            </section>
            <section className="bottom_section">
                <div className="contact">
                    <h2> <hr />Contact Me<hr /></h2>
                    <div className="social">

                        <a href="">X</a>
                        <a href="">Instagram</a>
                        <a href="">Facebook</a>
                        <a href="">Youtube</a>
                        <a href="">Snapchat</a>

                    </div>
                </div>
                <div className="about">
                    <div className="profile">
                        <h2><hr />About Me<hr /></h2>
                        <a href="">GitHub</a>
                        <a href="">indeed</a>
                        <a href="http://127.0.0.1:5500/projects/pallex.html">Projects</a>
                        <a href="http://127.0.0.1:5500/projects/ShivamPortfoliyo.html#carouselExampleCaptions">Portfoliyo</a><br />
                        Email : shivamkumarnepit@gmail.com
                    </div>
                </div>
            </section>

        </>
    )
}
export default Portfoliyo;