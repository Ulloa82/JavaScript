hour=prompt('Please enter the current hour format 24: ');
if (hour<0 || hour>23){
    alert('The format is incorrect')
}
else if (hour<8 || hour>=18) {
    alert('Not office Hour')
}
else {
    alert('Office hours')
}   


