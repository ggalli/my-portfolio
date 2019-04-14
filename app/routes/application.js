import Route from "@ember/routing/route";

export default Route.extend({
  setupController(controller, model) {
    if (controller.target.url == "/") {
      controller.set("isHome", true);
    } else {
      controller.set("isHome", false);
    }
  },
  actions: {
    willTransition(transition) {
      if (transition.targetName == "index") {
        this.controller.set("isHome", true);
      } else {
        this.controller.set("isHome", false);
      }
    }
  }
});
