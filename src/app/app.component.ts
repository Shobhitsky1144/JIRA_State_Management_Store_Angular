import { Component } from "@angular/core";
import { FormGroup, FormControl, FormControlName } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  startList: any = [];
  colors: any = ["red", "yellow", "pink", "green"];
  progressList: any = [];
  completeList: any = [];
  blockedList: any = [];
  taskForms = new FormGroup({
    name: new FormControl(""),
    desc: new FormControl(""),
    color: new FormControl("")
  });
  title = "my-crud";
  submit() {
    if (this.taskForms.value.name) {
      this.startList.push({
        id: this.startList.length,
        name: this.taskForms?.value.name,
        desc: this.taskForms.value.desc,
        color: this.taskForms.value.color
      });
      this.taskForms.reset();
    } else {
      alert("please filled the data");
    }
  }
  progressData(data: any) {
    this.startList = this.startList.filter((val: any) => val.id !== data.id);
    this.progressList.push(data);
  }
  completedData(data: any) {
    this.progressList = this.progressList.filter(
      (val: any) => val.id !== data.id
    );
    this.completeList.push(data);
  }
  blockedData(data: any) {
    this.progressList = this.progressList.filter(
      (val: any) => val.id !== data.id
    );
    this.blockedList.push(data);
  }

  finishData(data: any) {
    this.completeList = this.completeList.filter(
      (val: any) => val.id !== data.id
    );
  }
  selectColor(data: any) {
    this.taskForms.value.color = data;
  }
}
