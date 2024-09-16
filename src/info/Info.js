import self from "../img/self.png"
import mock1 from "../img/mock1.png"
import mock2 from "../img/mock2.png"
import mock3 from "../img/mock3.png"




export let colors = ["rgb(0,255,164)", "rgb(166,104,255)"];

export let singlePage = false;



export const info = {
    firstName: "Lahari",
    lastName: "Bodagala",
    initials: "B", 
    position: "Java Full Stack Developer",
    selfPortrait: self, 
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ 
       
        {
            emoji: '🌎',
            text: 'India'
        },
        {
            emoji: "💼",
            text: "Java Full Stack Developer"
        },
        {
            emoji: "📧",
            text: "laharibodagala@gmail.com"
        }
    ],
    socials: [
       
        {
            link: "https://www.instagram.com/twilight_butterfly14?igsh=MWJtNDV2czFwcnB1ag==",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/Bodagalalahari",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/lahari-bodagala-76a3952bb/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
        {
            link: "https://x.com/Lahari813623",
            icon: "fa fa-twitter",
            label: 'twitter'
        }


    ],
    bio: "Hello! I'm Lahari, Java  Full Stack Developer an enthusiastic and driven Java Fullstack Developer who is excited to embark on my professional journey in software development. where I developed a solid foundation in both frontend and backend technologies. I am passionate about building modern, scalable applications and eager to contribute my skills to innovative projects.",
    skills:
        {
            proficientWith: ['HTML', 'CSS', 'JavaScript', 'React JS',  ],
            exposedTo: ['SQL', 'python', 'Java', ]
        }
    ,
    hobbies: [
        {
            label: 'reading',
            emoji: '📖'
        },
        {
            label: 'travelling',
            emoji: '🗺️⁀જ✈︎'
        },
        {
            label: 'movies',
            emoji: '🎥'
        },
       

    ],
    portfolio: [ 
        {
            title: "Project 1",
            live: "https://vk-media.vercel.app/", 
            source: "https://github.com/vasanth27s/vk-media.git", 
            image: mock1
        },
        {
            title: "Project 2",
            live: "https://vk-chat-beta.vercel.app/",
            source: "https://github.com/vasanth27s/vk-chat.git",
            image: mock2
        },
        {
            title: "Project 3",
            live: "https://vk-weatherapp.vercel.app/",
            source: "https://github.com/vasanth27s/vk-weatherapp.git",
            image: mock3
        }
       
    ]
}
