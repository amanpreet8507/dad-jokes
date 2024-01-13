// GET https://icanhazdadjoke.com/j/<joke_id>


const getJokes = async () => {
  const url = "https://icanhazdadjoke.com/"
  try{
    const response = await axios.get(url, {
      headers: {
          Accept: 'application/json',
      }});
      const finalResult = response.data.joke;
      console.log(finalResult);
      return finalResult;
  }catch(error){
      console.error('Error getJokes: ', error)
  }
}

getJokes()
// console.log(() => getJokes)
// const promise = getJokes();
// const final = promise.then((data) => {return data});
const MainContent = () => { 

  return `<main>

    <h1 class="main__h1">Dad Joke of the Day</h1>
    <div class="main__joke" >"What kind of magic do cows believe in? MOODOO. ${getJokes()} "</div>


    <section class="comment-section">
    <h1 class="main__section-header">Comments</h1>
    <form id="commentForm" class="comment-section__container">
      <div class="comment-section__profile">
        <!-- add alt here later -->
        <!-- <img
          id="commentsImg"
          class="comment-section__profile-img"
          src="./assets/images/Mohan-muruge.jpg"
        /> -->
      </div>
      <div class="comment-section__form">
        <div class="comment-section__form-div">
          <label for="name" class="comment-section__label">NAME</label>
          <input
            name="name"
            placeholder="Enter your name"
            class="comment-section__field comment-section__field-name"
          />
        </div>
        <div class="comment-section__form-div">
          <label for="comment" class="comment-section__label"
            >COMMENT</label
          >
          <textarea
            name="comment"
            placeholder="Add a new comment"
            class="comment-section__field"
          ></textarea>
        </div>
        <button type="submit" class="button">
          COMMENT
        </button>
      </div>
    </form>
    <!-- Added comments Section -->
    <div class="comments__container"></div>
  </section>
</main>`;
};

export default MainContent;
