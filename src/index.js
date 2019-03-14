module.exports = function check(str, bracketsConfig) {
    for (let s = 0; s < str.length; s++) {
        for (let i = 0; i < bracketsConfig.length; i++) {
            if ((str.charAt(s) == bracketsConfig[i][1]) && (bracketsConfig[i][0] != bracketsConfig[i][1])) {
                let foundPos = str.indexOf(bracketsConfig[i][1], s);
                if (str.charAt(foundPos - 1) == (bracketsConfig[i][0])) {
                    str = str.slice(0, foundPos - 1) + str.slice(foundPos + 1);
                    s = 0;
                } else if (str.charAt(foundPos - 1) != (bracketsConfig[i][0])) 
                {return false;}
            } else if ((str.charAt(s) == bracketsConfig[i][1])&&(bracketsConfig[i][0] == bracketsConfig[i][1])&&(str.charAt(s)==str.charAt(s+1))) {
                let foundPos = str.indexOf(bracketsConfig[i][0], s);
                if (str.charAt(foundPos) == (bracketsConfig[i][1])) {
                    str = str.slice(0, foundPos) + str.slice(foundPos + 2);
                    s = 0;
                }
            }
        }
    } 
    if (str == "") { return true; }
    else { return false; }
}

