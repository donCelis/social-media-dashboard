import fbElement from "../images/icon-facebook.svg";
import twElement from "../images/icon-twitter.svg";
import instaElement from "../images/icon-instagram.svg";
import ytElement from "../images/icon-youtube.svg";

const icons = {
  fb: fbElement,
  tw: twElement,
  insta: instaElement,
  yt: ytElement,
};

const dataCounter = [
  {
    name: "facebook",
    icon: icons.fb,
    user: "@nathanf",
    counter: 1987,
    rank: 12,
    selector: "fb",
    state: true,
    text: "followers",
  },
  {
    name: "twitter",
    icon: icons.tw,
    user: "@nathanf",
    counter: 1044,
    rank: 99,
    selector: "tw",
    state: true,
    text: "followers",
  },
  {
    name: "instagram",
    icon: icons.insta,
    user: "@nathanf",
    counter: 11 + "k",
    rank: 1099,
    selector: "insta",
    state: true,
    text: "followers",
  },
  {
    name: "youtube",
    icon: icons.yt,
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
    icon: icons.fb,
    counter: 87,
    rank: 3,
    state: true,
  },
  {
    name: "Likes",
    icon: icons.fb,
    counter: 52,
    rank: 2,
    state: false,
  },
  {
    name: "Likes",
    icon: icons.insta,
    counter: 5462,
    rank: 2257,
    state: true,
  },
  {
    name: "Profile Views",
    icon: icons.insta,
    counter: 52 + "k",
    rank: 1375,
    state: true,
  },
  {
    name: "Retweets",
    icon: icons.tw,
    counter: 117,
    rank: 303,
    state: true,
  },
  {
    name: "Likes",
    icon: icons.tw,
    counter: 507,
    rank: 553,
    state: true,
  },
  {
    name: "Likes",
    icon: icons.yt,
    counter: 107,
    rank: 19,
    state: false,
  },
  {
    name: "Total Views",
    icon: icons.yt,
    counter: 1407,
    rank: 12,
    state: false,
  },
];

export { dataCounter, dataStats };
