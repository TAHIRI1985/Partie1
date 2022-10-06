let prenom , result ;
prenom=prompt('Quel est votre prénom ?');
result=  'Bonjour' +' ' + prenom  +'!';
console.log(result);
document.open();
document.write("<div>"+ result + "</div>" );
document.close();           
               