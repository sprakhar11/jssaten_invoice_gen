var tmp = "";

function setfilename(name){
    tmp = name;
}

function getfilename(){
    return tmp;
}


module.exports = {
    setfilename,
    getfilename
};