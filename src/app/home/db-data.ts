

export const COURSES: any = [

    {
        id: 1,
        CarName: "SF90",
        carModel:"2015",
        carPrice:"50,000",
        CarBrand:"Ferrai",
        imgUrl: 'https://files1.porsche.com/filestore/image/multimedia/none/991-2nd-gt2-rs-modelimage-sideshot/model/ed0a4842-451d-11e7-bfe2-0019999cd470/porsche-model.png',
        Description: "A detailed walk-through of the most important part of Angular - the Core and Common modules", 
    },
    {
        id: 2,
        CarName: "Lamborghini Murciélago",
        carModel:"2017",
        carPrice:"50,000",
        CarBrand:"Lamborghini",
        imgUrl: 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg',
        Description: "Understand the RxJs Observable pattern, learn the RxJs Operators via practical examples",
     
    },

    {
        id: 3,
        CarName: 'Tata Nexon',
        carModel:"2018",
        carPrice:"50,000",
        CarBrand:"TATA",
        imgUrl: 'https://files1.porsche.com/filestore/image/multimedia/none/991-2nd-gt2-rs-modelimage-sideshot/model/ed0a4842-451d-11e7-bfe2-0019999cd470/porsche-model.png',
        Description: "Learn the modern Ngrx Ecosystem, including Store, Effects, Router Store, Ngrx Entity, Dev Tools and Schematics.",
        
    },

    {
        id: 4,
        CarName: "Studebaker Power Hawk",
        carModel:"2010",
        carPrice:"50,000",
        CarBrand:"jaguar",
        imgUrl: 'https://files1.porsche.com/filestore/image/multimedia/none/991-2nd-gt2-rs-modelimage-sideshot/model/ed0a4842-451d-11e7-bfe2-0019999cd470/porsche-model.png',
        Description: "Establish a solid layer of fundamentals, learn what's under the hood of Angular",
 
    },
    {
        id: 5,
        CarName: 'Volkswagen Beetle',
        longDescription: "Learn Web Security Fundamentals and apply them to defend an Angular / Node Application from multiple types of attacks.",
        carModel:"2017",
        carPrice:"50,000",
        CarBrand:"Volkswagen",
        imgUrl: 'https://files1.porsche.com/filestore/image/multimedia/none/991-2nd-gt2-rs-modelimage-sideshot/model/ed0a4842-451d-11e7-bfe2-0019999cd470/porsche-model.png'

    },
    {
        id: 6,
        CarName: 'Triumph Spitfire',
        longDescription: "Learn Angular Progressive Web Applications, build the future of the Web Today.",
        carModel:"2018",
        carPrice:"50,000",
        CarBrand:"TATA",
        imgUrl: 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg',
     
    },
    {
        id: 7,
        CarName: 'Aston Martin Vanquish',
        longDescription: "Learn Advanced Angular functionality typically used in Library Development. Advanced Components, Directives, Testing, Npm",
        carModel:"2013",
        carPrice:"50,000",
        CarBrand:"Aston Martin",
        imgUrl: 'https://files1.porsche.com/filestore/image/multimedia/none/991-2nd-gt2-rs-modelimage-sideshot/model/ed0a4842-451d-11e7-bfe2-0019999cd470/porsche-model.png',

    },
    {
        id: 8,
        CarName: 'McLaren Senna',
        longDescription: "Complete Guide to Typescript From Scratch: Learn the language in-depth and use it to build a Node REST API.",
        carModel:"2016",
        carPrice:"50,000",
        CarBrand:"Maruti",
        imgUrl: 'https://files1.porsche.com/filestore/image/multimedia/none/991-2nd-gt2-rs-modelimage-sideshot/model/ed0a4842-451d-11e7-bfe2-0019999cd470/porsche-model.png',

    },
    {
        id: 9,
        CarName: 'sf120',
        longDescription: "Learn the core RxJs Observable Pattern as well and many other Design Patterns for building Reactive Angular Applications.",
        carModel:"2010",
        carPrice:"50,000",
        CarBrand:"Maruti",
        imgUrl: 'https://files1.porsche.com/filestore/image/multimedia/none/991-2nd-gt2-rs-modelimage-sideshot/model/ed0a4842-451d-11e7-bfe2-0019999cd470/porsche-model.png',
    
    },
    {
        id: 10,
        CarName: "F-150 Raptor",
        carModel:"2011",
        carPrice:"50,000",
        CarBrand:"BMW",
        imgUrl: 'https://cdn.pixabay.com/photo/2012/05/29/00/43/car-49278__340.jpg',
        Description: "Build Applications with the official Angular Widget Library",
      
    }

];


export function findCourseById(courseId:number) {
    return COURSES.find(course => course.id == courseId);
}
