let data_mod = data.slice();
let count_pos = 0;
let count_neg = 0;
let count_zero = 0;
let count_null = 0;

for (let i = 0; i < data.length; i++) {
    if (typeof data_mod[i] == "number" && data_mod[i] != 0) {
        data_mod[i] = data_mod[i] + 1;
        if (data_mod[i] > 0) {
            count_pos++;
        } else {
            count_neg++
        }

    } else if (typeof data_mod[i] == "string" && !isNaN(Number(data_mod[i])) && data_mod[i] != 0) {
        data_mod[i] = Number(data_mod[i]);
        data_mod[i]++;
        data_mod[i] = String(data_mod[i]);

    } else {
        if (data_mod[i] == 0 && typeof data_mod[i] == 'number') {
            count_zero++;
        }
        if (Object.is(data_mod[i], null)) {
            count_null++;
        }


    }

}
