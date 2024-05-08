export type PlaceProp={
    image:string 
    name:string 
    desc:string 
    address?:string 
    favorite:boolean
}

export type citiesProps={
    id:number
    city:string,
    hotels:{
        name:string
        images:string[],
        type:string
        price:number,
        location:string
    }[] 
    popular:boolean 
    places:PlaceProp[]
    description:string
}

type popularPlace={
    name:string
    image:string
    desc?:string
    address?:string
    favorite:boolean
}

export const cities:citiesProps[]=[
    {
        id:1,
        popular:true,
        hotels:[
            {
                name:'',
                images:[],
                type:'',
                price:0,
                location:''
            }
        ],
        city:'Kigali',
        places:[
            {
                name:'Camellia (MIC Building)',
                image:require('../assets/camellia-mic.jpg'),
                desc:" Camellia is a bit of redemption for the MIC Building. Perched up on the 11th floor, this cafe has an open view from three sides including a cool perspective on Kigali City Tower from the front. Camellia is an affordable cafe with good food (but sometimes questionable service) and an excellent lunch buffet. Make sure you choose a nice day because this really isn’t the best place to be during a storm.",
                address:"Located at the top of (yet another) super weird, new mall in Kigali.",
                favorite:false
            },
            {
                name:'Juru Park',
                image:require('../assets/kigali-juru-park.jpg'),
                desc:"This place truly feels like it’s on top of Kigali. I’m not sure if this is the highest hill in the city, but it certainly comes close. I think it’s great that there’s a park up there and it’s a lovely place to come to relax away from the city. It’s quite wooded so you don’t get panoramic views, but there are a few awesome spots if you look around a bit. If you prefer your views with steak and cocktails, 1000 Hills Distillery isn’t far and it has a lovely view in the opposite direction.",
                address:"Head through Gisozi and keep going up and up and up (and up) and you’ll eventually find yourself at Juru Park",
                favorite:false
            },
            {
                name:'Kigali Heights',
                image:require('../assets/kigali-heights.jpg'),
                desc:"This view is less about being up high, gazing across Kigali’s epic hills and more about the view up close of the Radisson Blu hotel, wedding roundabout, and the Convention Centre. The restaurant level at Kigali Heights has become a really nice place to hang out, especially on the weekend when it’s lively with people mulling around and enjoying their day. Java House is always busy and Delizia Italiana seems to be a destination unto itself these days. You have to sit close to the outer edge to get a nice view, or you can just get up out of your seat to snap some nice photos. I like what this part of town has become – if only the Car Free Zone in the city centre would take a few hints!",
                address:"",
                favorite:false
            },
            {
                name:'Klab',
                image:require('../assets/kigali-klab.jpg'),
                desc:"The kLab takes up the entire 6th floor of Telecom House in Kacyiru and, though this prime viewing spot is actually an office space for IT people in Rwanda, they’re pretty open to visitors and also run regular events. So you should be able to weasel your way up to the top floor one way or another. The best part about this view is that you’ve got an almost 360 degree view of the city from Kacyiru back across to Nyarutarama and Gacuriro plus you can see over to Kimihurura and then across to town and beyond. If you’re lucky enough to be up here during a crazy rain storm it’s pretty spectacular",
                address:"The kLab takes up the entire 6th floor of Telecom House in Kacyiru",
                favorite:false
            },
            {
                name:'Inzora Rooftop Cafe',
                image:require('../assets/kigali-inzora-rooftop-cafe.jpg'),
                desc:"This lovely little cafe has a wonderful view from the side of the hill in Kacyiru back to the city and it’s an awesome spot to watch the weather roll. If the main cafe section isn’t good enough for you, you can head up to their rooftop to really take in the scenery. Inzora Rooftop Cafe gets my vote for the best place for the most spectacular sunsets. They have a perfect view of the sun going down behind the city and I’m always blown away by how beautiful Kigali is anytime I come here. Fridays are my favourite days because they have wine and a weekly cocktail along with excellent tasting boards – but it’s a wonderful spot any day of the week",
                address:"",
                favorite:false
            },
            {
                name:'Manor Hotel',
                image:require('../assets/Kigali-swimming-manor-hotel.jpg'),
                desc:"So the photo above is mostly of the hotel, the pool and the puffy clouds and doesn’t show the view at all, really, but it’s all I had! The view from the Manor is one of my original favourites, partly because you can take it in from their roof at Shere Sardar or from the grassy area beside the pool, but mostly because you can a great panorama of a good portion of the city. Once you start to be able to identify Kigali’s main buildings, this is a good place to come to see how the city fits together and where everything is. Plus you can eat Indian food or sip a cocktail at the same time which you can’t really argue with",
                address:"",
                favorite:false
            },
            {
                name:'Mount Kigali',
                image:require('../assets/kigali-mount-kigali.jpg'),
                desc:"It look me ages to finally hike up Mount Kigali and I was really angry at myself for taking so long. It’s really stunning up there! The air is fresh, there are forests you can actually walk in, and it’s full of lovely views everywhere you turn. Most of the best views I found were more towards the opposite side of the city and it’s amazing to see bustling Kigali on one side of the hill and what seems like vast countryside just on the opposite side. If you want something to do while you’re up there, head to Fazenda Sengha for a spot of horse riding, zip lining, or archery. It’s a great place for a family day out up on the Mount. Or if you’re less into sports and more into beers, there are a couple of local pubs close to the top as well",
                address:"",
                favorite:false
            },
            {
                name:'MTN Centre',
                image:require('../assets/kigali-mtn-centre.jpg'),
                desc:"Sip a coffee on the balcony at Bourbon MTN and take in an amazing view back over Green Hills school down the back of Nyarutarama. The view is the opposite side of the hill to the one you get from the Manor Hotel and it’s a lot more green and countryside-ish",
                address:'Nyarutarama',
                favorite:false
            },
            {
                name:'Papyrus',
                image:require('../assets/kigali-papyrus.jpg'),
                desc:"I’m guessing that most of us only wander into Papyrus when the sun has gone down. In fact, I don’t know if I’ve ever seen Papyrus during the daylight hours and I even had to outsource this photo (thanks Sean!) to capture it in sunny and sober light. But whether you’re here during the day or whether you lurk in the rooftop shadows under the moonlight, you have to agree that the view is pretty spectacular. Since this photo was taken the hill opposite Papyrus has been developed with lots of new buildings that shine back at you with lots of sparkling lights which is quite pretty",
                address:'',
                favorite:false
            },
            {
                name:'Pili Pili',
                image:require('../assets/kigali-pili-pili.jpg'),
                desc:"I think Pili Pili is my top pick for the best view in Kigali. Not only is it perched high on a hill, the restaurant itself has a bunch of different vantage points to take in. Chill by the pool as you look over the city, or head up to their second level for an even better look. Their location way out in Kibagabaga means that you have a view of pretty much the entire city unfolding below you. It’s a bit of a trek to get out here but absolutely worth the trip",
                address:'Kibagabaga',
                favorite:false
            },
            {
                name:'Pure Africa',
                image:require("../assets/kigali-pure-africa-coffee.jpg"),
                desc:"This new cafe in Kimihurura has a view similar to Papyrus but from a bit further up the hill. Plus it’s a cafe and a bit of a more relaxed daytime hangout spot. I like that it feels like it’s sort of nestled in the trees, too. The coffee is great and it’s the sort of place you can chill out for awhile reading, working, or chatting with friends without feeling like they’re rushing you out the door.",
                address:'Kimihurura',
                favorite:false
            },
            {
                name:'Sun City Hotel',
                image:require("../assets/kigali-sun-city-hotel.jpg"),
                desc:"When I mentioned to a friend that I was planning on writing an article about the best views in Kigali, he told me about Sun City Hotel deep into the cobbled streets of Nyamirambo. I’d heard about this place but had never been until recently when I accidentally stumbled onto it. My friend speaks the truth – it’s got quite the view! Add in friendly service and some fine brochettes and it makes an awesome place for some panoramic views of Kigali and you also get a glimpse at the farmland surrounding the city. You’re find Panorama Ten to Two a bit lower on the hill which has a great view as well and is a bit more lively a bar.",
                address:'Nyamirambo',
                favorite:false
            },
            {
                name:'Ubumwe Grande',
                image:require("../assets/kigali-ubumwe-grande.jpeg"),
                desc:"The Ubumwe Grande hotel is one of the tallest buildings on one of the tallest hills in the city and, as a result, it definitely has the sexiest view. There’s a restaurant up top with a view towards Kacyiru and beyond and on the other side there’s a rooftop pool (for guests only, unfortunately) with a cool bird’s eye view of the town centre and beyond to Mount Kigali. In my opinion this is the best nighttime Kigali view because of the way the stars reflect of Kigali City Tower on a clear night. It’s all magical and stuff.",
                address:'Nyarugenge District ',
                favorite:false
            }
            
        ],
        description:"Kigali never fails to amazing me with how beautiful it is. Whether it’s walking around the city’s hills in the hot sun, zipping around town on a moto as the sun sets, or having a cocktail at some restaurant as the stars sparkle at night, it’s a stunning place. Even when it’s chucking it down with rain it still somehow manages to be magical. The skies seem so big here and you can often see the weather rolling in or out which is amazing to see. It’s less amazing when it’s rain and you’re on a moto… but it still manages to impress me!"
    },
    {
        id:2,
        popular:false,
        hotels:[
            {
                name:'',
                images:[],
                type:'',
                price:0,
                location:''
            }
        ],
        city:'Rubavu',
        places:[
            {
                name:'Lake Kivu',
                image:require('../assets/rubavu-lake-kivu.webp'),
                desc:'',
                address:'Rubavu District',
                favorite:false
            },
            {
                name:"Lake Kivu Serena Hotel",
                image:require("../assets/lake-kivuevening-shot-poolside.jpg"),
                desc:"Lake Kivu Serena Hotel is located in Rubavu on the shores of Lake Kivu, where the pristine beaches and sparkling waters of Africa’s sixth-largest lake come together in a breathtaking fashion. Lake Kivu Serena has 2 meeting rooms (15-150 pax), 66 guest rooms, restaurants and a swimming pool nestling among palm trees and manicured gardens.",
                address:"Rubavu District",
                favorite:false
            },
            {
                name:'Hill View Hotel',
                image:require("../assets/hill-view-hotel-lake.jpg"),
                desc:"Hill View Hotel Lake Kivu is located in Rubavu district on the shores of Lake Kivu. It is conveniently situated 5 minutes away from the border of Goma (DRC), 5 minutes away from Rubavu Airport and 1:30 hours away from the Volcanoes National Park. Hill View hotel offers accommodation and 3 meeting facilities with a capacity ranging from 50 to 350 people.",
                address:'Rubavu',
                favorite:false
            }
        ],
        description:''
    },
    {
        id:3,
        popular:false,
        hotels:[
            {
                name:'',
                images:[],
                type:'',
                price:0,
                location:''
            }
        ],
        city:'Ruhengeri',
        places:[
            {
                name:'Volcanoes National Park',
                image:require("../assets/volcanoes-national-park.jpg"),
                desc:"The \"Parc National de Volcans\" (or PNV as it's known by locals) lies along the Virunga Mountains, with 8 ancient volcanoes, which are shared by Rwanda, Uganda and the Democratic Republic of Congo. Just a short two hour drive from Rwanda's capital of Kigali, the park is a central location for exploring some distinctly Rwandan experiences. While a visit to the mountain gorillas is often at the top of visitor, the dramatic landscape also offers thrilling hiking and visits to the fascinating golden monkeys.",
                address:'Ruhengeri',
                favorite:false
            },
            {
                name:'Inshuti Arts and Culture Center',
                image:require('../assets/art-ruhengeri.jpg'),
                desc:'A creative art center/ gallery with a fast food restaurant and refreshments bus',
                address:'Ruhengeri',
                favorite:false
            },
            {
                name:'Mount Sabyinyo',
                image:require('../assets/mount-sabyinyo.jpeg'),
                desc:'Mount Sabyinyo is the oldest volcano of the range. It is north-east of Lake Kivu, one of the African Great Lakes, and west of Lake Bunyonyi in Uganda',
                address:'Rutshuru; Musanze',
                favorite:false
            },
            {
                name:'Mount Karisimbi',
                image:require("../assets/mount-karisimbi.jpg"),
                desc:"Mount Karisimbi a stratovolcano in the Virunga Mountains on the border between Rwanda and the Democratic Republic of Congo. At 4,507 metres (14,787 ft), Karisimbi is the highest of the eight major mountains of the mountain range, which is a part of Albertine Rift, the western branch of the East African Rift. Karisimbi is flanked by Mikeno to the north, Bisoke to the east and Nyiragongo to the west, on the other side of the Rift Valley. Karisimbi is the 11th highest mountain of Africa.",
                address:'Nord-Kivu; Nord; Ouest',
                favorite:false
            },
            {
                name:'Mount Bisoke',
                image:require('../assets/mount-bisoke-seen-from.jpg'),
                desc:'Mt. Bisoke is one of the eight volcanoes in the Virunga mountains range of the albertine Rift, the western part of east African rift.',
                address:'Rutshuru; Musanze',
                favorite:false
            },
        ],
        description:"Ruhengeri, also known as Musanze or Muhoza, is the third largest city in Rwanda and the capital of Musanze District in the Northern Province of Rwanda. The city has a population of 135,000 as of the 2022 census"
    },
    {
        id:4,
        popular:false,
        hotels:[
            {
                name:'',
                images:[],
                type:'',
                price:0,
                location:''
            }
        ],
        city:'Butare',
        places:[
            {
                name:'Murambi Genocide Memorial Center',
                image:require("../assets/hauptgebaude.jpg"),
                desc:"This is a very educational, genocide, museum, and memorial, away from all the tourists. We were the only foreigners here the day we came, and the manager of the museum took us around after all the school kids left. There’s many buildings here, some of them holding the skeletons that were not relocated, which really helped my kids understand the gravity, like no museum could do before. They also have memorials to the dead and list of the perpetrators. There’s also plaques explaining that the French people caused this genocide, how the French peacekeepers taped the locals and played volleyball on the graves. Much better than the museums in Kigali, which are more sanitized.",
                address:'Murambi',
                favorite:false
            },
            {
                name:'The Ethnographic Museum',
                image:require('../assets/national-museum-of-rwanda.jpg'),
                desc:"Tradition remains alive in this modern museum, tastefully displaying many examples of African life and culture.",
                address:'NR1, Butare',
                favorite:false
            },
            {
                name:'Butare catholic Cathedral',
                image:require("../assets/exterior.jpg"),
                desc:"The Our Lady of Wisdom (French: Cathédrale Notre-Dame de la Sagesse) or simply Cathedral of Butare, is a religious building belonging to the Catholic Church and is located in the town of Butare, in the southern part of the African country of Rwanda.",
                address:'Butare',
                favorite:false
            }

        ],
        description:"Butare (Kinyarwanda: [βú.tɑ́.ɾe]), also known as Huye and formerly known as Astrida, is a city with a population of 75,000 (2022 census) in the Southern Province of Rwanda and the capital of Huye district. It is the fifth largest town in Rwanda by population."
    }
    
]

