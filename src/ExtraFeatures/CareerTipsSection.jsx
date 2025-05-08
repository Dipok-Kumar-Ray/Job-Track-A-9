import { Link } from "react-router";

const CareerTipsSection = () => {
    const tips = [
      {
        id: 1,
        title: "How to Prepare for an Interview",
        summary: "Learn the do's and don'ts to crack your next job interview.",
        link: "/tips/interview"
      },
      {
        id: 2,
        title: "Top 10 Resume Mistakes",
        summary: "Avoid these common errors and make your resume stand out.",
        link: "/tips/resume"
      },
      {
        id: 3,
        title: "Mastering Remote Work",
        summary: "Tips on staying productive and connected while working remotely.",
        link: "/tips/remote-work"
      }
    ];
  
    return (
      <section className="py-12 bg-gray-50 w-11/12 mx-auto rounded-2xl">
        <h2 className="text-3xl font-bold text-center mb-8"> Career Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
          {tips.map(tip => (
            <div key={tip.id} className="p-6 bg-white rounded-lg shadow hover:shadow-md transition">
              <h3 className="text-lg font-semibold mb-2">{tip.title}</h3>
              <p className="text-gray-600">{tip.summary}</p>
              <Link to={tip.link} className="text-blue-500 mt-3 inline-block">Read More</Link>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default CareerTipsSection;
  