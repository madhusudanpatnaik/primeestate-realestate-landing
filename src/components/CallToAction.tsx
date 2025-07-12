

const featuredArticle = {
  image:
    "https://framerusercontent.com/images/a80zLHISSBdWuz3UJ2Q3cj65rE.png?scale-down-to=1024",
  tag: "Must Read",
  title: "The Rise of Boutique Architecture in Luxury Living",
  description:
    "Discover how boutique architecture is redefining luxury living with its focus on uniqueness, personalization, and timeless design.",
  author: {
    name: "Emily Chambers",
    role: "Marketing Consultant",
    avatar:
      "https://randomuser.me/api/portraits/women/68.jpg",
  },
  category: "Lifestyle",
  categoryColor: "bg-rose-700",
};

const articles = [
  {
    image:
      "https://framerusercontent.com/images/EdgPWd8v7Btv09CwBPd5kfEyzsI.png?scale-down-to=512",
    title: "The Future of Luxury: AI and Automation in Home Design",
    tag: "Innovation",
    tagColor: "bg-sky-400",
  },
  {
    image:
      "https://framerusercontent.com/images/hUgQw24tAoZIHJPo1yxj8ajHOs.png?scale-down-to=512",
    title: "Are Sustainable Materials the Future of Homes?",
    tag: "Sustainability",
    tagColor: "bg-emerald-700",
  },
  {
    image:
      "https://framerusercontent.com/images/3PcC76zAX9yjzRINqLAtbsyS2Y.png?scale-down-to=512",
    title: "Exploring Minimalism with a Touch of Luxury",
    tag: "Design",
    tagColor: "bg-amber-400",
  },
];

const InsightsSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16 my-16">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extralight leading-tight max-w-lg font-[300]">
          Discover insights,
          <br />
          trends, and inspiration.
        </h2>
        <button className="flex items-center gap-2 bg-black text-white rounded-full px-5 py-2 text-sm font-medium hover:brightness-90 transition">
          View all
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 12h14m-7-7l7 7-7 7"
            />
          </svg>
        </button>
      </div>

      {/* Featured Article */}
      <div className="flex flex-col md:flex-row bg-gray-100 rounded-3xl overflow-hidden mb-10 min-h-[400px] ">
        <img
          src={featuredArticle.image}
          alt={featuredArticle.title}
          className="md:w-1/2 object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none h-64 md:h-auto transition-transform duration-500 ease-in-out hover:scale-105 "
        />
        <div className="md:w-1/2 p-8 flex flex-col justify-between">
          <div>
            <span className="inline-block bg-black text-white rounded-full text-[8px] px-3 py-1  mb-4">
              {featuredArticle.tag}
            </span>
            <h3 className="text-3xl font-extralight mb-4 leading-tight">
              {featuredArticle.title}
            </h3>
            <p className="text-gray-600 mb-6 font-light text-sm">{featuredArticle.description}</p>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <img
                src={featuredArticle.author.avatar}
                alt={featuredArticle.author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="">{featuredArticle.author.name}</p>
                <p className="text-gray-500 text-sm">{featuredArticle.author.role}</p>
              </div>
            </div>
            <span
              className={`text-white text-[8px] font-light  px-2 py-1 rounded-full ${featuredArticle.categoryColor}`}
            >
              {featuredArticle.category}
            </span>
          </div>
        </div>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {articles.map((article, idx) => (
          <div key={idx} className="flex flex-col gap-3">
            <img
              src={article.image}
              alt={article.title}
              className="rounded-2xl object-cover h-48 w-full transition-transform duration-500 ease-in-out hover:scale-105"
            />
            <div className="flex justify-between items-center text-sm">
              <h4 className="font-[300]">{article.title}</h4>
              <span
                className={`text-white text-[8px] px-2 py-[0.5] rounded-full  ${article.tagColor}`}
              >
                {article.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default InsightsSection;
