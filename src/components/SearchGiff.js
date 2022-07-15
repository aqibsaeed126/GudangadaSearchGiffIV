import { useRef } from "react";

function SearchGiff(props) {
  let searchRef = useRef();

  async function getGiffImages(input) {
    let queryParam = `?api_key=y3XbEqTd2fOrd1FJ0JmAXAZR1TASAyyK&q=${input}`;
    const response = await fetch(
      " https://api.giphy.com/v1/gifs/search" + queryParam
    );
    const data = await response.json();

    props.OnGiffData(data);
  }

  function SubmitHandler(e) {
    e.preventDefault();

    let searchInput = searchRef.current.value;
    // empty input field
    searchRef.current.value = "";

    props.OnStartGetRequest(true);
    getGiffImages(searchInput);
  }

  return (
    <>
      <div>Search Giff</div>
      <div>
        <form onSubmit={SubmitHandler}>
          <div>
            <input type="text" ref={searchRef} />
          </div>
          <div>
            <button type="submit"> Search</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchGiff;
