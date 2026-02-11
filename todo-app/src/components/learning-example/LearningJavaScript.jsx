const person = {
    name: 'neko',
    address: {
        line1:'H',
        city:'A',
        country:'P'
    },
    profiles: ['tiktok', 'IG', 'Facebook'],
    printProfile: () => {
        person.profiles.map(
            profile => console.log(profile)
        )
    }
}


export default function LearningJavaScript(){
    return(
        <>
            <div>{person.name}</div>
            <div>{person.address.line1}</div>
            <div>{person.profiles[0]}</div>
            <div>{person.printProfile()}</div>
        </>
    )
}