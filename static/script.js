let space_bar_Btn = document.getElementById("space-bar");
let arrow_up_Btn = document.getElementById("arrow-up");
let arrow_down_Btn = document.getElementById("arrow-down");
let arrow_left_Btn = document.getElementById("arrow-left");
let arrow_right_Btn = document.getElementById("arrow-right");
let tab_key_Btn = document.getElementById("tab-key");
let f_key_Btn = document.getElementById("f-key");
let j_key_Btn = document.getElementById("j-key");
let enter_key_Btn = document.getElementById("enter-key");

let data = {
	space_bar: false,
	arrow_up: false,
	arrow_down: false,
	arrow_left: false,
	arrow_right: false,
	tab_key: false,
	f_key: false,
	j_key: false,
	enter_key: false,
};

space_bar_Btn.addEventListener("click", function () {
	data.space_bar = true;

	// Send data using Axios
	axios
		.post("/api/space_bar", data)
		.then((res) => {
			console.log("=> Server:", res.data.message);
			data.space_bar = false;
		})
		.catch((err) => {
			console.error("Error sending data:", err);
		});
});

arrow_up_Btn.addEventListener("click", function () {
	data.arrow_up = true;

	// Send data using Axios
	axios
		.post("/api/arrow_up", data)
		.then((res) => {
			console.log("=> Server:", res.data.message);
			data.arrow_up = false;
		})
		.catch((err) => {
			console.error("Error sending data:", err);
		});
});

arrow_down_Btn.addEventListener("click", function () {
	data.arrow_down = true;

	// Send data using Axios
	axios
		.post("/api/arrow_down", data)
		.then((res) => {
			console.log("=> Server:", res.data.message);
			data.arrow_down = false;
		})
		.catch((err) => {
			console.error("Error sending data:", err);
		});
});

arrow_left_Btn.addEventListener("click", function () {
	data.arrow_left = true;

	// Send data using Axios
	axios
		.post("/api/arrow_left", data)
		.then((res) => {
			console.log("=> Server:", res.data.message);
			data.arrow_left = false;
		})
		.catch((err) => {
			console.error("Error sending data:", err);
		});
});

arrow_right_Btn.addEventListener("click", function () {
	data.arrow_right = true;

	// Send data using Axios
	axios
		.post("/api/arrow_right", data)
		.then((res) => {
			console.log("=> Server:", res.data.message);
			data.arrow_right = false;
		})
		.catch((err) => {
			console.error("Error sending data:", err);
		});
});

tab_key_Btn.addEventListener("click", function () {
	data.tab_key = true;

	// Send data using Axios
	axios
		.post("/api/tab_key", data)
		.then((res) => {
			console.log("=> Server:", res.data.message);
			data.tab_key = false;
		})
		.catch((err) => {
			console.error("Error sending data:", err);
		});
});

f_key_Btn.addEventListener("click", function () {
	data.f_key = true;

	// Send data using Axios
	axios
		.post("/api/f_key", data)
		.then((res) => {
			console.log("=> Server:", res.data.message);
			data.f_key = false;
		})
		.catch((err) => {
			console.error("Error sending data:", err);
		});
});

j_key_Btn.addEventListener("click", function () {
	data.j_key = true;

	// Send data using Axios
	axios
		.post("/api/j_key", data)
		.then((res) => {
			console.log("=> Server:", res.data.message);
			data.j_key = false;
		})
		.catch((err) => {
			console.error("Error sending data:", err);
		});
});

enter_key_Btn.addEventListener("click", function () {
	data.enter_key = true;

	// Send data using Axios
	axios
		.post("/api/enter_key", data)
		.then((res) => {
			console.log("=> Server:", res.data.message);
			data.enter_key = false;
		})
		.catch((err) => {
			console.error("Error sending data:", err);
		});
});
