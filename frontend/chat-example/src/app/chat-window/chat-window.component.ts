import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { v4 as uuidv4 } from 'uuid';

interface Message {
  content: string;
  sentAt: Date;
  isSent: boolean;
}

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.css']
})
export class ChatWindowComponent implements AfterViewInit {

  messages: Message[] = [];
  newMessage: string = '';
  disableInput: boolean = false;
  score: Array<number> = [0, 0, 0, 0, 0, 0, 0];
  guid: string = "";
  count = 1;
  scrollContainer: any;
  @ViewChild('scrollframe', {static: false}) scrollFrame: ElementRef | undefined;
  isNearBottom = true;

  constructor(private dataService: DataService) { 
    this.guid = uuidv4();
  }
  @ViewChild('MoodBarComponent') moodBar: any;

  ngAfterViewInit() {
    this.scrollContainer = this.scrollFrame?.nativeElement; 
  }

  sendMessage() {
    this.disableInput = true;
    if (this.newMessage.trim()) {
      this.messages.push({ content: this.newMessage, sentAt: new Date(), isSent: true });
      if(this.isUserNearBottom()) {
        this.scrollToBottom();
      }
      this.dataService.postMessage(this.newMessage, this.score, this.guid, this.count).subscribe({
        next: response => {
          this.messages.push({content: response['message'], sentAt: new Date(), isSent: false});
          this.disableInput = false;
          console.log(document.getElementById("message-input"));
          this.score = response['score'];
          this.count += 1;
          if(this.isUserNearBottom()) {
            this.scrollToBottom();
          }
          (document.getElementById("message-input") as HTMLInputElement).disabled = false;
          document.getElementById("message-input")?.focus();
        }
     });
      this.newMessage = '';
    }
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      this.sendMessage();
    }
  }

  scrollToBottom(): void {
    this.scrollContainer.scroll({
      top: this.scrollContainer.scrollHeight,
      left: 0,
      behavior: 'smooth'
    });
  }

  isUserNearBottom(): boolean {
    const threshold = 300;
    const position = this.scrollContainer.scrollTop + this.scrollContainer.offsetHeight;
    const height = this.scrollContainer.scrollHeight;
    return position > height - threshold;
  }

  scrolled(event: any): void {
    this.isNearBottom = this.isUserNearBottom();
  }
}
