import { useState } from 'react'
import Bday from './bday.js'
import guy from './guy2.jpg'

var people = [
    {
        id: 1,
        name: "Ivan",
        age: 19,
        bday: "10/06/2003",
        pic: guy
    },
    {
        id: 2,
        name: "Brian",
        age: 16,
        bday: "07/22/2006",
        pic: "https://res.cloudinary.com/dclvobmmb/image/upload/v1666731990/uploads/ad5847073cc21609f582043bb92ac793_400x400_cv4kwu.png"
    },
    {
        id: 3,
        name: "Chad",
        age: 18,
        bday: "03/02/2004",
        pic: "https://res.cloudinary.com/dclvobmmb/image/upload/v1666731207/Pug-dog_ykkeif.jpg"
    },
    {
        id: 4,
        name: "Rem",
        age: 20, 
        bday: "08/05/2002",
        pic: "https://res.cloudinary.com/dclvobmmb/image/upload/v1666730236/samples/people/smiling-man.jpg"
    }
]

const Days = () => {
    return (
        <div>
            <div>
                <h1>{people.length} Birthdays</h1>
                {people.map((myObj, index) => {
                    return <Bday key={index} myObj={myObj}/>
                })}
                <button onClick={() => people = ([])}>Clear</button>

            </div>
        </div>
    )
}

export default Days;
