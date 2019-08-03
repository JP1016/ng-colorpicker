import { Component, OnInit, EventEmitter, Output, Input } from "@angular/core";

@Component({
  selector: "ng-colorpicker",
  templateUrl: "./colorpicker.component.html",
  styleUrls: ["./colorpicker.component.css"]
})
export class ColorpickerComponent implements OnInit {
  public palettes = [
    "#f44336", //Red
    "#e91e63", //Pink
    "#9c27b0", //Purple
    "#673AB7", //Deep Purple
    "#3F51B5", //Indigo
    "#2196F3", //Blue
    "#03A9F4", //Light Blue
    "#00BCD4", //Cyan
    "#009688", //Teal
    "#4CAF50", //Green
    "#8BC34A", //Light Green
    "#CDDC39", //Lime
    "#FFEB3B", //Yellow
    "#FFC107", //Amber
    "#FF9800", //Orange
    "#FF5722", //Deep Orange
    "#795548", //Brown
    "#9E9E9E", //Grey
    "#000000", //Black
    "#FFFFFF" //White
  ];

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
  public selectColor(color) {
    this.colorSelected.emit(color);
  }
}
