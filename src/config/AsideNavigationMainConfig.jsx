import NewsDisplayAllNews from "../components/NewsDisplayAllNews/NewsDisplayAllNews";
import NewsDisplayLostFound from "../components/NewsDisplayLostFound/NewsDisplayLostFound";
import NewsDisplayTopNews from "../components/NewsDisplayTopNews/NewsDisplayTopNews";
import NewsDisplayUpdates from "../components/NewsDisplayUpdates/NewsDisplayUpdates";
import AsideEncyclopediaIcon from "../components/icons/AsideEncyclopediaIcon";
import AsideFriendsIcon from "../components/icons/AsideFriendsIcon";
import AsideGroupsIcon from "../components/icons/AsideGroupsIcon";
import AsideMapIcon from "../components/icons/AsideMapIcon";
import AsideMessengerIcon from "../components/icons/AsideMessengerIcon";
import AsideNewsIcon from "../components/icons/AsideNewsIcon";
import AsideOtherIcon from "../components/icons/AsideOtherIcon";
import AsidePetShelterIcon from "../components/icons/AsidePetShelterIcon";
import AsidePetStoreIcon from "../components/icons/AsidePetStoreIcon";
import AsideProfileIcon from "../components/icons/AsideProfileIcon";
import AsideVetHelpIcon from "../components/icons/AsideVetHelpIcon";
import AsideVolunteerIcon from "../components/icons/AsideVolunteerIcon";
import AsideWantedIcon from "../components/icons/AsideWantedIcon";
import NewsAllNewsIcon from "../components/icons/news/NewsAllNewsIcon";
import NewsLostFoundIcon from "../components/icons/news/NewsLostFoundIcon";
import NewsTopNewsIcon from "../components/icons/news/NewsTopNewsIcon";
import NewsUptadeIcon from "../components/icons/news/NewsUptadeIcon";

// ! Every object in array must have uniqe id

export const AsideNavMain = [
    { id: 0, title: 'Profile', icon: <AsideProfileIcon />, href: 'profile', notification: '1000+' },
    { id: 1, title: 'News', icon: <AsideNewsIcon />, href: 'news', notification: '725' },
    { id: 2, title: 'Map', icon: <AsideMapIcon />, href: 'map', notification: '48' },
    { id: 3, title: 'Wanted Pets', icon: <AsideWantedIcon />, href: 'wanted', notification: '' },
    { id: 4, title: 'Encyclopedia', icon: <AsideEncyclopediaIcon />, href: 'wiki', notification: '' },
    { id: 5, title: 'Messages', icon: <AsideMessengerIcon />, href: 'messenger', notification: '4' },
    { id: 6, title: 'Friends', icon: <AsideFriendsIcon />, href: 'friends', notification: '8' },
    { id: 7, title: 'Groups', icon: <AsideGroupsIcon />, href: 'groups', notification: '' },
];

export const AsideNavServices = [
    { id: 0, title: 'Vet Help', icon: <AsideVetHelpIcon />, href: 'vethelp', notification: '' },
    { id: 1, title: 'Pet Store', icon: <AsidePetStoreIcon />, href: 'petstore', notification: '' },
    { id: 2, title: 'Pet Shelters', icon: <AsidePetShelterIcon />, href: 'petshelters', notification: '' },
    { id: 3, title: 'Volounteer teams', icon: <AsideVolunteerIcon />, href: 'voloutneers', notification: '' },
    { id: 4, title: 'Other services', icon: <AsideOtherIcon />, href: 'otherservices', notification: '' },

];

// ! id's of objects in NewsNavState and NewsDisplayItems matches (id:0 for "All News" nav batton and displayed category, etc.)
export const NewsNavState = [
    { id: 0, title: 'All News', icon: () => < NewsAllNewsIcon />, },
    { id: 1, title: 'Lost & Found', icon: () => <NewsLostFoundIcon />, },
    { id: 2, title: 'Top News', icon: () => <NewsTopNewsIcon />, },
    { id: 3, title: 'Updates', icon: () => <NewsUptadeIcon />, },
]

export const NewsDisplayItems = [
    { id: 0, content: <NewsDisplayAllNews />, },
    { id: 1, content: <NewsDisplayLostFound />, },
    { id: 2, content: <NewsDisplayTopNews />, },
    { id: 3, content: <NewsDisplayUpdates />, },
]