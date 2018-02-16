import AppBar from 'material-ui/AppBar';


const Header = ({ tite = "Next.js Bologging Application" }) => (
    <AppBar title={tite} showMenuIconButton={false} />
);

export default Header;