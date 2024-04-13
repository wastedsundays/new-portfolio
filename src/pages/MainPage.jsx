import { Link } from "react-router-dom"



function MainPage() {
    return (
        <div className=''>
            <p>Hello From the Home Page</p>
            
            <section>
            <p>What I do Section - work</p>

                <Link to='work'>
                    <button>
                        View My Work
                    </button>
                </Link>
            </section>

            <section>
                <p>Who I am section - about</p>
                <Link to='about'>
                    <button>
                        About Me
                    </button>
                </Link>
            </section>

            <section>
                <p>Contact section - get in touch</p>
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