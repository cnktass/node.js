const fs = require('fs');

fs.writeLife(employees.json,{"name": "Employee 1 Name","salary":2000,},'utf8',(err =>{
    if(err) console.log('Veri Eklenemedi')
}))

fs.readFile('employe.json','utf8',(err,data)=>{
    if(err) console.log('dosya getirilemiyor')
    console.log(data)
})

fs.appendFile('employees.json', '\n {"name": "Employee 2 Name", "salary": 5000}]', 'utf-8', (err) => {
         if (err) console.log(err)
         console.log('Dosya guncellendi')
 })

 fs.unlink('employe.json',(err)=>{
    if (err) console.log(err)
 })