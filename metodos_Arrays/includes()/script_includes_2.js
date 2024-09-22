let pessoas = [ 
  {id:11 ,  name:'Adamastor', age:23 , group:'editor'},
  {id:47 ,  name:'Joana', age:28 , group:'user'},
  {id:85 ,  name:'Mauricio', age:34 , group:'editor'},
  {id:97 ,   name:'Lalau', age:74 , group:'adimin'} 
]

const filterUsers = pessoas.filter(p => p.group.includes('user'))
console.log(filterUsers)