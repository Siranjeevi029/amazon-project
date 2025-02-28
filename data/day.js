
import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';
export function dayGenerate(time){
   let val=new Date(time);
   let months=['January','February','March','April'
    ,'May','June','July','August','September'
    ,'October','November','December'
   ];
   val=`${months[val.getMonth()]} ${val.getDate()}`;
    
    
    return val;
}
export function newDayGenerate(time){
    let date=dayjs();
    date=date.add(time,'days');
    return date.format('dddd, MMMM D');
}
export function advancedDayGenerate(time){
    let val=new Date(time);
    let months=['January','February','March','April'
     ,'May','June','July','August','September'
     ,'October','November','December'
    ];
    let days=['Sunday','Monday','Tuesday',
        'Wednesday','Thursday','Friday','Saturday'
       ];
    
    val=`${days[val.getDay()]}, ${months[val.getMonth()]} ${val.getDate()}`;
     
     
     return val;
 }