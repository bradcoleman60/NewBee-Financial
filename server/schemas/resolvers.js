
const { Company, User } = require('../models');

const resolvers = {
  Query: {
    user: async (parent, { _id }) => {
      const params = _id ? { _id } : {};
      return User.find(params);
    },
    users: async () => {
      return await User.find()
    },
    company: async () => {
        return await Company.find();
    }
  },
  Mutation: {
    //Create a User upon new registration 
    createUser: async (parent, args) => {
      const user = await User.create(args);
      return user;
    },
    //Processes a user login request
    login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
  
        if (!user) {
          throw new AuthenticationError('No profile with this email found!');
        }
  
        const correctPw = await User.isCorrectPassword(password);
  
        if (!correctPw) {
          throw new AuthenticationError('Incorrect password!');
        }
  
        const token = signToken(user);
        return { token, user };
      },
    //Adds a company to a User's list of companies (note this is an update to User Model)
    addCompany: async (parent, { _id, cik }) => {
      const user = await User.findOneAndUpdate(
        { _id },
        { $addToSet: {cik: cik} },
        { new: true }
      );
      return user;
    },
    //Deletes a company from a User's list of companies (note this is an update to the User Model)
    removeCompany: async (parent, { _id, cik }) => {
        const user = await User.findOneAndUpdate(
          { _id },
          { $pull: {cik: cik} },
          { new: true }
        );
        return user;
      },
  },
};

module.exports = resolvers;