export const mostPopularPlaces:popularPlace[]=[
   
            {
                name:"Niyo Art Gallery",
                image:require("../assets/entrance.jpg"),
                desc:"Niyo Arts center is a place for creativity to thrive; a safe haven where Rwandan artists can come and experiment with their art form, be it painting, sculpture, dance, music or drumming. The artists in residence come from all over Africa, so you can expect to see a vast array of African art on display. Niyo Art center provides a space where Rwandan creative artists can explore their talents and express themselves freely. In addition to the art, We dedicate our efforts to improving our community by giving 40% of our profit to Niyo foundation, NGO that supports women and children living in poverty in Rwanda.",
                address:"",
                favorite:false
            },
            {
                name:"Kimironko Market",
                image:require('../assets/kimirongko-market.jpg'),
                desc:"",
                address:"",
                favorite:false
            },
            {
                name:"Inema Art Center",
                image:require('../assets/peacefull-place.jpg'),
                desc:"Founded in 2012 by brothers and self-taught painters Emmanuel Nkuranga and Innocent Nkurunziza, the Inema Arts Centre's mission is to spur creativity for personal, social, and economic growth.At its core, Inema provides space for 10 artists-in-residence to explore their creative talent. Specialising in contemporary african art, Inema's artists produce painting, sculpture, and mixed media expressions, all of which is showcased at the Gallery at Inema Arts Center.Inema is also home to the following- Nziza Artworks, featuring bespoke jewelry, African linens and leatherworks made by women at the onsite Nziza Workshop- Art with a Mission, training children with limitted resources art to give them livelihood;- Inema Dance, our youth cultural dance troupe, Inema art center provides a room for weekly traditional dance classes to the experts .Inema is open daily from 8AM to 8 PM, located in Kigali in the suburb of Kacyiru on KG 563 Street. Contact ",
                address:"",
                favorite:false
            },
            {
                name:"Nyamata Church",
                image:require('../assets/1660967-nyamata-church.jpg'),
                desc:"Visited with our group on an OAT adventure. Our local guide was excellent & provided a moving & factual description of the emotionally charge massacre in 1994. The group was in tears as we imagined the horror of that day & the days to follow. A must see to not only remember what hate can cause, but to see how the ability to forgive can heal a country & it's people.",
                address:"Nyamata",
                favorite:false
            },
            {
                name:"Iby'iwacu Cultural Village",
                image:require('../assets/come-and-enjoy-our-traditional.jpg'),
                desc:"We learned about Rwanda daily life. The singing, drumming and dancing were wonderful. There was even a wedding ceremony. The whole experience was a lot of fun and entertaining. They have you participate which added to the experience.",
                address:"",
                favorite:false
            }
]

