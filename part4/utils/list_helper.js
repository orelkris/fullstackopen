const { groupBy, orderBy } = require("lodash");

const blogs = [
  {
    _id: "5a422a851b54a676234d17f7",
    title: "React patterns",
    author: "Michael Chan",
    url: "https://reactpatterns.com/",
    likes: 7,
    __v: 0,
  },
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
    likes: 5,
    __v: 0,
  },
  {
    _id: "5a422b3a1b54a676234d17f9",
    title: "Canonical string reduction",
    author: "Edsger W. Dijkstra",
    url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
    likes: 12,
    __v: 0,
  },
  {
    _id: "5a422b891b54a676234d17fa",
    title: "First class tests",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/05/05/TestDefinitions.htmll",
    likes: 12,
    __v: 0,
  },
  {
    _id: "5a422ba71b54a676234d17fb",
    title: "TDD harms architecture",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2017/03/03/TDD-Harms-Architecture.html",
    likes: 0,
    __v: 0,
  },
  {
    _id: "5a422bc61b54a676234d17fc",
    title: "Type wars",
    author: "Robert C. Martin",
    url: "http://blog.cleancoder.com/uncle-bob/2016/05/01/TypeWars.html",
    likes: 2,
    __v: 0,
  },
];

const listWithOneBlog = [
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
    likes: 5,
    __v: 0,
  },
];

const listWithTwoBlogs = [
  {
    _id: "5a422aa71b54a676234d17f8",
    title: "Go To Statement Considered Harmful",
    author: "Edsger W. Dijkstra",
    url: "https://homepages.cwi.nl/~storm/teaching/reader/Dijkstra68.pdf",
    likes: 5,
    __v: 0,
  },
  {
    _id: "5a422aa71b54a676234d17f9",
    title: "Is React the Coolest?",
    author: "Meta",
    url: "https://facebook.com",
    likes: 2,
    __v: 0,
  },
];

const dummy = (blogs) => {
  return 1;
};

const totalLikes = (blogs) => {
  const likesReducer = (total, like) => {
    return total + like;
  };

  return blogs.map((blog) => blog.likes).reduce(likesReducer, 0);
};

const isEmptyBlogs = (blogs) => {
  return blogs.length === 0;
};

const maxLikes = (blogs) => {
  if (isEmptyBlogs(blogs)) return null;

  return Math.max(...blogs.map((blog) => blog.likes));
};

const favoriteBlog = (blogs) => {
  if (isEmptyBlogs(blogs)) return null;

  const mostLikedBlog = maxLikes(blogs);

  const findBlog = blogs.find((blog) => blog.likes === mostLikedBlog);
  return {
    title: findBlog.title,
    author: findBlog.author,
    likes: findBlog.likes,
  };
};

const getAuthor = (blog) => {
  return blog.author;
};

const mostBlogs = (blogs) => {
  const groupedByAuthor = groupBy(blogs, getAuthor);
  const orderedByMostArticles = orderBy(
    groupedByAuthor,
    ["length"],
    ["desc"]
  )[0];

  return {
    author: orderedByMostArticles[0].author,
    blogs: orderedByMostArticles.length,
  };
};

const mostLikes = (blogs) => {
  const groupedByAuthor = groupBy(blogs, getAuthor);
  const mostLiked = { author: "", likes: 0 };
  for (const author in groupedByAuthor) {
    const reduce = groupedByAuthor[author].reduce(
      (total, info) => total + info.likes,
      0
    );

    if (reduce > mostLiked.likes) {
      mostLiked.author = author;
      mostLiked.likes = reduce;
    }
  }
  return mostLiked;
};

mostLikes(blogs);

module.exports = {
  blogs,
  listWithOneBlog,
  listWithTwoBlogs,
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes,
};
