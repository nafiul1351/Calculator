var app = Vue.createApp({
	data(){
		return{
			appName: "Calculator",
			result: "0",
			firstNumber: "",
			method: "",
			secondNumber: "",
			ownerName: "Md. Nafiul Islam",
			ownerGithubLink: "https://github.com/nafiul1351",
			currentYear: new Date().getFullYear()
		};
	},
	methods:{
		input(e){
			if (this.result == "0") {
				this.result = e.target.value;
			}
			else{
				this.result = this.result + e.target.value;
			}
		},
		plus(e){
			this.firstNumber = Number(this.result);
			this.method = e.target.value;
			this.result = "0";
		},
		minus(e){
			this.firstNumber = Number(this.result);
			this.method = e.target.value;
			this.result = "0";
		},
		multiple(e){
			this.firstNumber = Number(this.result);
			this.method = e.target.value;
			this.result = "0";
		},
		devide(e){
			this.firstNumber = Number(this.result);
			this.method = e.target.value;
			this.result = "0";
		},
		reset(){
			this.firstNumber = "";
			this.secondNumber = "";
			this.result = "0";
		},
		remove(){
			this.result = this.result.slice(0, -1);
			if (this.result == "") {
				this.result = "0";
			}
			else{
				this.result = this.result;
			}
		},
		equal(){
			if (this.method == "+") {
				this.secondNumber = Number(this.result);
				this.result = String(this.firstNumber + this.secondNumber);
			}
			else if(this.method == "-") {
				this.secondNumber = Number(this.result);
				this.result = String(this.firstNumber - this.secondNumber);
			}
			else if(this.method == "*") {
				this.secondNumber = Number(this.result);
				this.result = String(this.firstNumber * this.secondNumber);
			}
			else if(this.method == "/"){
				this.secondNumber = Number(this.result);
				this.result = String(this.firstNumber / this.secondNumber);
			}
		}
	}
});
app.mount("#app");