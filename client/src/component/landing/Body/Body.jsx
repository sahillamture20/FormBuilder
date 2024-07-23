import '../Body/style.css'
function Body() {
  return (
    <div className="containers">
      <section className="main">
        <h2>Build advanced Chatbot visually</h2>
        <p>
          Typebot gives you powerful blocks to create unique chat experiences.
          Embed them anywhere on your web/mobile apps and start collecting
          results like magic.
        </p>
        <button>Create a FormBot for Free</button>
        <img src="./assets/main-img.png" alt="FormBot Image" />
        <div className="shapes">
          <img src="./assets/main-orange-rectangle.png" alt="rectangle" />
          <img src="./assets/main-blue-bridge.png" alt="bridge" />
        </div>
      </section>
      <section className="replace">
        <h2>Replace your old school forms</h2>
        <h2>with</h2>
        <h2>chatbots</h2>
        <p>
          Typebot is a better way to ask for information. It leads to an
          increase in customer satisfaction and retention and multiply by
          <br />3<br />
          your conversion rate compared to classical forms.
        </p>
        <div>
          <img src="./assets/replace-form.png" alt="form" />
        </div>
      </section>
      <section className="experience">
        <div>
          <img src="./assets/exp.png" alt="experience" />
          <div className="info">
            <h3>Easy Building Experience</h3>
            <p>
              All you have to do is drag and drop blocks to create your app.
              Even if you have custom needs, you can always add custom code.
            </p>
          </div>
        </div>
        <div>
          <div className="info">
            <h3>Embed it in a click</h3>
            <p>
              Embedding your typebot in your applications is a walk in the park.
              Typebot gives you several step-by-step platform- specific
              instructions. Your typebot will always feel native.
            </p>
          </div>
          <img src="./assets/exp1.png" alt="click" />
        </div>
      </section>
      <section className="platform">
        <img src="./assets/platform.png" alt="platform" />
        <div className="info">
          <h3>Integrate with any platform</h3>
          <p>
            Typebot offers several native integrations blocks as well as
            instructions on how to embed typebot on particular platforms
          </p>
        </div>
      </section>
      <section className="result">
        <h3>Collect results in real-time</h3>
        <p>
          One of the main advantage of a chat application is that you collect
          the users responses on each question. <span>You will not lose any valuable
          data.</span>
        </p>
        <img src="./assets/typebot-standard.png" alt="result" />
      </section>
      <section className="features">
        <h3>And many more features</h3>
        <p>
          Typebot makes form building easy and comes with powerful features
        </p>
        <img src="./assets/features.png" alt="features" />
      </section>
      <section className="reviews">
        <p>Loved by teams and creators from all around the world</p>
        <img src="./assets/teams.png" alt="teams" />
      </section>
      <section className="last-main">
        <h3>Improve conversion and user engagement with FormBots </h3>
        <button>Create a FormBot</button>
        <p>No trial. Generous <span>free</span> plan.</p>
        <div className="shapes">
          <img src="./assets/main-orange-rectangle.png" alt="rectangle" />
          <img src="./assets/main-blue-bridge.png" alt="bridge" />
        </div>
      </section>
    </div>
  );
}

export default Body;
