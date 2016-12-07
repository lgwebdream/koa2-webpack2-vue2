'use strict';
const data = {
  title: "Vue Vuex"
};
const indexController = {
  index() {
    return async(ctx, next) => {
      await ctx.render('index.html', data);
    }
  }
};
export default indexController;
