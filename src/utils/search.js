const Search = (
  restaurants,
  setFilteredRestaurants,
  searchText,
  setSearchText
) => {
  const searchedList = restaurants.filter(
    (res) =>
      res.info.name.toLowerCase().includes(searchText.toLowerCase()) ||
      res.info.cuisines?.some((cuisine) =>
        cuisine.toLowerCase().includes(searchText.toLowerCase())
      )
  );
  setSearchText("");
  setFilteredRestaurants(searchedList);
};

export default Search;
