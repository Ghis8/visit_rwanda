export type PlaceProp={
    image:string 
    name:string 
    desc:string 
    address?:string 
    favorite:boolean
}

export type citiesProps={
    id:number
    city:string 
    popular:boolean 
    places:PlaceProp[]
    description:string
}

export const cities:citiesProps[]=[
    {
        id:1,
        popular:true,
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
        city:'',
        places:[
            {
                name:'',
                image:'',
                desc:'',
                address:'',
                favorite:false
            }
        ],
        description:''
    },
    {
        id:4,
        popular:false,
        city:'',
        places:[
            {
                name:'',
                image:'',
                desc:'',
                address:'',
                favorite:false
            }
        ],
        description:''
    },
    {
        id:5,
        popular:false,
        city:'',
        places:[
            {
                name:'',
                image:'',
                desc:'',
                address:'',
                favorite:false
            }
        ],
        description:''
    },
    {
        id:6,
        popular:false,
        city:'',
        places:[
            {
                name:'',
                image:'',
                desc:'',
                address:'',
                favorite:false
            }
        ],
        description:''
    },
    {
        id:7,
        popular:false,
        city:'',
        places:[
            {
                name:'',
                image:'',
                desc:'',
                address:'',
                favorite:false
            }
        ],
        description:''
    },
    {
        id:8,
        popular:false,
        city:'',
        places:[
            {
                name:'',
                image:'',
                desc:'',
                address:'',
                favorite:false
            }
        ],
        description:''
    },
    {
        id:9,
        popular:false,
        city:'',
        places:[
            {
                name:'',
                image:'',
                desc:'',
                address:'',
                favorite:false
            }
        ],
        description:''
    },
    {
        id:10,
        popular:false,
        city:'',
        places:[
            {
                name:'',
                image:'',
                desc:'',
                address:'',
                favorite:false
            }
        ],
        description:''
    },
    {
        id:11,
        popular:false,
        city:'',
        places:[
            {
                name:'',
                image:'',
                desc:'',
                address:'',
                favorite:false
            }
        ],
        description:''
    },
    {
        id:12,
        popular:false,
        city:'',
        places:[
            {
                name:'',
                image:'',
                desc:'',
                address:'',
                favorite:false
            }
        ],
        description:''
    },
]

