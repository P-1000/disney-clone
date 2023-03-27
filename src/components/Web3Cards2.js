
import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from "@headlessui/react"
// import { BadgeCheckIcon, ChevronDownIcon } from "@heroicons/react/solid"
import { useEffect } from 'react'


const Web3Cards2 = () => {
  
  const [data , setData] = useState([])
  useEffect(() => {

    //garbage collecton :
    let isMounted = true;

    //popular movies fetch  from tmdb
    fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=21958744bdcd83994642863edf06f583')
    .then(res => res.json())
    .then(data => setData(data.results))

    return () => { isMounted = false; };
  }, [])



  const filters = [
    { name: "last 24 hours" },
    { name: "last 7 days" },
    { name: "last 30 days" },
  ]
  
  const ranking = [
    { rank: 1, href:"#link", name: "Fake Bored Ape dsqd ezldkfn", collectionImg: "https://fancytailwind.com/static/nft2-apemut-0f38473dd603ca3aedb08c035ad87df5.png", certified: true, floorPrice: "2.8", stat: "-74,89%", totalValue: 58334.51, chain: "eth" },
    { rank: 2, href:"#link", name: "Azzuki", collectionImg: "https://fancytailwind.com/static/nft2-apemut-0f38473dd603ca3aedb08c035ad87df5.png", certified: true, floorPrice: "10.4", stat: "+102,1%", totalValue: 3456.34, chain: "eth" },
    { rank: 3, href:"#link", name: "goblintown", collectionImg: "https://fancytailwind.com/static/nft2-apemut-0f38473dd603ca3aedb08c035ad87df5.png", certified: true, floorPrice: "8.9", stat: "-44,87%", totalValue: 6784.44, chain: "eth" },
    { rank: 4, href:"#link", name: "Ghost", collectionImg: "https://fancytailwind.com/static/nft2-apemut-0f38473dd603ca3aedb08c035ad87df5.png", certified: true, floorPrice: "96.5", stat: "", totalValue: 10364.59, chain: "eth" },
    { rank: 5, href:"#link", name: "Mutant Ape", collectionImg: "https://fancytailwind.com/static/nft2-apemut-0f38473dd603ca3aedb08c035ad87df5.png", certified: true, floorPrice: "3.7", stat: "+22,65%", totalValue: 33678.22, chain: "eth" },
    { rank: 6, href:"#link", name: "Okay", collectionImg: "https://fancytailwind.com/static/nft2-apemut-0f38473dd603ca3aedb08c035ad87df5.png", certified: false, floorPrice: "11.3", stat: "+67,02%", totalValue: 90833.50, chain: "sol" },
    { rank: 7, href:"#link", name: "Doodles", collectionImg: "https://fancytailwind.com/static/nft2-apemut-0f38473dd603ca3aedb08c035ad87df5.png", certified: true, floorPrice: "20.1", stat: "+3,55%", totalValue: 2276.49, chain: "eth" },
    { rank: 8, href:"#link", name: "CryptoPunks", collectionImg: "https://fancytailwind.com/static/nft2-apemut-0f38473dd603ca3aedb08c035ad87df5.png", certified: true, floorPrice: "3.3", stat: "-6,33%", totalValue: 6533.37, chain: "eth" },
    { rank: 9, href:"#link", name: "Stargazer", collectionImg: "https://fancytailwind.com/static/nft2-apemut-0f38473dd603ca3aedb08c035ad87df5.png", certified: true, floorPrice: "13.8", stat: "-55,91%", totalValue: 29877.18, chain: "eth" },
    { rank: 10, href:"#link", name: "Psycho", collectionImg: "https://fancytailwind.com/static/nft2-apemut-0f38473dd603ca3aedb08c035ad87df5.png", certified: false, floorPrice: "1.23", stat: "+12,11%", totalValue: 48524.02, chain: "sol" },
    { rank: 11, href:"#link", name: "Binkies", collectionImg: "https://fancytailwind.com/static/nft2-apemut-0f38473dd603ca3aedb08c035ad87df5.png", certified: true, floorPrice: "3.9", stat: "", totalValue: 6577.50, chain: "eth" },
    { rank: 12, href:"#link", name: "Moonbirds", collectionImg: "https://fancytailwind.com/static/nft2-apemut-0f38473dd603ca3aedb08c035ad87df5.png", certified: true, floorPrice: "17.07", stat: "", totalValue: 20444.44, chain: "sol" },
  ]
  
  const chainLogo = {
    eth: { name: "Ethereum", abbr: "ETH", logo: "https://fancytailwind.com/static/ethereum-eth-logo-efb540af3cd94f3792f3036cb74a3ed5.png" },
    sol: { name: "Solana", abbr: "SOL", logo: "https://fancytailwind.com/static/solana-sol-logo-cf9c310f423b5a899060e71cb86ade2e.png" },
  }

  const [selected, setSelected] = useState(filters[0])

  console.log(ranking[0].stat.includes("-"));

  return (
    <div className="relative mx-auto py-8 px-2 w-full max-w-7xl h-full w-full bg-purple-900 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100">
      <div className="mx-auto max-w-5xl flex flex-col items-center">

        {/* :TITLE WITH FILTER */}
        <h2 className="relative flex flex-col sm:flex-row text-center text-xl lg:text-2xl text-black font-semibold leading-snug">
          <span>Trending Today</span>
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
              <Listbox.Button className="relative w-full flex items-end text-indigo-500 font-semibold hover:text-indigo-600">
                {/* <span className="block truncate">{selected.name}</span>
                <ChevronDownIcon className="ml-4 h-7 w-7" aria-hidden="true"/> */}
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="z-10 absolute mt-1 max-h-60 w-max overflow-auto rounded-md bg-white py-1 text-left text-lg sm:text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {filters.map((filter, filterIdx) => (
                    <Listbox.Option
                      key={filterIdx}
                      className={({ active }) =>
                        `${active ? 'shadow-lg' : 'text-gray-700'} 
                        ${filterIdx !== 0 ? "border-t-2 border-gray-100 hover:border-gray-200": ""}
                        relative cursor-default select-none py-2 pl-4 pr-4`
                      }
                      value={filter}
                    >
                      {filter.name}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </h2>


        {/* :COLLECTIONS */}
        <div className="mt-10 grid lg:grid-rows-5 grid-cols-1 md:grid-cols-2  lg:grid-cols-4 lg:grid-flow-col gap-x-20">
          {ranking && data.map(collection => (
            <a key={collection.id} className="py-5 px-3 flex items-center border-b border-gray-200 hover:shadow-lg">
              {/* ::Rank */}
               {/* <span className="mr-2 text-lg text-black font-bold">{Math.floor(collection.popularity)}</span>  */}
              {/* ::Details */}
              <div className="mr-3 flex collections-center">
                {/* :::avatar collection */}
                <div className="flex-shrink-0 relative">
                  <span className="w-12 h-12 inline-block border-2 border-gray-50 rounded-full overflow-hidden" aria-label="avatar">
                    <img src={`https://image.tmdb.org/t/p/original/${collection.poster_path}`} alt="" className="w-full h-full object-cover" />
                  </span>
                  {collection.certified &&
                    <span className="absolute bottom-1 right-0 w-5 h-5 flex justify-center items-center rounded-full bg-white">
                      {/* <BadgeCheckIcon className="flex-shrink-0 w-5 h-5 text-sky-500"/> */}
                    </span>
                  }
                </div>
                {/* :::name & floor price */}
                <div className="ml-2 flex flex-col justify-center w-32">
                  <p className="text-base text-white-700 font-bold truncate">{collection.title}</p>
                  <p className="mt-0.5 flex items-center text-xs text-gray-500 font-semibold">
                    Rating :
                    {/* <img src={chainLogo[collection.chain].logo} alt="" className="ml-1 mr-0.5 w-4 h-4" /> */}
                    <span className="text-sm text-gray-400 font-bold">{collection.vote_average}</span>
                  </p>
                </div>
              </div>
              {/* :::stats & total price */}
              <div className="flex-shrink-0 ml-auto flex flex-col items-end">
                {/* <span className={`${collection.stat.includes("-") ? "text-red-600" : "text-green-500"} text-sm`}>
                  {collection.stat !== ""
                    ? collection.stat
                    : "-"
                  }
                </span> */}
                <span className="mt-1 flex items-center">
                
                  {/* <img src={chainLogo[collection.chain].logo} alt="" className="mr-1 w-4 h-4" /> */}
                  {/* <span className="text-sm text-gray-400 font-bold">{collection.popularity}</span> */}
                </span>
              </div>
            </a>
          ))
          } 
        </div>


        {/* :GO TO RANKINGS */}
        <a href="/Stats" className="relative mt-10 inline-flex items-center px-5 py-2.5 rounded border border-transparent bg-indigo-500 text-base text-white font-bold hover:bg-indigo-600" >Go to Rankings</a>

      </div>
    </div>
  )
}

export default Web3Cards2
