import App from "./App.svelte";

var app = new App({
	target: document.body,
	intro: true,
});

window.initMap = function ready() {
	app.$set({ready: true});
};

export default app;

// Hot Module Replacement (HMR) - Remove this snippet to remove HMR.
// Learn more: https://www.snowpack.dev/#hot-module-replacement
if (import.meta.hot) {
	import.meta.hot.accept();
	import.meta.hot.dispose(() => {
		app.$destroy();
	});
}
