import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from 'react-query';

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

function HelloWorld() {
  const count = useSelector((state) => state.counter?.count);
  const dispatch = useDispatch(); 


console.log(count)
  const { data, error, isLoading } = useQuery('posts', fetchData); // Использование React Query
    console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;
  if(data) return (
    <div>
      <h1 className='text-gray-300'>Постики</h1>
      <p>Количество выводимых постов{count}</p>
      <button onClick={() => dispatch({ type: 'counter/increment' })}>Еще</button>
      <h2>Посты:</h2>
      <ul>
        {data.slice(0, count).map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default HelloWorld;
