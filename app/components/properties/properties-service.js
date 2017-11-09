function PropertiesService() {
    var properties = [{
        id: 'sldkjiwesdxxcfewwalkjoiiuion32920a',
        type: 'Apartment',
        squarefootage: 800,
        address: '123 Pleasant Ave Apt 44',
        description: 'Great place to live',
        location: 'Boise',
        price: 650,
        contact: 'testhome@puppies.supplies',
        img: '//loremflickr.com/200/200/apartment',
        title: 'Your New Home'
    }]

    var id = 0;
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
        this.id = id++
    }

    this.getProperties = function getProperties(){
        return properties
    }

    this.getProperty = function getProperty(id){
        for (var i = 0; i < properties.length; i++) {
            var property = properties[i];
            if(id == property.id){
                return auto
            }
        }
    }

    this.addProperty = function addProperty(form){
        var newProperty = new Property(form)
        properties.unshift(newProperty)
    }

}