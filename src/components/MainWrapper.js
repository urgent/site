import { useState, useEffect } from 'react';
import MessageBoard from "../components/MessageBoard";
import Sidebar from "../components/Sidebar";
import data from "../data/demo.json";
import { API } from 'aws-amplify';
import { listCategorys } from '../../graphql/queries'

// this component pulls categories from AWS API
export default function MainWrapper() {
  // set state to hold categories
    const [categories, setCategories] = useState([]);

    // fetch categories upon component load
    useEffect(() => {
      fetchCategories();
    }, [])

    // fetch call to Graphql API
    async function fetchCategories() {
      const categoryData = await API.graphql({
        query: listCategorys
      });
      console.log(categoryData);
      setCategories(categoryData.data.listCategorys.items);
    }
    // const { categories, messages } = data;
    return (

        <div className="mainWrapper">
            <Sidebar categories={categories} />
            {/* <MessageBoard messages={messages} /> */}
        </div>
    )
}
