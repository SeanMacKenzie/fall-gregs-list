function AnimalsService () {
    
        var animals = [{
            id: 'asklienwlakszcccssc32355432a',
            type: 'Cat',
            breed: 'Calico',
            age: '3',
            location: 'Boise',
            price: 30,
            contact: 'testcat@cats.animals',
            img: '//loremflickr.com/200/200/cat',
            description: 'nice cat. likes kids',
            title: 'Your New Cat'
        }]
    
        var id = 0
    
        function Animal(config){
            
            this.title = config.title.value
            this.id = id++
            this.age = config.age.value
            this.description = config.description.value
            this.type = config.type.value
            this.breed = config.breed.value
            this.img = config.img.value
            this.location = config.location.value
            this.contact = config.contact.value
            this.price = config.price.value
        }
    
        this.getAnimals = function getAnimals(){
            return animals
        }
    
        this.getAnimal = function getAnimal(){
            for (var i = 0; i < animals.length; i++) {
                var animal = animals[i]
                if(id == animal.id){
                    return animal
                }
            }
        }
    
        this.addAnimal = function addAnimal(form){
            
            var newAnimal = new Animal(form)
            animals.unshift(newAnimal)
        }
    }