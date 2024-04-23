export type placesProps={
    id?:number
    name:string 
    images?:string[]
    description:string[]
}

export const places:placesProps[]=[
    {
        id:1,
        name:'Kigali',
        images:[
            require('../assets/kigali1.jpg'),
            require('../assets/kigali-genocide-memorial-rwanda.jpg'),
            require('../assets/kigali-genocide-memorial-graves.jpg'),
            require('../assets/where-to-stay-kigali-rwanda.jpg'),
            require('../assets/hotels-in-kigali-serena.jpg')
        ],
        description:[
            "Since most people fly to the bustling capital city of Kigali, why not start with Kigali as one of the best places to visit in Rwanda? Kigali is the cleanest city in all of Africa, and something you'll notice as soon as you get out of the airport.",
            "The memorial is located in the Gisozi neighborhood and includes a museum, mass graves, and a research center. It’s an emotional visit and impossible to not shed a tear when you enter the the children\’s room dedicated to the young victims of the genocide. In this room, you can read very personal details like what these children wanted to become when they grow up, favorite books, and things to do. Realizing that this only happened two decades ago and that similar horrific things are still happening in other parts of our planet, is hard to imagine",
            "Other interesting things to do in Kigali is visiting the Kigali City Tower that offers panoramic views over the city, viewing local artworks at the Inema Art Center or visit the traditional Caplaki Crafts Village where you can learn about the traditional Rwandan culture, buy handcrafted souvenirs or enjoy traditional dance performances. The Kimironko Market is another tip when you like to buy locally made souvenirs.",
            "There are also some really good restaurants and bars to enjoy the nightlife in Kigali's City Center. We for example had dinner in Atelier Du Vin, a delightful place to have a generous taste of wine paired with delicious food and great views over the city.",
            "There are several options of hotels in Kigali. We stayed for example in the Kigali M-hotel, a 4-star business hotel in the Center of Kigali, located on a hill with views over the city, including an outdoor swimming pool",
            
        ]
    },
    {
        id:2,
        name:'Umusambi Village',
        images:[
            require('../assets/umusambi-village-rwanda.jpg'),
            require('../assets/umusambi-wetland-area-rwanda.jpg'),
        ],
        description:[
            "Umusambi Village Conservancy is Rwanda’s first wildlife sanctuary and nature reserve, home to disabled Grey-crowned cranes that are rescued from illegal wildlife trade and captivity. The Grey-Crowned Crane is the national bird of Uganda and has a prominent place on Uganda's flag.",
            "In Umusambi Village in Rwanda, they give these beautiful cranes that are unable to return into the wild a second chance to enjoy nature again in a restored 21-hectare wetland area.",
            
        ]
    },
    {
        id:3,
        name:'Volcanoes National Park',
        images:[
            require('../assets/volcanoes-national-park-rwanda.jpg'),
            require('../assets/gorilla-trekking-safari-rwanda.jpg'),
            require('../assets/tracking-mountain-gorillas-on-foot.jpg'),
            require('../assets/rwanda-gorilla-safari.jpg')
        ],
        description:[
            "One of the most popular activities in Rwanda is gorilla trekking in Volcanoes National Park. The country is home to over half of the world's population of critically endangered mountain gorillas. Although the number of gorillas is slowly rising due to conservation efforts, they are still endangered and need 24/7 protection. That makes it a privilege we are able to go on guided treks to see these incredible primates in their natural habitat.",
            "The trekking can be challenging, but the experience of seeing a gorilla up close is truly unforgettable.",
            "Volcanoes National Park is listed as a UNESCO World Heritage Site. The park is also home to five of the eight volcanoes of the Virunga Mountains. Enough reasons to be listed as one of the best places to see in Rwanda.",
            "Like to go on a Gorilla Trekking in Rwanda? Obtain your gorilla permit at 1500 USD in advance as there are limited spots on the daily gorilla treks. Tracking these gorillas usually takes around 4-6 hours of which you spend a maximum of one hour with a habituated Gorilla family. In my case, we tracked the Kwitonda Gorilla family; a family of 17 mountain gorillas, including a baby gorilla, living on the Gahinga mountain in Volcanoes National Park.",
            
        ]
    },
    {
        id:4,
        name:'Musanze',
        images:[
            require('../assets/musanze-volcanoes-national-park.jpg'),
            require('../assets/tiloreza-volcanoes-ecolodge-rwanda.jpg'),
        ],
        description:[
            "Musanze is a small town nearby Volcanoes National Park. The town is a perfect base for your gorilla trekking safari. If you are up for a cultural experience, you can also visit the nearby Iby'Iwacu Cultural Village. Here, you will learn more about the traditional way of life of local Rwandans and enjoy their traditional dance performances.",
            "A good affordable place to stay in Musanze, is the Tiloreza Volcanoes Ecolodge; a boutique hotel in Kinigi. Most of the tourists staying there, are participating in a gorilla trekking experience. They also have a small poolside to relax after your gorilla trek. The nice thing about Tiloreza is that they also reach out to the community to support both environmental and educational efforts."
        ]
    },
    {
        id:5,
        name:'Akagera National Park',
        images:[
            require('../assets/akagera-national-park-rwanda.jpg'),
            require('../assets/akagera-national-park-hippos.jpg'),
            require("../assets/game-drive-akagera-national-park.jpg"),
            require("../assets/lakes-akagera-national-park.jpg"),
            require("../assets/akagera-game-lodge-rwanda.webp")
        ],
        description:[
            "Managed by African Parks, Akagera National Park is located just 2,5 - 3 hours from Kigali in the eastern part of Rwanda and is known for its savannah plains, wetlands, and lakes boasting diverse wildlife. It’s one of Central Africa’s largest protected wetlands and the last remaining refuge for savannah-adapted species in Rwanda.",
            "Popular things to do in Akagera are guided game drives or self-drives with stunning mountain views as backdrop, in search of lions, leopards, herds of elephants, zebras, antelopes and towers of giraffes, as well as boat trips to spot hippos, crocodiles, and many colorful birds.",
            "Akagera borders Tanzania, benefitting from the wildlife roaming freely between these two East African countries. The national park is becoming more popular to do a full-day game drive. Despite it’s the only national park in Rwanda where you can find the Big Five, it’s still rare to spot a rhino or lion. Some of the lodges in Akagera also offer walking safaris",
            "Birdwatching lovers should visit Lake Shakani (400 bird species) and Lake Ihema (155 bird species), located in the southern section of Akagera National Park. At Lake Shakani, you can camp near the lake and take part in sports fishing. Lake Ihema is the biggest lake inside the park and popular for its boat safaris or sunset boat cruises.",
            "Akagera Game Lodge by Mantis, located inside the Akagera National Park. A beautiful lodge at the lake where you can watch a beautiful sunset and sunrise."
        ]
    },
    {
        id:6,
        name:'Nyungwe Forest',
        images:[
            require('../assets/nyungwe-forest-rwanda.jpg'),
            require('../assets/hiking-trails-nyungwe-forest.jpg'),
            require('../assets/nyungwe-national-park-rwanda.webp')
        ],
        description:[
            "When in Rwanda, you can’t miss out on Nyungwe National Park. Most tourists visit the rainforest for chimpanzee trekking, but it isn’t the only reason why Nyungwe Forest is one of the best places to visit in Rwanda.",
            "Apart from tracking chimpanzees, you are able to spot Rwanda’s national animal, the rare Golden Monkey, and other primate species such as gray-cheeked mangabeys and baboons.",
            "It’s an important conservation area in Africa with a special biodiversity of plant species, mammals, and over 300 species of birds. It’s one of the biggest montane forests remaining in Eastern Africa and visitors can take part in guided treks, canopy walks, and bird-watching tours",

        ]
    },
    {
        id:7,
        name:'Lake Kivu',
        images:[
            require('../assets/lake-kivu-rwanda.jpg'),
            require('../assets/lake-kivu-western-rwanda.jpg'),
            require('../assets/hotel-lake-kivu-rwanda.jpg')
        ],
        description:[
            "Because of its natural beauty, Lake Kivu is without a doubt one of the best places to visit in the western part of Rwanda. The lake lies on the border of Rwanda and DRC. Visitors can go on boat trips to the many islands in Rwanda’s largest lake, go fishing or hike one of the trails around the lake to enjoy its emerald-green beauty.",
            "You can even join water sport activities on the crystal clear waters of Lake Kivu, such as stand-up paddleboarding (SUP) or kayaking with local fishermen entertaining you along the way. I also highly recommend visiting one of the nearby fishing villages on the shores of Lake Kivu.",
            "Great places to stay at Lake Kivu are the Lake Kivu Serena Hotel, located in the northern part of Lake Kivu in the resort town of Rubavu or Mantis Kivu Marina Bay Hotel in Muhari, a mere 1 km from Kamembe International Airport in the South West of Rwanda, where you can have your breakfast with stunning views over Lake Kivu."
        ]
    },
]