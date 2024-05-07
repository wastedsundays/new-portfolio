import { REST_PATH } from "../globals/globals"
import { useState, useEffect } from 'react';

const Tools = () => {

    const toolsRestPath = `${REST_PATH}ahdesigns-tools?acf_format=standard&filter[orderby]=slug&order=asc&per_page=100`
    const [restData, setData] = useState([])    
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
        const response = await fetch(toolsRestPath)
        if ( response.ok ) {
          const data = await response.json()
          setData(data)
          setIsLoaded(true)
          } else {
            setIsLoaded(false)
            }
          }
          fetchData()
      }, [toolsRestPath])

    return (
        <div>
            { isLoaded ?
                <div>
                {restData.map((projects, i) => 
                        <div className= {`filter-data ${projects.acf.tool_category.join(" ")}`} key={i}>
                            <img src={projects.acf.tool_image} alt={`${projects.title.rendered} logo`}/>
                        </div>
                    )
                }
                </div>
                :
                <div>Loading...</div>
            }
        </div>
        
    )

}

export default Tools