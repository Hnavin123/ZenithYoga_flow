import { useState, useEffect } from "react";
import "./Home.css"; // Import CSS for styling
import Footer from "../../Footer/Footer";


const Home = () => {
  const [value, setValue] = useState(0);

  const [data, setData] = useState([]);

  const[count, setCount] = useState(0);

  const [cart, setCart] = useState([]);

  function CartIncrement() {
    
      
      setCount(count + 1);
      
    
  }

  function api() {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((response) => response.json())
      .then((json) => setData(json));
  }

  useEffect(() => {
    api();
  }, []);

  const Increment = () => {
    if (value < 15) {
      setValue(value + 1);
    }
  };
  const Decrement = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };
  return (
    <div className="description-container">
      <button onClick={Increment}>+</button>
      <button onClick={Decrement}>-</button>
      <button>{value}</button>

      <h1>🧘 Welcome to Serenity Yoga – Find Your Inner Peace</h1>
      <p>
        At <strong>Serenity Yoga</strong>, we believe in the power of yoga to
        transform the mind, body, and soul. Whether you are a beginner or an
        advanced yogi, our classes are designed to{" "}
        <strong>help you achieve balance, strength, and mindfulness</strong>.
        Yoga is an ancient practice that originated in India over 5,000 years
        ago. It is a holistic discipline that integrates physical postures
        (asanas), breathing exercises (pranayama), meditation (dhyana), and
        ethical principles to promote overall well-being. Yoga is not just about
        physical fitness; it is a way of life that enhances mental clarity,
        emotional stability, and spiritual growth. Yoga is more than just a
        workout—it's a journey to inner peace, strength, and balance. Whether
        you're looking to improve flexibility, reduce stress, or build a mindful
        lifestyle, yoga offers a path to overall well-being. Join us in
        discovering the harmony of body, mind, and soul through the power of
        yoga.
      </p>

      {/* Second Yoga Image */}
      <img
        src="https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?cs=srgb&dl=pexels-prasanthinturi-1051838.jpg&fm=jpg"
        alt="Yoga in Nature"
        className="yoga-image"
      />

      <h2>🌟 Benefits of Yoga</h2>
      {/* <h3>
        {data.title},{data.id}
      </h3> */}
      <ul className="yoga-benefits">
        <li>
          💆 Reduces Stress & Anxiety – Calms the mind and promotes relaxation.
        </li>
        <li>
          💪 Improves Flexibility & Strength – Enhances muscle tone and body
          posture.
        </li>
        <li>
          🩺 Boosts Immunity – Strengthens the immune system and overall health.
        </li>
        <li>
          🛌 Better Sleep Quality – Encourages deeper and more restful sleep.
        </li>
        <li>
          🧠 Increases Focus & Mental Clarity – Enhances concentration and
          cognitive function.
        </li>
        <li>
          ❤️ Promotes Heart Health – Supports cardiovascular health and
          circulation.
        </li>
      </ul>

      <h2>🌿 Why Choose Serenity Yoga?</h2>
      <ul>
        <li>
          <strong>🌞 Morning & Evening Sessions</strong> – Flexible timings to
          suit your schedule.
        </li>
        <li>
          <strong>🧘 Certified Yoga Instructors</strong> – Learn from the best
          with personalized guidance.
        </li>
        <li>
          <strong>🏕️ Peaceful Atmosphere</strong> – Practice yoga in a calm and
          serene environment.
        </li>
        <li>
          <strong>💆 Meditation & Breathwork</strong> – Techniques to relieve
          stress and improve focus.
        </li>
        <li>
          <strong>💪 Strength & Flexibility Training</strong> – Enhance your
          body's endurance and mobility.
        </li>
      </ul>

      <h2>✨ Our Yoga Programs</h2>
      <ul>
        <li>
          <strong>🧘 Hatha Yoga</strong> – Perfect for beginners to build
          strength and flexibility.
        </li>
        <li>
          <strong>🌊 Vinyasa Flow</strong> – A dynamic flow that syncs breath
          with movement.
        </li>
        <li>
          <strong>🕉️ Kundalini Yoga</strong> – Awakening energy through
          breathwork and meditation.
        </li>
        <li>
          <strong>🌙 Restorative Yoga</strong> – Deep relaxation to heal and
          rejuvenate.
        </li>
      </ul>

      <h2>📢 Join Our Yoga Community Today!</h2>
      <p>
        🌟 <strong>Sign up now for a FREE trial class!</strong> Start your
        journey toward a healthier and more mindful life.
      </p>

      <h3>
        🙏 Discover the true essence of yoga. Let’s begin the journey together!
        🕉️
      </h3>
      {/* <Footer /> */}

    <div>
      <h2>All API call </h2>
      <ul>
        {data.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            <div>User ID: {item.userId}</div>
            <div>ID:{item.id}</div>
            <div>Title: {item.title}</div>
            <div>Completed:{item.completed ? "Yes" : "No"}</div>
            <button onClick={CartIncrement}> Add to cart</button> 
          </li>
        ))}
      </ul>
    </div>


    </div>
  );
};

export default Home;
