import React, { useState } from 'react'
import Filter from '../components/filter/Filter'
import SearchBer from '../components/searchBar/SearchBer'
import ShowConten from '../components/showConten/ShowConten'
import iconData from '../data/data'
import useTitle from '../hoock/useTitle'

const Search = () => {
  useTitle('fontawesome/search');
  const [selectedCatagory, setSelectedCatagory] = useState(null);

  // input filder 
  const [query,setQuery] = useState("");
  const handelInput = (e) => {
    setQuery(e.target.value)
  }
  
  const filterItem = iconData.filter(
    (product) => product.name.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // redio filtering 
  const handelChange = (e) => {
    setSelectedCatagory(e.target.value)
  }
    // button filtering 
       const handelLiClick = (v) =>{
      setSelectedCatagory(v)

    }
    
    const filterData = (iconData,selected, query)=> {
      let filterDatas = iconData;
      if(query) {
        filterDatas = filterItem
      }
      
      if(selected){
        filterDatas = filterDatas.filter((item) => item.style === selected || item.category === selected || item.featured === selected || item.brand === selected || item.classic === selected || item.sharp === selected || item.free === selected || item.featured === selected || item.company === selected )
      }
      return filterDatas

    }
    const result = filterData(iconData, selectedCatagory, query)
    

  return (
    <section >
      <SearchBer handelChange={handelInput} query={query} />
      <Filter handelClick={handelLiClick}  />
      <ShowConten handelChange={handelChange}  result={result}/>
     
    </section>
  )
}

export default Search