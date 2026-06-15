export default function TamrinFive() { 
    const ChekcTrueFalse = [ 
        { 
        soal : "5+3 = 9", 
        status :false
        }, 
        {
        soal : "7777 + 9999 = 17776", 
        status : true
         }
    ]; 
    return ( 
        <> 
        <p> {ChekcTrueFalse[0].status? "Done" : "Not Done"} </p> 
        <span> {ChekcTrueFalse[1].status? "Done" : "Not Done"} </span> 

        </>
    ); 
} 
//  ************* تمرین پنجم: شرط گذاری ************ 
// status: true => Done else => Not Done  




