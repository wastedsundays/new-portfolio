import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { REST_PATH } from '../globals/globals';


function WorkPage() {


    const worksRestPath = `${REST_PATH}ahdesigns-work?acf_format=standard`
    // &filter[orderby]=date&order=desc&per_page=100

    const [restData, setData] = useState([])    
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(worksRestPath)
        if ( response.ok ) {
          const data = await response.json()
          setData(data)
          setIsLoaded(true)
          } else {
            setIsLoaded(false)
            }
          }
          fetchData()
      }, [worksRestPath])

    return (
        <div className=''>
            <h1>Hello From the Work Page</h1>
            <p>This will show all the projects, with links to the individual project page for each, along with link to the actual website</p>
            <div>
                { isLoaded ?
                    <div>
                    {restData.map((projects, i) => 
                            <div className='project' key={i}>
                                <Link to={`/work/${projects.slug}`} >
                                <h3>{projects.title.rendered}</h3>
                                </Link>

                            </div>
                        )
                    }
                    </div>
                    :
                    <div>Loading...</div>
                }
            </div>

        </div>
    )
}

export default WorkPage