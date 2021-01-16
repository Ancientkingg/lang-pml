module.exports = function mcb_happy() {
    return {
        exported: {}
    };
}


const fs = require("fs");
const macro_dir = "./src/macros";
let repo = [];
const path = require("path");
const MACRO_DIR = path.join(__dirname, "macros");
const PML = "[ \u001b[95mpml\u001b[39m ] ";

if (!fs.existsSync(macro_dir)) fs.mkdirSync(macro_dir);
if (process.argv[2] === "pml") {
    repo = fs.readdirSync(MACRO_DIR);
    // the catalog command should display all the available macros in the repo through the github api, by making a request
    if (process.argv[3] === "catalog") {
        processMacro(repo);
    }
    if (process.argv[3] === "add") {
        let macro_name = process.argv[4];
        macro_name = repo.find(o=>o.includes(macro_name));
        fs.copyFileSync(path.join(MACRO_DIR, macro_name),path.join(process.cwd(),"src/macros",macro_name));
        console.log(PML + `added ${macro_name} to your source directory`);
        console.log(PML + "don't forget to import it to your source file!");
        process.exit(1);
    }
}

function catalog(repo, author, description) {
    console.log("\n \n┏                                                                                           ┓");
    console.log("┃    \u001b[1m\u001b[92m CATALOG     \u001b[39m\u001b[22m\u001b[0m┃\u001b[0m\u001b[1m\u001b[92m      AUTHOR     \u001b[39m\u001b[22m\u001b[0m┃\u001b[0m\u001b[1m\u001b[92m                      DESCRIPTION                      \u001b[39m\u001b[22m┃");
    console.log("┣─────────────────╋─────────────────╋───────────────────────────────────────────────────────┫")
    for (i = 0; i < repo.length; i++) {
        //name
        let name = repo[i].replace(".mcm", "").trim();
        let auth = author[i].trim();
        let desc = description[i].trim();
        if (name.length > 13) {
            name = name.slice(0, 13);
            name += "…"
        }
        for (name.length; name.length < 14; i) {
            name += " "
        }
        name += "\u001b[0m┃\u001b[0m"
        // author
        if (auth.length > 15) {
            auth = auth.slice(0, 15);
            auth += "…"
        }
        for (auth.length; auth.length < 16; i) {
            auth += " "
        }
        auth += "\u001b[0m┃\u001b[0m"
        // description
        if (desc.length > 53) {
            desc = desc.slice(0, 53);
            desc += "…"
        }
        for (desc.length; desc.length < 54; i) {
            desc += " "
        }
        desc += "\u001b[0m┃\u001b[0m"
        console.log("┃ • \u001b[1m\u001b[34m" + name + "\u001b[39m\u001b[22m" + " " + auth + " " + desc);
    }
    console.log("\u001b[0m┗	 \n \n\u001b[0m");
}

async function processMacro(repo){
    let author = [];
    let description = [];
    for (const item of repo){
        await fs.promises.readFile(path.join(MACRO_DIR, item), 'utf-8').then((data) => {
            let fileContents = data.split("\n");
            fileContents.length = 3

            if (fileContents[1].startsWith("Author:")) {
                author.push(fileContents[1].substring(7));
            } else {
                author.push("Unknown")
            }
            if (fileContents[2].startsWith("Description:")) {
                description.push(fileContents[2].substring(13));
            } else {
                description.push("No description")
            }
        });
    }
    catalog(repo, author, description);
    process.exit(1);
}