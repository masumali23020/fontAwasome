import {
  faBook,
  faBus,
  faCamera,
  faCar,
  faCode,
  faCoffee,
  faFilm,
  faFlag,
  faGamepad,
  faHeart,
  faHome,
  faLaptop,
  faMoon,
  faMusic,
  faPlane,
  faSearch,
  faShip,
  faShoppingCart,
  faStar,
  faSun,
  faTrain,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// navber 
export const navber = [

  {
    title:<FontAwesomeIcon icon={faFlag} />,
    link: "#"
    
  },
  {
    title:"Start",
    link: "#"
  },
  {
    title: <FontAwesomeIcon icon={faSearch} />,
    link: "search"
  },
  {
    title:"Icons",
    link: "#"
  },
  {
    title:"Docs",
    link: "#"
  },
  {
    title:"Plans",
    link: "#"
  },
  {
    title:"Sopport",
    link: "#"
  },
  {
    title:"Podcast",
    link: "#"
  },
]

// icons 

 const iconData = [
  {
    id: 1,
    icon: faCoffee,
    category: 'food',
    style: 'solid',
    featured: "new In V6",
    name: 'Coffee',
    brand: false,
    classic:true,
    sharp: false,
    free: true,
    company: "classic",
    
  },
  {
    id: 2,
    icon: faMusic,
    category: 'music',
    style: 'solid',
    featured: "new In V6",
    name: 'Music',
    brand: false,
    classic:true,
    sharp: "sharp",
    free: "free",
    company: "classic",
  },
  {
    id: 3,
    icon: faLaptop,
    category: 'tecnology',
    style: 'solid',
    featured: "sponsored",
    name: 'Laptop',
    brand: true,
    classic:"classic",
    sharp: false,
    free: "free",
    company: "free",
  },
  {
    id: 4,
    icon: faGamepad,
    category: 'tecnology',
    style: 'solid',
    featured: "sponsored",
    name: 'Gamepad',
    brand: false,
    classic:true,
    sharp: false,
    free: true,
    company: "free",
  },
  {
    id: 5,
    icon: faCode,
    category: 'tecnology',
    style: 'light',
    featured: "staff Favorites",
    name: 'Code',
    brand: false,
    classic:true,
    sharp: true,
    free: true,
    company: "free",
  },
  {
    id: 6,
    icon: faFilm,
    category: 'music',
    style: 'duotone',
    featured: "staff Favorites",
    name: 'Film',
    brand: false,
    classic:true,
    sharp: true,
    free: true,
    company: "classic",
  },
  {
    id: 7,
    icon: faShoppingCart,
    category: 'tecnology',
    style: 'fas',
    featured: "new In V6",
    name: 'Shopping Cart',
    company: "classic",
  },
  {
    id: 8,
    icon: faBook,
    category: 'tecnology',
    style: 'fas',
    featured: "sponsored",
    name: 'Book',
    company: "sharp",
  },
  {
    id: 9,
    icon: faHeart,
    category: 'music',
    style: 'fas',
    featured: "sponsored",
    name: 'Heart',
    company: "classic",
  },
  {
    id: 10,
    icon: faHome,
    category: 'business',
    style: 'light',
    featured: "staff Favorites",
    name: 'Home',
    company: "Free",
  },
  {
    id: 11,
    icon: faStar,
    category: 'music',
    style: 'light',
    featured: "staff Favorites",
    name: 'Star',
    company: "Free",
  },
  {
    id: 12,
    icon: faMoon,
    category: 'business',
    style: 'light',
    featured: "new in V6",
    name: 'Moon',
    company: "Free",
  },
  {
    id: 13,
    icon: faSun,
    category: 'tecnology',
    style: 'thin',
    featured: "new in V6",
    name: 'Sun',
    company: "Free",
  },
  {
    id: 14,
    icon: faCamera,
    category: 'tecnology',
    style: 'thin',
    featured: "sponsored",
    name: 'Camera',
    company: "sharp",
  },
 
  {
    id: 16,
    icon: faCar,
    category: 'entertainment',
    style: 'thin',
    featured: "sponsored",
    name: 'Car',
    company: "brands",
  },
  {
    id: 17,
    icon: faPlane,
    category: 'entertainment',
    style: 'thin',
    featured: "new in V6",
    name: 'Plane',
    company: "brands",
  },
  {
    id: 18,
    icon: faShip,
    category: 'entertainment',
    style: 'regular',
    featured: "new in V6",
    name: 'Ship',
    company: "sharp",
  },
  {
    id: 19,
    icon: faTrain,
    category: 'entertainment',
    style: 'regular',
    featured: "sponsored",
    name: 'Train',
    company: "brands",
  },
  {
    id: 20,
    icon: faBus,
    category: 'business',
    style: 'solid',
    featured: "sponsored",
    name: 'Bus',
    company: "classic",
   
  },
];



// footers 

export const footerInf =[
 {
  id:1,
  title: "projects",
  listItem: [
    {id:1, title: "Download"},
    {id:2, title: "Changelog"},
    {id:3, title: "Commission Icons"},
    {id:4, title: "All Versions"},
  ]
 },
 {
  id:2,
  title: "Community",
  listItem: [
    {id:1, title: "GitHub"},
    {id:2, title: "Icon Requests"},
    {id:3, title: "rTwitter"},
    {id:4, title: "Blog Awesome"},
  ]
 },
 {
  id:3,
  title: "Help",
  listItem: [
    {id:1, title: "Support"},
    {id:2, title: "Troubleshooting"},
    {id:3, title: "Status "},
 
  ]
 },
 
 
]
export const policy = [
    {id:1, title: "Support"},
    {id:2, title: "Troubleshooting"},
    {id:3, title: "Status "},
    {id:5, title: "License "},
    {id:4, inf: "© Fonticons, Inc. "},
]
export default iconData;

