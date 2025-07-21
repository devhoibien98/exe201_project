import { useState } from "react";

const BlogSection = () => {
  const [activeTab, setActiveTab] = useState("featured");
  const [commentText, setCommentText] = useState("");
  const [replyTo, setReplyTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "The Art of Bát Tràng Ceramics: A 600-Year Legacy",
      excerpt:
        "Discover the fascinating history and traditional techniques behind Vietnam's most famous pottery village, where artisans continue to create masterpieces using methods passed down through generations.",
      author: "Cultural Heritage Team",
      date: "December 10, 2024",
      readTime: "5 min read",
      category: "Cultural Heritage",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      featured: true,
      likes: 124,
      comments: 18,
      views: 2340,
      reactions: {
        heart: 89,
        thumbsUp: 67,
        thumbsDown: 3,
      },
      commentsList: [
        {
          id: 1,
          author: "Sarah Johnson",
          avatar:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=50&h=50&fit=crop&crop=face",
          date: "2 hours ago",
          text: "This article is absolutely fascinating! I had no idea about the 600-year history of Bát Tràng ceramics. The craftsmanship is incredible.",
          likes: 12,
          replies: [
            {
              id: 1,
              author: "Cultural Heritage Team",
              avatar:
                "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=50&h=50&fit=crop&crop=face",
              date: "1 hour ago",
              text: "Thank you Sarah! We're glad you found it interesting. The artisans in Bát Tràng are truly masters of their craft.",
              likes: 8,
            },
          ],
        },
        {
          id: 2,
          author: "Michael Chen",
          avatar:
            "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=50&h=50&fit=crop&crop=face",
          date: "4 hours ago",
          text: "I visited Bát Tràng last year and it was amazing to see the artisans at work. This article captures the essence perfectly!",
          likes: 7,
          replies: [],
        },
      ],
    },
    {
      id: 2,
      title: "Silk Weaving in Hà Đông: Threads of Tradition",
      excerpt:
        "Explore the intricate process of Vietnamese silk production, from silkworm cultivation to the final handwoven fabric that has been treasured for centuries.",
      author: "Artisan Stories",
      date: "December 8, 2024",
      readTime: "4 min read",
      category: "Artisan Stories",
      image:
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=250&fit=crop",
      featured: false,
      likes: 89,
      comments: 12,
      views: 1560,
      reactions: {
        heart: 67,
        thumbsUp: 45,
        thumbsDown: 1,
      },
      commentsList: [
        {
          id: 1,
          author: "Emma Rodriguez",
          avatar:
            "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=50&h=50&fit=crop&crop=face",
          date: "1 day ago",
          text: "The silk weaving process is so intricate! I love learning about traditional techniques.",
          likes: 5,
          replies: [],
        },
      ],
    },
    {
      id: 3,
      title: "Đông Hồ Folk Paintings: Preserving Cultural Wisdom",
      excerpt:
        "Learn about the symbolic meanings and traditional techniques behind Vietnam's iconic folk paintings, which tell stories of rural life and cultural values.",
      author: "Cultural Heritage Team",
      date: "December 5, 2024",
      readTime: "6 min read",
      category: "Cultural Heritage",
      image:
        "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
      featured: false,
      likes: 156,
      comments: 23,
      views: 3120,
      reactions: {
        heart: 134,
        thumbsUp: 98,
        thumbsDown: 2,
      },
      commentsList: [],
    },
  ];

  const [posts, setPosts] = useState(blogPosts);

  const handleReaction = (postId, reactionType) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            reactions: {
              ...post.reactions,
              [reactionType]: post.reactions[reactionType] + 1,
            },
          };
        }
        return post;
      })
    );
  };

  const handleLike = (postId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            likes: post.likes + 1,
          };
        }
        return post;
      })
    );
  };

  const handleCommentLike = (postId, commentId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            commentsList: post.commentsList.map((comment) => {
              if (comment.id === commentId) {
                return {
                  ...comment,
                  likes: comment.likes + 1,
                };
              }
              return comment;
            }),
          };
        }
        return post;
      })
    );
  };

  const handleReplyLike = (postId, commentId, replyId) => {
    setPosts(
      posts.map((post) => {
        if (post.id === postId) {
          return {
            ...post,
            commentsList: post.commentsList.map((comment) => {
              if (comment.id === commentId) {
                return {
                  ...comment,
                  replies: comment.replies.map((reply) => {
                    if (reply.id === replyId) {
                      return {
                        ...reply,
                        likes: reply.likes + 1,
                      };
                    }
                    return reply;
                  }),
                };
              }
              return comment;
            }),
          };
        }
        return post;
      })
    );
  };

  const addComment = (postId) => {
    if (commentText.trim()) {
      const newComment = {
        id: Date.now(),
        author: "You",
        avatar:
          "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=50&h=50&fit=crop&crop=face",
        date: "Just now",
        text: commentText,
        likes: 0,
        replies: [],
      };

      setPosts(
        posts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              comments: post.comments + 1,
              commentsList: [newComment, ...post.commentsList],
            };
          }
          return post;
        })
      );
      setCommentText("");
    }
  };

  const addReply = (postId, commentId) => {
    if (replyText.trim()) {
      const newReply = {
        id: Date.now(),
        author: "You",
        avatar:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=50&h=50&fit=crop&crop=face",
        date: "Just now",
        text: replyText,
        likes: 0,
      };

      setPosts(
        posts.map((post) => {
          if (post.id === postId) {
            return {
              ...post,
              commentsList: post.commentsList.map((comment) => {
                if (comment.id === commentId) {
                  return {
                    ...comment,
                    replies: [...comment.replies, newReply],
                  };
                }
                return comment;
              }),
            };
          }
          return post;
        })
      );
      setReplyText("");
      setReplyTo(null);
    }
  };

  const CommentComponent = ({ comment, postId }) => (
    <div className="border-l-2 border-vietnamese-terracotta/20 pl-4 mb-4">
      <div className="flex items-start space-x-3">
        <div className="w-10 h-10 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full overflow-hidden flex-shrink-0">
          <div className="w-full h-full bg-gradient-to-br from-vietnamese-terracotta/20 to-vietnamese-warm-orange/20 flex items-center justify-center">
            <svg
              className="w-5 h-5 text-vietnamese-terracotta"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center space-x-2 mb-1">
            <span className="font-semibold text-vietnamese-brown">
              {comment.author}
            </span>
            <span className="text-sm text-gray-500">{comment.date}</span>
          </div>
          <p className="text-gray-700 mb-2">{comment.text}</p>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => handleCommentLike(postId, comment.id)}
              className="flex items-center space-x-1 text-sm text-gray-600 hover:text-vietnamese-terracotta transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
              </svg>
              <span>{comment.likes}</span>
            </button>
            <button
              onClick={() => setReplyTo(comment.id)}
              className="text-sm text-gray-600 hover:text-vietnamese-terracotta transition-colors"
            >
              Reply
            </button>
          </div>

          {/* Reply Form */}
          {replyTo === comment.id && (
            <div className="mt-3">
              <textarea
                value={replyText}
                onChange={(e) => setReplyText(e.target.value)}
                placeholder="Write a reply..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vietnamese-terracotta focus:border-transparent resize-none"
                rows="2"
              />
              <div className="flex space-x-2 mt-2">
                <button
                  onClick={() => addReply(postId, comment.id)}
                  className="px-4 py-2 bg-vietnamese-terracotta text-white rounded-lg hover:bg-vietnamese-deep-red transition-colors"
                >
                  Reply
                </button>
                <button
                  onClick={() => {
                    setReplyTo(null);
                    setReplyText("");
                  }}
                  className="px-4 py-2 border border-gray-300 text-gray-600 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}

          {/* Nested Replies */}
          {comment.replies && comment.replies.length > 0 && (
            <div className="mt-3 space-y-3">
              {comment.replies.map((reply) => (
                <div
                  key={reply.id}
                  className="ml-6 border-l-2 border-gray-200 pl-4"
                >
                  <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full overflow-hidden flex-shrink-0">
                      <div className="w-full h-full bg-gradient-to-br from-vietnamese-terracotta/20 to-vietnamese-warm-orange/20 flex items-center justify-center">
                        <svg
                          className="w-4 h-4 text-vietnamese-terracotta"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <span className="font-semibold text-vietnamese-brown">
                          {reply.author}
                        </span>
                        <span className="text-sm text-gray-500">
                          {reply.date}
                        </span>
                      </div>
                      <p className="text-gray-700 mb-2">{reply.text}</p>
                      <button
                        onClick={() =>
                          handleReplyLike(postId, comment.id, reply.id)
                        }
                        className="flex items-center space-x-1 text-sm text-gray-600 hover:text-vietnamese-terracotta transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                        <span>{reply.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="blog" className="section-padding bg-vietnamese-beige">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary">
            Cultural Stories &{" "}
            <span className="text-vietnamese-terracotta">Artisan Tales</span>
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Dive deeper into Vietnamese culture through our blog featuring
            artisan stories, traditional techniques, and the rich heritage
            behind every handcrafted piece.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg p-1 shadow-sm">
            <button
              onClick={() => setActiveTab("featured")}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === "featured"
                  ? "bg-vietnamese-terracotta text-white"
                  : "text-gray-600 hover:text-vietnamese-terracotta"
              }`}
            >
              Featured
            </button>
            <button
              onClick={() => setActiveTab("latest")}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === "latest"
                  ? "bg-vietnamese-terracotta text-white"
                  : "text-gray-600 hover:text-vietnamese-terracotta"
              }`}
            >
              Latest
            </button>
            <button
              onClick={() => setActiveTab("popular")}
              className={`px-6 py-2 rounded-md transition-colors ${
                activeTab === "popular"
                  ? "bg-vietnamese-terracotta text-white"
                  : "text-gray-600 hover:text-vietnamese-terracotta"
              }`}
            >
              Popular
            </button>
          </div>
        </div>

        {/* Featured Post */}
        <div className="mb-12">
          {posts
            .filter((post) => post.featured)
            .map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="lg:flex">
                  {/* Image */}
                  <div className="lg:w-1/2">
                    <div className="h-64 lg:h-full bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute top-4 left-4 bg-vietnamese-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
                        {post.category}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <span>{post.date}</span>
                      <span className="mx-2">•</span>
                      <span>{post.readTime}</span>
                    </div>

                    <h3 className="text-2xl font-semibold text-vietnamese-brown mb-4 leading-tight">
                      {post.title}
                    </h3>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                      {post.excerpt}
                    </p>

                    {/* Interactive Stats */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-6">
                        <div className="flex items-center space-x-2">
                          <button
                            onClick={() => handleLike(post.id)}
                            className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors"
                          >
                            <svg
                              className="w-5 h-5"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fillRule="evenodd"
                                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span>{post.likes}</span>
                          </button>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{post.comments}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <svg
                            className="w-5 h-5 text-gray-400"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                            <path
                              fillRule="evenodd"
                              d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{post.views}</span>
                        </div>
                      </div>

                      <span className="text-sm text-vietnamese-terracotta font-medium">
                        By {post.author}
                      </span>
                    </div>

                    {/* Reaction Buttons */}
                    <div className="flex items-center space-x-4 mb-6">
                      <button
                        onClick={() => handleReaction(post.id, "heart")}
                        className="flex items-center space-x-1 px-3 py-1 bg-red-50 text-red-600 rounded-full hover:bg-red-100 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm">{post.reactions.heart}</span>
                      </button>
                      <button
                        onClick={() => handleReaction(post.id, "thumbsUp")}
                        className="flex items-center space-x-1 px-3 py-1 bg-green-50 text-green-600 rounded-full hover:bg-green-100 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                        <span className="text-sm">
                          {post.reactions.thumbsUp}
                        </span>
                      </button>
                      <button
                        onClick={() => handleReaction(post.id, "thumbsDown")}
                        className="flex items-center space-x-1 px-3 py-1 bg-red-50 text-red-600 rounded-full hover:bg-red-100 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.105-1.79l-.05-.025A4 4 0 0011.055 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
                        </svg>
                        <span className="text-sm">
                          {post.reactions.thumbsDown}
                        </span>
                      </button>
                    </div>

                    <div className="flex items-center justify-between">
                      <button className="btn-secondary">Read More</button>
                    </div>
                  </div>
                </div>

                {/* Comments Section */}
                <div className="border-t border-gray-200 p-8">
                  <h4 className="text-lg font-semibold text-vietnamese-brown mb-4">
                    Comments ({post.comments})
                  </h4>

                  {/* Add Comment */}
                  <div className="mb-6">
                    <textarea
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Share your thoughts..."
                      className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vietnamese-terracotta focus:border-transparent resize-none"
                      rows="3"
                    />
                    <div className="flex justify-end mt-2">
                      <button
                        onClick={() => addComment(post.id)}
                        className="px-6 py-2 bg-vietnamese-terracotta text-white rounded-lg hover:bg-vietnamese-deep-red transition-colors"
                      >
                        Post Comment
                      </button>
                    </div>
                  </div>

                  {/* Comments List */}
                  <div className="space-y-4">
                    {post.commentsList.map((comment) => (
                      <CommentComponent
                        key={comment.id}
                        comment={comment}
                        postId={post.id}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Other Posts Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {posts
            .filter((post) => !post.featured)
            .map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-gray-200 to-gray-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-vietnamese-terracotta text-white px-3 py-1 rounded-full text-sm font-medium">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-600 mb-3">
                    <span>{post.date}</span>
                    <span className="mx-2">•</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="text-xl font-semibold text-vietnamese-brown mb-3 leading-tight">
                    {post.title}
                  </h3>

                  <p className="text-gray-700 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Interactive Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleLike(post.id)}
                        className="flex items-center space-x-1 text-gray-600 hover:text-red-500 transition-colors"
                      >
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm">{post.likes}</span>
                      </button>
                      <div className="flex items-center space-x-1 text-gray-600">
                        <svg
                          className="w-4 h-4"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span className="text-sm">{post.comments}</span>
                      </div>
                    </div>
                    <span className="text-sm text-vietnamese-terracotta font-medium">
                      By {post.author}
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <button className="text-vietnamese-terracotta hover:text-vietnamese-deep-red font-medium transition-colors duration-200">
                      Read More →
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-vietnamese-brown mb-4">
              Stay Connected with Vietnamese Culture
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter for the latest artisan stories,
              cultural insights, and exclusive offers on authentic Vietnamese
              handicrafts.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-vietnamese-terracotta focus:border-transparent"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
