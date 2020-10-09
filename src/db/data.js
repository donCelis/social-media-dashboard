import fb from "../images/icon-facebook.svg";
import tw from "../images/icon-twitter.svg";
import insta from "../images/icon-instagram.svg";
import yt from "../images/icon-youtube.svg";


const dataCounter = [
  {
    name: "facebook",
    icon: fb,
    user: "@d0nCelis",
    counter: 1987,
    rank: 12,
    selector: "fb",
    state: true,
    text: "followers",
  },
  {
    name: "twitter",
    icon: tw,
    user: "@nathanf",
    counter: 1044,
    rank: 99,
    selector: "tw",
    state: true,
    text: "followers",
  },
  {
    name: "instagram",
    icon: insta,
    user: "@nathanf",
    counter: 11 + "k",
    rank: 1099,
    selector: "insta",
    state: true,
    text: "followers",
  },
  {
    name: "youtube",
    icon: yt,
    user: "Nathan F.",
    counter: 8239,
    rank: 144,
    selector: "yt",
    state: false,
    text: "subscribers",
  },
];

const dataStats = [
  {
    name: "Page Views",
    icon: fb,
    counter: 87,
    rank: 3,
    state: true,
  },
  {
    name: "Likes",
    icon: fb,
    counter: 52,
    rank: 2,
    state: false,
  },
  {
    name: "Likes",
    icon: insta,
    counter: 5462,
    rank: 2257,
    state: true,
  },
  {
    name: "Profile Views",
    icon: insta,
    counter: 52 + "k",
    rank: 1375,
    state: true,
  },
  {
    name: "Retweets",
    icon: tw,
    counter: 117,
    rank: 303,
    state: true,
  },
  {
    name: "Likes",
    icon: tw,
    counter: 507,
    rank: 553,
    state: true,
  },
  {
    name: "Likes",
    icon: yt,
    counter: 107,
    rank: 19,
    state: false,
  },
  {
    name: "Total Views",
    icon: yt,
    counter: 1407,
    rank: 12,
    state: false,
  },
];

export { dataCounter, dataStats };
