const { User, Book } = require("../models");
const { AuthenticationError } = require("apollo-server-express");

const resolvers = {
  Query: {
    me: async () => {
      return User.find().select("-__v -password");
    },
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);

      return user;
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("Incorrect credentials");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect credentials");
      }

      return user;
    },
    saveBook: async (parent, args) => {
      const book = await Book.create(args);

      return book;
    },
    removeBook: async (parent, args) => {
      const book = await Book.create(args);

      return book;
    },
  },
};

module.exports = resolvers;
