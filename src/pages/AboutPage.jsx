import Tools from "../components/Tools"
import { useState, useEffect } from 'react';
import { REST_PATH } from "../globals/globals";




const AboutPage = () => {
    const [apiData, setApiData] = useState(null);

    useEffect (() => {
        //Fetch API Data
        fetch(`${ REST_PATH }ahdesigns-tools?acf_format=standard&filter[orderby]=slug&order=asc&per_page=100`)
            .then(response => response.json())
            .then(data => {
                //Set API Data in State
                setApiData(data);
            })
            .catch(error => {
                console.error('Error fetching data;', error);
            });
        }, [])

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
                {apiData ? (
                    // Render Tools with API data as prop
                    <Tools data={apiData} />
                    ) : (
                    <p>Loading...</p>
                )}
            </div>

            <div>
                <h2>Education</h2>
                <p>ACF repeater field</p>
            </div>


        </div>
    )
}

export default AboutPage