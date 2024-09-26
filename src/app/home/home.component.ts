import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{


  onCanPlayThrough(video: HTMLVideoElement) {
    video.muted = true; // Ensure the video is muted
    video.play(); // Start playing the video
  }
}

