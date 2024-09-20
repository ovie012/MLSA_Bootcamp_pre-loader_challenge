import React from "react";

function Privacy () {

    const privacyData = [
        {
            id : 1,
            title : 'king',
            text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nam.',
        },
        {
            id : 2,
            title : 'Queen',
            text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nam.',
        },
        {
            id : 3,
            title : 'prince',
            text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nam.',
        },
        {
            id : 4,
            title : 'princess',
            text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nam.',
        },
        {
            id : 5,
            title : 'guards',
            text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nam.',
        },
        {
            id : 6,
            title : 'knights',
            text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nam.',
        },
        {
            id : 7,
            title : 'subjects',
            text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nam.',
        },
        {
            id : 8,
            title : 'slaves',
            text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nam.',
        },
        {
            id : 9,
            title : 'captives',
            text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nam.',
        },
        {
            id : 10,
            title : 'mystic creatures',
            text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nam.',
        }
    ];

    return (
        <>
            <div className="container">
                <h2>Below is my privacy list</h2>
                <div className="privacy">
                    {privacyData.map((privacy) => 
                        <section key={privacy.id}>
                            <h4>{privacy.title}</h4>
                            <article>{privacy.text}</article>
                        </section>
                    )}
                </div>
            </div>
        </>
    )
}

export default Privacy;