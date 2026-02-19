// lib/constants.js
import { Linkedin, Facebook, Instagram, Globe } from "lucide-react";
import { FaFacebookF, FaGlobe, FaLinkedinIn } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";


export const COMPANY = {
  name: "Leaf-Loam",
  heroTitle: "WHERE LIFE MEETS GREEN",
  heroDescription:"We craft spaces filled with light, texture, and living beauty — gardens that nurture peace, joy, and connection.",
  email: "leafloamlandscapeservices@gmail.com",
  phone: "+91 8247779436",
  address: "Vishnavi Oasis, Hyderabad, Telangana - 500086",
  location: "Hyderabad, India",
};


// export const SOCIAL_LINKS = [
//   {
//     Icon: Linkedin,
//     href: "https://linkedin.com",
//     hover:
//       "group-hover:bg-[#0A66C2] group-hover:text-white group-hover:border-[#0A66C2]",
//   },
//   {
//     Icon: Facebook,
//     href: "https://facebook.com",
//     hover:
//       "group-hover:bg-[#1877F2] group-hover:text-white group-hover:border-[#1877F2]",
//   },
//   {
//     Icon: Globe,
//     href: "https://yourwebsite.com",
//     hover:
//       "group-hover:bg-black group-hover:text-white group-hover:border-black",
//   },
//   {
//     Icon: Instagram,
//     href: "https://instagram.com",
//     hover:
//       "group-hover:bg-gradient-to-r group-hover:from-[#405DE6] group-hover:via-[#E1306C] group-hover:to-[#FCAF45] group-hover:text-white group-hover:border-transparent",
//   },
// ];
// export const SOCIAL_LINKS = [
//   { Icon: Linkedin, href: "https://linkedin.com", type: "linkedin" },
//   { Icon: Globe, href: "https://yourwebsite.com", type: "website" },
//   { Icon: Instagram, href: "https://instagram.com", type: "instagram" },
//   { Icon: Facebook, href: "https://facebook.com", type: "facebook" },
// ];

export const SOCIAL_LINKS = [
  { Icon: FaLinkedinIn, href: "https://linkedin.com", type: "linkedin" },
  { Icon: FaGlobe, href: "https://yourwebsite.com", type: "website" },
  { Icon: RiInstagramFill, href: "https://instagram.com", type: "instagram" },
  { Icon: FaFacebookF, href: "https://facebook.com", type: "facebook" },
];


