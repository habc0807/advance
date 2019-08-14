var defaultParams = {
    name: 1,
    getName: function() {
        return defaultParams.name
    },
    setName: function(name) {
        defaultParams.name = name
        return name;
    }
}

module.exports = {
   getName: defaultParams.getName,
   setName: defaultParams.setName
}