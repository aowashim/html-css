/*for(let j = 0; j<3; j++){
for (let i = 1; i <= 5; ++i) {
    setDelay(i);
  }
   setDelay(j);
} 
  function setDelay(a) {
    setTimeout(function(){
      console.log(a);
    }, 100);
  }*/

for(let j = 0; j < 3; j++){
    
for(let i = 0; i < 6; i++)
{
    setTimeout(() => {
        setTimeout(() => {
            console.log(i, 'y');
        }, 100);
    }, 0);
    
}
setTimeout(() => {
    setTimeout(() => {
        console.log(j);
    }, 100);
}, 0);
//setTimeout(() => {
//    console.log(j); 
//}, j * 300);
}
/*for(let i = 0; i < 6; i++)
{
   setTimeout(() => {
        console.log(i, 'y');
    },i * 100);
}*/