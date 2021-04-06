function clog(message,type) {
    if (typeof message !== "string") throw new TypeError("Not a String");
    if (type !== "w") throw new TypeError("Type incorrect");
    console.log(message, 'background:yellow')
};

module.exports = {clog}