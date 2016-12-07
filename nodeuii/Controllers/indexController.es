'use strict';
const data = {
  title: "yd vue framework"
};
const indexController = {
  index() {
    return async(ctx, next) => {
      await ctx.render('index.html', data);
    }
  }
};
export default indexController;
