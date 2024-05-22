// import { REST_PATH } from "../globals/globals";
// import { useState, useEffect } from 'react';
import * as React from 'react';
import Isotope from 'isotope-layout';


  const Tools = (props) => {

    // const toolsRestPath = `${REST_PATH}ahdesigns-tools?acf_format=standard&filter[orderby]=slug&order=asc&per_page=100`
    // const [restData, setData] = useState([])    
    // const [isLoaded, setIsLoaded] = useState(false)

    // useEffect(() => {
    //     const fetchData = async () => {
    //     const response = await fetch(toolsRestPath)
    //     if ( response.ok ) {
    //       const data = await response.json()
    //       setData(data)
    //       setIsLoaded(true)
    //       } else {
    //         setIsLoaded(false)
    //         }
    //       }
    //       fetchData()
    //   }, [toolsRestPath])

 
    // init one ref to store the future isotope object
    const isotope = React.useRef()
    // store the filter keyword in a state
    const [filterKey, setFilterKey] = React.useState('*')
  
    // initialize an Isotope object with configs 
    React.useEffect(() => {
      isotope.current = new Isotope('.filter-container', {
        itemSelector: '.filter-item',
        layoutMode: 'fitRows',
      })
      // cleanup
      return () => isotope.current.destroy()
    }, [])
    

  
    // handling filter key change
    React.useEffect(() => {
      filterKey === '*'
        ? isotope.current.arrange({filter: `*`})
        : isotope.current.arrange({filter: `.${filterKey}`})
    }, [filterKey])

    const handleFilterKeyChange = key => () => {
        // setFilterKey(key);    <--this is the original.
        //this checks if the button is already highlighted. If it is, it unclicks it and sets the filter to ALL      
        if (document.getElementById(key).classList.contains('button-checked')){
          //this prevents the unclick IF all is selected and already highlighted.
          if (key==="*") { 
            return
          } else {
            //this now runs. (Button highlighted, and clicked again....resets filter to ALL)
            document.getElementById(key).classList.remove('button-checked');
            document.getElementById('*').classList.add('button-checked');
            setFilterKey('*');
          }
        } else {
          //this runs if we've clicked a button that isn't highlighted.
          const removebuttons = Array.from(document.getElementsByClassName('button-checked'));
          removebuttons.forEach(button => {
          button.classList.remove('button-checked');
        });
        document.getElementById(key).classList.add('button-checked');
        setFilterKey(key);
        
        }
      } //end of handleFilterKeyChange


    return (
        <div>
            <div>
                    <div className="selector-buttons">
                        <button className='button-checked' id="*" onClick={handleFilterKeyChange('*')}>All</button>
                        <button className='' id="Favourite" onClick={handleFilterKeyChange('Favourite')}>Favourites</button>
                        <button className='' id="Development" onClick={handleFilterKeyChange('Development')}>Develop</button>
                        <button className='' id="Design" onClick={handleFilterKeyChange('Design')}>Design</button>
                        <button className='' id="Other" onClick={handleFilterKeyChange('Other')}>Other</button>
                    </div>
                    <hr />
                                      
                    <ul className='filter-container'>
                            {props.data.map((projects, i) => 
                                        <div className= {`filter-item ${projects.acf.tool_category.join(" ")}`} key={i}>
                                            <img src={projects.acf.tool_image} alt={`Small card showing ${projects.title.rendered} logo with name in text underneath`}/>
                                        </div>
                                    )
                                }
                    </ul>
            </div>

        </div>
        
    )

}

export default Tools