import  BlogList  from './BlogList';
import useFetch from "./useFetch";
const Home = () => {
      const { data: blogs , ISPending  ,error } = useFetch('http://localhost:8000/blogs')
     
    return (
        <div className="home">
          {error && <div>{error}</div>}
          {ISPending && <div>loading....</div>}
        {blogs && <BlogList  blogs={blogs} title='all blogs!'/>  }
        </div>
     );
     
    }
 
export default Home;