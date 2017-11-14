function PropertiesService() {
    var properties = []

    
    function Property(config) {
        this.title = config.title.value
        this.type = config.type.value
        this.squarefootage = config.squarefootage.value
        this.address = config.address.value
        this.location = config.location.value
        this.description = config.description.value
        this.contact = config.contact.value
        this.img = config.img.value
        this.price = config.price.value
        
    }

    this.getProperties = function getProperties(cb) {
        if (!cb || typeof cb != 'function') { return console.error('WOah I need a cb to run') }
        // first task is to request the data from the server ASYNC
        // the data from the server
        // give the controller what it wants
        $.get(baseUrl)
            .then(res => {
                // second task is to update the local autos array with 
                properties = res
                cb(properties)
            })
            .fail(logError)
    }

    this.getProperty = function getProperty(id){
        for (var i = 0; i < properties.length; i++) {
            var property = properties[i];
            if(id == property.id){
                return auto
            }
        }
    }

    this.addProperty = function addProperty(form, getProperties) {
        if (!form || !getProperties || typeof getProperties != 'function') { return console.error('Unable to add Property', 'bad parameters', form, getProperties) }
        var newProperty = new Property(form)
        $.post(baseUrl, newProperty)
            .then(getProperties)
            .fail(logError)
    }
}