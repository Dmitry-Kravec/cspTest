import express from "express";

const PORT = 8070

const app = express();

app.use(express.json());

let bodyArr = [];

app.post("/csp_report", (req, res) => {
	console.log("Post csp req:", req);
	bodyArr.push(req.body);

	res.status(204).end();
});

app.get("/csp_report", (req, res) => {
	res.status(200).json({message: "/csp/report", data: bodyArr})
});

app.listen(PORT, () => {
	console.log("Server started on port " + PORT)
})