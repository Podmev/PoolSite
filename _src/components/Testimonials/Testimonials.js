import "./Testimonials.scss";
import content from "./testimonialsContent.js";

export default function Testimonials({ lang, defaultLang }) {
  console.log(content);
  const data = content[lang] ?? content[defaultLang];
  console.log(data);
  console.log(data.reviews);
  return (
    <section className="testimonials">
      {data.reviews.map((review) => (
        <Card review={review} titles={data.titles} key={review.name} />
      ))}
    </section>
  );
}

function Card({ review, titles }) {
  return (
    <div className="testimonials__card">
      <h3>{review.name}</h3>
      <p>{`${review.age} ${titles.ageYears}`}</p>
      <p>
        {review.activities.map((act) => (
          <span className="testimonials__activity">{act}</span>
        ))}
      </p>
      <div>{review.text}</div>
    </div>
  );
}
