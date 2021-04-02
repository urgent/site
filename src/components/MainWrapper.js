import MessageBoard from "../components/MessageBoard";
import Sidebar from "../components/Sidebar";
import data from "../data/demo.json";
import { API } from 'aws-amplify';
import { listCategorys } from '../../graphql/queries'

// this component pulls categories from AWS API
export default function MainWrapper() {
    const [categories, setCategories] = useState([]);
    
    useEffect(() => {
      fetchCategories();
    }, [])

    // fetch call to Graphql API
    async function fetchCategories() {
      const categoryData = await API.graphql({
        query: listCategorys
      });
      setCategories(categoryData.data.listCategorys.items);
    }
    // const { categories, messages } = data;
    return (

        <div className="mainWrapper">
            <Sidebar categories={categories} />
            <MessageBoard messages={messages} />
        </div>
    )
}
