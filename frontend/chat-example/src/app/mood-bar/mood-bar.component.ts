import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Component({
  selector: 'mood-bar',
  templateUrl: './mood-bar.component.html',
  styleUrls: ['./mood-bar.component.css']
})
export class MoodBarComponent {

  @Input() score: Array<number> = [0, 0, 0, 0, 0, 0, 0];
  labels = ['Angry', 'Disgust', 'Fear', 'Joy', 'Neutral', 'Sadness', 'Surprise'];
}