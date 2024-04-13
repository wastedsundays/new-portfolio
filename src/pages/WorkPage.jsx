import { useState, useEffect } from 'react';


function WorkPage() {

    const worksRestPath = 'https://adamh.ca/portfolio/wordpress/wp-json/wp/v2/fwd-projects?acf_format=standard&filter[orderby]=date&order=desc&per_page=100'

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

      console.log(restData)
      console.log(isLoaded)

    return (
        <div className=''>
            <p>Hello From the Work Page</p>
            <p>This will show all the projects, with links to the individual project page for each, along with link to the actual website</p>
            <div>
            {restData.map((projects, i) => 
                    <div className='project' key={i}>
                        <h3>{projects.title.rendered}</h3>

                    </div>
                )
            }
            </div>

        </div>
    )
}

export default WorkPage