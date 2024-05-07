import Tools from "../components/Tools"


function AboutPage() {
    return (
        <div className=''>
            <h1>Hello From the About Page</h1>
            <p>This page will be the about me bio, the skills section, and the education section</p>

            <div>
                <h2>Bio</h2>
                <p>Some words about me</p>

            </div>

            <div>
                <h2>Tools & Skills</h2>
                <p>We are going to have an isotope here showing the tools and skills cards</p>
                <Tools />
            </div>

            <div>
                <h2>Education</h2>
                <p>ACF repeater field</p>
            </div>


        </div>
    )
}

export default AboutPage