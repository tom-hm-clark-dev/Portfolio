import wordpressLogo from '../assets/wordpress.svg';
import shopifyLogo from '../assets/shopify.svg';
import wixLogo from '../assets/wix.svg';
import figmaLogo from '../assets/figma.svg'
import AndiraHero from '../assets/Hero-1.webp';
import type { Project } from '../types/types';

const projects: Project[] = [
    {
        slug:"andira-ltd",
        platform:wordpressLogo,
        subtitle:"Make A Difference Marketing",
        title:"Andira Ltd",
        excerpt:"This is a brief description",
        url:"https://andira.madmdev.co.uk/",
        hero:AndiraHero,
        images: [
            AndiraHero
        ],        
        roles: [
            "Designer",
            "Developer",
            "SEO"
        ],
        tech: [
            figmaLogo,
            wordpressLogo
        ],
        content: [
            {
                type:"heading",
                text:"This is a heading"
            },
            {
                type:"body",
                text:"This is a p tag"
            }
        ]
        
    },
    {
        slug:"creative-gym",
        platform:wixLogo,
        title:"Creative Gym 2.0",
        excerpt:"This is a brief description",
        url:"https://www.startcreativegym.com/"
    },
    {
        slug:"multi-connect",
        platform:wordpressLogo,
        title:"Multi-Connect",
        excerpt:"This is a brief description",
        url:"https://multi-connect.co.uk/"
    },
    {
        slug:"really-hair-extensions",
        platform:shopifyLogo,
        title:"Really Hair Extensions",
        excerpt:"This is a brief description",
        url:"https://reallyhairextensions.com/"
    },
    {
        slug:"start-digital",
        platform:wordpressLogo,
        title:"Start Digital",
        excerpt:"This is a brief description",
        url:"https://startdigitaltraining.com/"
    },
    {
        slug:"green-world-spa-products",
        platform:shopifyLogo,
        title:"Green World Spa Products",
        excerpt:"This is a brief description",
        url:"https://greenworldspaproducts.co.uk/"
    },
    {
        slug:"mind-balance-center",
        platform:wordpressLogo,
        title:"Mind Balance Center",
        excerpt:"This is a brief description",
        url:"https://mindbalancecenter.co.uk/"
    },
    {
        slug:"apex-print-design",
        platform:wordpressLogo,
        title:"Apex Print & Design",
        excerpt: "This is a brief description",
        url:"https://apexprintanddesign.madmdev.co.uk/"
    }
]

export default projects;