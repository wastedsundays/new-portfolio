import { Link } from "react-router-dom"



function MainPage() {
    return (
        <div className=''>
            <section>

                <p>Hello From the Home Page</p>

            </section>
            
            <section>

                <p>What I do Section - work</p>
                <p>Here we will have either one project featured image, or a carousel showing a few featured projects</p>

                <Link to='work'>
                    <button>
                        View My Work
                    </button>
                </Link>
            </section>

            <section>
                <p>Who I am section - about</p>
                <p>This will not have an image. Just a teaser text to get them to click on the link</p>
                <Link to='about'>
                    <button>
                        About Me
                    </button>
                </Link>
            </section>

            <section>
                <p>Contact section - get in touch</p>
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