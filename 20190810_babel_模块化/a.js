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

export default function a () {
    return defaultParams
}

export const formatDate = 'heiehi'