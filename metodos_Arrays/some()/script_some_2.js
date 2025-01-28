const team = [
    {id:12 , name:'Topper Haley' , pilot:true},
    {id:44 , name:'Ramada Thompsom' , pilot:true},
    {id:59 , name:'Peter Thompsom' , pilot:false},
    {id:122 , name:'Kowalski' , pilot:false}
]
// verificar se tem pilotos na equipe
console.log( team.some((person) => {
    return person.pilot == true 
    } 
    ) )