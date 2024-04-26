import { Link } from "react-router-dom"



function MainPage() {
    return (
        <div className=''>
            <section>

                <h1>Adam H</h1>
                <p>Front End Developer</p>

            </section>
            
            <section>

                <h2>Work</h2>
                <p>Here we will have either one project featured image, or a carousel showing a few featured projects</p>

                <Link to='work'>
                    <button>
                        View My Work
                    </button>
                </Link>
            </section>

            <section>
                <h2>Me</h2>
                <p>This will not have an image. Just a teaser text to get them to click on the link</p>
                <Link to='about'>
                    <button>
                        About Me
                    </button>
                </Link>
            </section>

            <section>
                <h2>Say Hello</h2>
                <p>Say something nice to direct them to the contact page. Or, have the form be here.</p>
                <Link to='contact'>
                    <button>
                        Contact
                    </button>
                </Link>
            </section>


        </div>
    )
}

export default MainPage