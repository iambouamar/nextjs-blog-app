import Header from '../components/header';
import withMUI from '../shared/MUI/withMUI';

const Index = ({title = "Hello from Next.js!!"}) => (
    <div>
        <Header/>
        <h2>{title} Bouamar</h2>
    </div>
);


export default withMUI(Index);