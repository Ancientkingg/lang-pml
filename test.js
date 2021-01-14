let arr = ["this_macro_name_is_super_long.mcm","rng.2.1.mcm","macro.mcm","bigbrain.mcm"]
let author = ["Velvoxel raptor", "Ancientkinggamer", "Mizab", "Fetchbot"]
let description = ["This does something really cool","Pretty sure fetchbot made this macro?","I'm going to try and make this macro description way too long","just bigbrain moments only"]

console.log("\n \n┏                                                                                           ┓");
console.log("┃    \u001b[1m\u001b[92m CATALOG     \u001b[39m\u001b[22m\u001b[0m┃\u001b[0m\u001b[1m\u001b[92m      AUTHOR     \u001b[39m\u001b[22m\u001b[0m┃\u001b[0m\u001b[1m\u001b[92m                      DESCRIPTION                      \u001b[39m\u001b[22m┃");
console.log("┣─────────────────╋─────────────────╋───────────────────────────────────────────────────────┫")
for (i = 0; i < arr.length; i++) {
//name
    let name = arr[i].replace(".mcm","").trim();
    let auth = author[i].trim();
    let desc = description[i].trim();
    if(name.length > 13){
        name = name.slice(0, 13);
        name += "…"
    }
    for(name.length; name.length < 14; i){
        name += " "
    }
    name += "\u001b[0m┃\u001b[0m"
// author
    if(auth.length > 15){
        auth = auth.slice(0, 15);
        auth += "…"
    }
    for(auth.length; auth.length < 16; i){
        auth += " "
    }
    auth += "\u001b[0m┃\u001b[0m"
// description
    if(desc.length > 53){
        desc = desc.slice(0, 53);
        desc += "…"
    }
    for(desc.length; desc.length < 54; i){
        desc += " "
    }
    desc += "\u001b[0m┃\u001b[0m"
    console.log("┃ • \u001b[1m\u001b[93m" + name + "\u001b[39m\u001b[22m" + " " + auth + " " + desc);
}
console.log("\u001b[0m┗	 \n \n\u001b[0m");