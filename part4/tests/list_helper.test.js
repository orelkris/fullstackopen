const { test, describe } = require("node:test");
const assert = require("node:assert");
const listHelper = require("../utils/list_helper");

test("dummy returns one", () => {
  const blogs = [];

  const result = listHelper.dummy(blogs);

  assert.strictEqual(result, 1);
});

describe("total likes", () => {
  test("when list only has one blog post", () => {
    const result = listHelper.totalLikes(listHelper.listWithOneBlog);

    assert.strictEqual(result, 5);
  });

  test("when list has two blog posts", () => {
    const result = listHelper.totalLikes(listHelper.listWithTwoBlogs);

    assert.strictEqual(result, 7);
  });

  test("when list has multiple blog posts", () => {
    const result = listHelper.totalLikes(listHelper.blogs);

    assert.strictEqual(result, 38);
  });
});

describe("favorite blog", () => {
  test("when list is empty", () => {
    const result = listHelper.favoriteBlog([]);

    assert.deepStrictEqual(result, null);
  });
  test("when list has a single blog post", () => {
    const result = listHelper.favoriteBlog(listHelper.listWithOneBlog);

    assert.deepStrictEqual(result, {
      title: "Go To Statement Considered Harmful",
      author: "Edsger W. Dijkstra",
      likes: 5,
    });
  });
  test("when list has many blog posts", () => {
    const result = listHelper.favoriteBlog(listHelper.blogs);

    assert.deepStrictEqual(result, {
      title: "Canonical string reduction",
      author: "Edsger W. Dijkstra",
      likes: 12,
    });
  });
});

describe("author with most blogs", () => {
  test("when list has one blog", () => {
    const result = listHelper.mostBlogs(listHelper.listWithOneBlog);
    assert.deepStrictEqual(result, {
      author: "Edsger W. Dijkstra",
      blogs: 1,
    });
  });
  test("when list has many blogs", () => {
    const result = listHelper.mostBlogs(listHelper.blogs);
    assert.deepStrictEqual(result, {
      author: "Robert C. Martin",
      blogs: 3,
    });
  });
});

describe("author with most likes", () => {
  test("when list has one blog", () => {
    const result = listHelper.mostLikes(listHelper.listWithOneBlog);
    assert.deepStrictEqual(result, {
      author: "Edsger W. Dijkstra",
      likes: 5,
    });
  });
  test("when list has many blogs", () => {
    const result = listHelper.mostLikes(listHelper.blogs);
    assert.deepStrictEqual(result, {
      author: "Edsger W. Dijkstra",
      likes: 17,
    });
  });
});
