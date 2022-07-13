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
// const file = 'moy/cs04_moy.txt';
// fs.readFile(file, 'utf8', (err, data) => {
//     if (err) {
//         console.error(err);
//         return;
//     }
//     let new_data = "[\n";
//     data.split('\n').forEach(ele => {
//         let nums = ele.split(',');
//         new_data += `
//         {
//             "Name":"${nums[0].trim()}",
//             "moy sem1":${nums[1]},
//             "credit sem1":${nums[2]},
//             "moy sem2":${nums[3]},
//             "credit sem2":${nums[4]},
//             "moy generale":${nums[5]},
//             "credit total":${nums[6]},
//             "résultat":"${nums[7].replace('\n', '').trim()}"
//         },`;
//         // new_data += '\n';
//     });
//     new_data += "\n]";
//     fs.writeFile(file, new_data, err => {
//         if (err) {
//             console.error(err);
//             return;
//         }
//     });
// })

// ------------------------------------------------------------------------
/**
        "Name": "ADDED HEYTHEM",
        "Probabilité et statistique": 17.68,
        "Théorie des langages des Automates": 13.92,
        "Graphes et optimisation": 17,
        "Ingénierie des bases de données": 16.52,
        "Services des réseaux": 13.95,
        "Gestion d'entreprise": 13.55,
        "Anglais 3": 11.6,
        "Conception des systémes d'information": 11.95,
        "Programmation Java": 14.14,
        "entrepot de données": 16.88,
        "administration des bases de données": 18.02,
        "techniques d'indexation": 15.17,
        "programmation web": 14.25,
        "tests de logiciels": 13.7,
        "techniques de compilation": 17.45,
        "fondement de l'intelligence artificielle": 18.78,
        "droit d'informatique": 10.4,
        "projet fédéré": 18,
        "anglais 4": 12.7

 */
const file = 'database/sem1_notes/cs04.txt';
const file2 = 'database/sem2_notes/cs04.txt';
const arr = [0, 4, 10, 14, 21, 26, 32, 37, 43, 48];
const arr2 = [3, 8, 15, 20, 27, 32, 39, 45, 49, 53];
let nums2 = [];
fs.readFile(file2, 'utf8', (error, data2) => {
    if (error) {
        console.error(err);
        return;
    }
    data2.split('\n').forEach(elem => {
        nums2.push(elem.split(','));
    });
})
fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let nums = [];
    data.split('\n').forEach(ele => {
        nums.push(ele.split(','));
    });
    let new_data = "[\n";
    // console.log(nums.length);
    // console.log(nums2.length);
    // console.log(nums2);
    // return;
    for (let i = 0; i < nums.length; i++) {
        new_data += `
        {
            "Name": "${nums[i][arr[0]]}",
            "Probabilité et statistique": ${nums[i][arr[1]]},
            "Théorie des langages des Automates": ${nums[i][arr[2]]},
            "Graphes et optimisation": ${nums[i][arr[3]]},
            "Ingénierie des bases de données": ${nums[i][arr[4]]},
            "Services des réseaux": ${nums[i][arr[5]]},
            "Gestion d'entreprise": ${nums[i][arr[6]]},
            "Anglais 3": ${nums[i][arr[7]]},
            "Conception des systémes d'information": ${nums[i][arr[8]]},
            "Programmation Java": ${nums[i][arr[9]]},
            "entrepot de données":${nums2[i][arr2[0]]},
            "administration des bases de données":${nums2[i][arr2[1]]},
            "techniques d'indexation":${nums2[i][arr2[2]]},
            "programmation web":${nums2[i][arr2[3]]},
            "tests de logiciels":${nums2[i][arr2[4]]},
            "techniques de compilation":${nums2[i][arr2[5]]},
            "fondement de l'intelligence artificielle":${nums2[i][arr2[6]]},
            "droit d'informatique":${nums2[i][arr2[7]]},
            "projet fédéré":${nums2[i][arr2[8]]},
            "anglais 4":${nums2[i][arr2[9]]}
        },
    `;
    }
    new_data += ']';
    fs.writeFile('database/L2CS03.txt', new_data, { flag: 'a+' }, err => {
        console.error(err);
        return;
    });
    // console.log(new_data);
});
