import { Component, Output, EventEmitter, Input } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  public palettes = ["#244494", "#e38337"];

  @Output() colorSelected = new EventEmitter<string>();
  @Input() colors: string[];
  @Input() extendCurrentColors: Boolean;

  ngOnInit(): void {
    if (this.extendCurrentColors && this.colors) {
      this.palettes = [...this.palettes, ...this.colors];
    } else if (this.colors) {
      this.palettes = this.colors;
    }
  }
  public setColor(color) {
    console.log(color);
  }
}
