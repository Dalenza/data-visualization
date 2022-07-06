const fs = require('fs');

// const file = 'sem1_notes/cs04.txt';
// fs.readFile(file, 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     let new_data = "";
//     let i = 0;
//     while (i < data.length) {
//         if (data[i] === "." && data[i + 1] == " ") {
//             new_data += data[i];
//             i += 2;
//             continue;
//         }
//         if (i < data.length - 9 && !isNaN(data[i]) && !isNaN(data.slice(i, i + 8))) {
//             new_data += '\n';
//             new_data += data.slice(i, i + 8);
//             i += 8;
//             continue;
//         }
//         // if (data[i] >= "A" && data[i] <= "Z") {
//         //     new_data += '\n';
//         //     while ((data[i] >= "A" && data[i] <= "Z" || data[i] === " ") && i < data.length) {
//         //         new_data += data[i];
//         //         i++;
//         //     }
//         // }
//         new_data += data[i];
//         i++;
//     }
//     // console.log(new_data);
//     fs.writeFile(file, new_data, err => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//     })
// })
// --------------------------
// const file = 'sem1_notes/cs04.txt';
// fs.readFile(file, 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     let new_data = "";
//     data.split('\n').forEach(ele => {
//         if (ele.includes('Disp') || ele.includes('Ab s')) {
//             new_data += ele;
//         } else {
//             new_data += ele.replaceAll(' ', ',');
//         }
//         new_data += '\n';
//     });
//     fs.writeFile(file, new_data, err => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//     });
// })
// -------------------------------
// const file = 'sem1_notes/cs01.txt';
// fs.readFile(file, 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     data.split('\n').forEach((ele, index) => {
//         // 56
//         // 52
//         if (ele.split(',').length != 52) {
//             console.log(ele.split(',').length, index + 1);
//         } else {
//             console.log("ok");
//         }
//     })
// });
// --------------------------------------------------------------------------------
// const file = 'moy/cs04_moy.txt';
// fs.readFile(file, 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     let new_data = "";
//     data.split('\n').forEach(ele => {
//         let aux = "";
//         let ok = true;
//         ele.split(" ").forEach(elem => {
//             if (elem[0] >= "A" && elem[0] <= "Z") {
//                 aux += elem + " ";
//             } else {
//                 if (ok) {
//                     aux += ',' + elem + ',';
//                     ok = false;
//                 } else {
//                     aux += elem + ',';
//                 }
//             }
//         })
//         new_data += aux;
//         // new_data += '\n';
//     });
//     fs.writeFile(file, new_data, err => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//     });
// })
// -----------------------------------------------------------------------------------
const file = 'moy/cs04_moy.txt';
fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let new_data = "[\n";
    data.split('\n').forEach(ele => {
        let nums = ele.split(',');
        new_data += `
        {
            "Name":"${nums[0].trim()}",
            "moy sem1":${nums[1]},
            "credit sem1":${nums[2]},
            "moy sem2":${nums[3]},
            "credit sem2":${nums[4]},
            "moy generale":${nums[5]},
            "credit total":${nums[6]},
            "résultat":"${nums[7].replace('\n', '').trim()}"
        },`;
        // new_data += '\n';
    });
    new_data += "\n]";
    fs.writeFile(file, new_data, err => {
        if (err) {
            console.error(err);
            return;
        }
    });
})
