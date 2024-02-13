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

export const AsideNavMain = [
    { id: 0, title: 'Profile', icon: <AsideProfileIcon />, href: '/', notification: '1000+' },
    { id: 1, title: 'News', icon: <AsideNewsIcon />, href: '/news', notification: '725' },
    { id: 2, title: 'Map', icon: <AsideMapIcon />, href: '/map', notification: '48' },
    { id: 3, title: 'Wanted Pets', icon: <AsideWantedIcon />, href: '/wanted', notification: '' },
    { id: 4, title: 'Encyclopedia', icon: <AsideEncyclopediaIcon />, href: '/wiki', notification: '' },
    { id: 5, title: 'Messages', icon: <AsideMessengerIcon />, href: '/messenger', notification: '4' },
    { id: 6, title: 'Friends', icon: <AsideFriendsIcon />, href: '/friends', notification: '8' },
    { id: 7, title: 'Groups', icon: <AsideGroupsIcon />, href: '/groups', notification: '' },
];

export const AsideNavServices = [
    { id: 0, title: 'Vet Help', icon: <AsideVetHelpIcon />, href: '/vethelp', notification: '' },
    { id: 1, title: 'Pet Store', icon: <AsidePetStoreIcon />, href: '/petstore', notification: '' },
    { id: 2, title: 'Pet Shelters', icon: <AsidePetShelterIcon />, href: '/petshelters', notification: '' },
    { id: 3, title: 'Volounteer teams', icon: <AsideVolunteerIcon />, href: '/voloutneers', notification: '' },
    { id: 4, title: 'Other services', icon: <AsideOtherIcon />, href: '/otherservices', notification: '' },

];