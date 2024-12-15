import { useSelector, useDispatch } from 'react-redux';
import { useQuery } from '@tanstack/react-query';
import Header from '../components/user/Header';

const fetchData = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  return response.json();
};

function HelloWorld() {
  const count = useSelector((state) => state.counter?.count);
  const dispatch = useDispatch(); 


console.log(count)
const { data, error, isLoading } = useQuery({
    queryKey: ['posts'], 
    queryFn: fetchData,  
    });
  ; 
    console.log(data);
  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching data</div>;
  if(data) return (
    <div>
      <Header/>
      <div class="bg-white">
        <div class="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div class="relative isolate overflow-hidden bg-gray-900 px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
            <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 size-[64rem] -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)] sm:left-full sm:-ml-80 lg:left-1/2 lg:ml-0 lg:-translate-x-1/2 lg:translate-y-0" aria-hidden="true">
            <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
              <defs>
                <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641">
                  <stop stop-color="#7775D6" />
                  <stop offset="1" stop-color="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
            <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
              <h2 class="text-balance text-3xl font-semibold tracking-tight text-white sm:text-4xl">Boost your productivity. Start using our app today.</h2>
                <div className='mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8'>
                  <h1 className='text-gray-300'>Постики</h1>
                  <p>Количество выводимых постов{count}</p>
                  <button onClick={() => dispatch({ type: 'counter/increment' })}>Еще</button>
                  <h2>Посты:</h2>
                  <ul>
                    {data.slice(0, count).map((post) => (
                      <li key={post.id}>{post.title}</li>
                    ))}
                  </ul>
                <div/>
                <p class="mt-6 text-pretty text-lg/8 text-gray-300">Ac euismod vel sit maecenas id pellentesque eu sed consectetur. Malesuada adipiscing sagittis vel nulla.</p>
                <div class="mt-10 flex items-center justify-center gap-x-6 lg:justify-start">
                  <a href="#" class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Get started</a>
                  <a href="#" class="text-sm/6 font-semibold text-white">Learn more <span aria-hidden="true">→</span></a>
                </div>
              </div>
              <div class="relative mt-16 h-80 lg:mt-8">
                <img class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10" src="https://tailwindui.com/plus/img/component-images/dark-project-app-screenshot.png" alt="App screenshot" width="1824" height="1080"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  
  );
}

export default HelloWorld;
