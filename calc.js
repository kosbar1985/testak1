var data_mod = [];
let count_pos=0;
let count_neg=0;
let count_zero=0;
let count_null=0;
for(let i=0;i<data.length;i++){
    if (typeof data[i]=="number"&&data[i] != 0){
    data_mod[i] = data[i]+1;
    if (data_mod[i]>0){count_pos++;} else {count_neg++}

    } else if
        (typeof data[i] =="string"&&!isNaN(Number(data[i]))&&data[i] != 0){
        data_mod[i]=Number(data[i]);
        data_mod[i]++;
        data_mod[i]=String(data_mod[i]);

        } else{
      if (data[i] == 0&&typeof data[i]=='number') {count_zero++;}
      if (Object.is(data[i], null)) {count_null++;} 
         data_mod[i]=String(data [i]);
        
        }
    }
