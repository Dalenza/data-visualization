const fs = require("fs")
const xlsx = require("xlsx")

const workBook = xlsx.readFile("./CCF25082020_0003.xlsx")

function createJsonFile() {
    for ([sheetName, sheetValue] of Object.entries(workBook.Sheets)) {
        if (sheetName.startsWith("moy")) {
            let jsonData = xlsx.utils.sheet_to_json(sheetValue)
            fs.writeFile(`./database/${sheetName}.json`, JSON.stringify(jsonData), () => {
                console.log("file written")
            })
        }
    }
}

createJsonFile()
