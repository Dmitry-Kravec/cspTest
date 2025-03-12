import express from "express";

// export PORT = 9999 && node index.js
const PORT = process.env.PORT ?? 8070

const app = express();

app.use(express.json());

let bodyArr = [];
let requestsArr = [];
let postRequestsCount = 0;

app.post("/csp_report", (req, res) => {
	console.log("Post csp req:", req);

	bodyArr.push(req.body);
	requestsArr.push(req.host + "/" + req.url);
	postRequestsCount += 1;

	res.status(204).end();
});

app.get("/csp_report", (req, res) => {
	res.status(200).json({message: "/csp/report", data: {
		bodyArr,
		urls: requestsArr,
		postRequestsCount
	}})
});

app.listen(PORT, () => {
	console.log("Server started on port " + PORT)
})