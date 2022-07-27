module.exports = {
  after: {
    create: [
      async (context) => {
        const User = context.app.service('users').Model;
        const id = context.result.user._id;
        const populated = await User.findOne({
          _id: id,
        }).populate({
          path: 'bulletins',
          populate: { path: 'user', select: 'username' },
        });
        if (context.result.user && populated && populated.bulletins) {
          context.result.user = {
            ...context.result.user,
            bulletins: populated.bulletins,
          };
        }
        if (context.result.authentication) delete context.result.authentication;
        return context;
      },
    ]
  },
};
