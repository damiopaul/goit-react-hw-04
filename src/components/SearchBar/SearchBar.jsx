

const SearchBar = ({onSubmit}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const topic = form.elements.topic.value;

        if(form.elements.topic.value.trim() === "") {
			alert("Please enter search term!")
			return;
		}

        onSubmit(keyword);
        form.reset();
      }
    return(
        
        <header>
  <form onSubmit={handleSubmit}>
    <input
      name="keyword"
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
    <button type="submit">Search</button>
  </form>
</header>
    )
}

export default SearchBar