import InfoIcon from '@material-ui/icons/Info';
import PersonIcon from '@material-ui/icons/Person';
import LineWeightIcon from '@material-ui/icons/LineWeight';
const clientRoutes = [{
    path: "/",
    name: "Về Chúng Tôi",
    layout: 'public',
    icon: <InfoIcon />
}, {
    path: "/news",
    name: "Bài Viết",
    layout: 'public',
    icon: <LineWeightIcon />
},
{
    path: "/professor",
    name: "Chuyên Gia",
    layout: 'public',
    icon: <PersonIcon />
}
];
export default clientRoutes;