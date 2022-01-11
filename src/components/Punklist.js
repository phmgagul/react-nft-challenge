import React from 'react'
import CollectionCard from './CollectionCard'
import './Punklist.css'


const Punklist = ({ punkListData, setSelectedPunk }) => {  /*we get our data from opensea and put it inside punkLIstData*/
    return (                              /*our component 'punklist gets to work, loops over the code and builds using the collectionCard component */
        <div className='punkList'>       
            {punkListData.map(punk => (
                <div onClick={() => setSelectedPunk(punk.token_id)}>
                    <CollectionCard          /*we are creating the punklist over and over */
                    key={punk.token_id}
                    id={punk.token_id}
                    name={punk.name}
                    traits={punk.traits}
                    image={punk.image_original_url}
                  />
                </div>

            ))}
        </div>
    )
}

export default Punklist
