/**
 objeto = {
    key: value;
    key:value
 }
 objeto.key
 objeto['key'];
 */

 const subject = {
    name: 'Aplicaciones Web',
    cuatri: 3,
    profesor: ' Francisco',
    classroom: 'Lab Redes',
    'Total hours': 70,
    'weekHours': 5
 }

 console.log(subject);
 console.log(subject.name);
 console.log(subject.profesor);
 console.log(subject['classroom']);
 console.log(subject['Total hours']);

 subject.profesor = 'Francisco Lopez';
 subject.career = 'TIADSM';
 subject.log(subject);
 const students = {
    name: 'Laura Alicia',
    age:21,
    califications: [10,10,8],
    city:'Apizaco'
 }

 const group = {
    name:'4B',
    students:[students,students,students],
    subject:[subject,subject,subject]
 }

 console.log(group);
 console.log(group.subject[0].profesor);
 console.log(group.students[1].califications);
 console.log(group.students[1].califications[0]);