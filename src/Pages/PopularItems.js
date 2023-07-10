import React from 'react'

const PopularItems = ({ items }) => {

    return (
        <>aaa
            {
                items?.map((elements) => {
                    console.log(items);
                    return (
                        <>
                            <div className="">{elements.id}{elements.category}</div>
                        </>
                    )


                })
            }

        </>
    )
}

export default PopularItems
