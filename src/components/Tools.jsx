import { REST_PATH } from "../globals/globals";
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
            <>
                <div className="selector-buttons">
                    <button className='button-checked' id="*">All</button>
                    <button className='' id="Favourite">Favourites</button>
                    <button className='' id="Development">Develop</button>
                    <button className='' id="Design">Design</button>
                    <button className='' id="Other">Other</button>
                </div>
                <hr />

                <div>
                    <ul className='filter-container'>
                        {restData.map((projects, i) => 
                                <div className= {`filter-item ${projects.acf.tool_category.join(" ")}`} key={i}>
                                    <img src={projects.acf.tool_image} alt={`Small card showing ${projects.title.rendered} logo with name in text underneath`}/>
                                </div>
                            )
                        }
                    </ul>
                </div>
            </>
                :
                <div>Loading...</div>
            }
        </div>
        
    )

}

export default Tools