import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular";

  constructor() {
  }

  toDataURL(url) {
    return fetch(url)
      .then(response => {
         
        return response.blob();
      })
      .then(blob => {
        console.log(blob);
        return URL.createObjectURL(blob);
      });
  }

  async download() {
    const a = document.createElement("a");
    a.href = await this.toDataURL("https://image.shutterstock.com/image-vector/example-stamp-vector-template-illustration-600w-1362869099.jpg");
      console.log(a.href);
    a.download = "test.jpg";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  }
}
