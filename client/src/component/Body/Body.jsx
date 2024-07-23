import "../Body/style.css";
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
        <h2>
          Replace your old school forms
          <br />
          with
          <br />
          chatbots
        </h2>
        <p>
          Typebot is a better way to ask for information. It leads to an
          increase in customer satisfaction and retention and multiply by
          <br />3<br />
          your conversion rate compared to classical forms.
        </p>
        <div>
          <img src="./assets/replace-form.png" alt="form" />
          {/* <img src="" alt="FormBot-form" /> */}
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
      <div>
        <h3>Collect results in real-time</h3>
        <p>
          One of the main advantage of a chat application is that you collect
          the users responses on each question. You will not lose any valuable
          data.
        </p>
        <img src="" alt="result" />
      </div>
      <div className="features">
        <div className="heading">
          <h3>And many more features</h3>
          <p>
            Typebot makes form building easy and comes with powerful features
          </p>
        </div>
        <div className="feature-cards">
          <div className="">
            <img src="" alt="" />
            <h3>Hidden Fields</h3>
            <p>
              Include data in your form URL to segment your user and use its
              data directly in your form.
            </p>
          </div>
          <div className="">
            <img src="" alt="" />
            <h3>Team Collaboration</h3>
            <p>Invite your teammates to work on your typebots with you</p>
          </div>
          <div className="">
            <img src="" alt="" />
            <h3>Link to sub typebots</h3>
            <p>Reuse your typebots in different parent bots.</p>
          </div>
          <div className="">
            <img src="" alt="" />
            <h3>Custome code</h3>
            <p>Customize everything with your own Javascript & CSS code</p>
          </div>
          <div className="">
            <img src="" alt="" />
            <h3>Custome domain</h3>
            <p>Connect your typebot to the custom URL of your choice</p>
          </div>
          <div className="">
            <img src="" alt="" />
            <h3>Folder management</h3>
            <p>
              Organize your typebots in specific folders to keep it clean and
              work with multiple clients
            </p>
          </div>
        </div>
      </div>
      <div className="reviews">
        <h3>Loved by teams and creators from all around the world</h3>
        <div className="logo">
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
          <img src="" alt="" />
        </div>
      </div>
      <div>
        <h3>Improve conversion and user engagement with FormBots </h3>
        <button>Create a FormBot</button>
        <p>No trial. Generous free plan.</p>
      </div>
    </div>
  );
}

export default Body;
