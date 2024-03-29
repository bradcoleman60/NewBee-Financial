const { AuthenticationError } = require("apollo-server-express");
const { Company, User } = require("../models");
const { signToken } = require("../utils/auth");

const resolvers = {
  Query: {
    user: async (parent, {_id }, context) => {
      console.log("Entered resolver")
      console.log(_id)
      // const params = _id ? { _id } : {};
      return User.findById({_id: _id});
    },
    users: async () => {
      return await User.find();
    },
    companies: async () => {
      return await Company.find();
    },
  },
  Mutation: {
    //Create a User upon new registration
    createUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },
    //Processes a user login request
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError("No profile with this email found!");
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError("Incorrect password!");
      }

      const token = signToken(user);
      return { token, user };
    },
    //Adds a company to a User's list of companies (note this is an update to User Model)
    saveCompany: async (parent, { _id, company }, context) => {
      if (!context.user) {
        throw new AuthenticationError(
          "You need to be logged in to add a company"
        );
      }

      const updatedUser = await User.findOneAndUpdate(
        // {_id: context._Id},
        { _id },
        { $push: { savedCompanies: company } },
        { new: true }
      ).populate("savedCompanies");

      return updatedUser;
    },
    //Deletes a company from a User's list of companies (note this is an update to the User Model)
    removeCompany: async (parent, { cik }, context) => {
      if (context.user) {
        const updatedUser = await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { savedCompanies: { cik } } },
          { new: true }
        ).populate("savedCompanies");
        return updatedUser;
      }
      throw new AuthenticationError(
        "You need to be logged in to remove a company."
      );
    },
  },
};

module.exports = resolvers;
