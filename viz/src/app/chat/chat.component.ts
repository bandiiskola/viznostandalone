import { Component} from '@angular/core';
import { WebsocketServiceService } from '../websocket-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  name: string = '';
  message: string = '';

  messages: { name: string; message: string }[] = [];

  constructor(private websocketService: WebsocketServiceService) {
    this.websocketService.getMessages().subscribe({
      next: (msg) => {
        try {
          const parsedMsg = JSON.parse(msg); // JSON üzenet feldolgozása
          this.messages.push(parsedMsg); // Üzenet hozzáadása a listához
        } catch (e) {
          console.error('Hibás üzenet formátum:', e);
        }
      },
      error: (error) => {
        console.error('WebSocket hiba:', error);
      },
      complete: () => {
        console.log('WebSocket kapcsolat lezárult');
      }
    });
  }

  sendMessage() {
    if (this.name.trim() && this.message.trim()) {
      const msg = {
        name: this.name,
        message: this.message
      };
      this.websocketService.sendMessage(JSON.stringify(msg)); // Üzenet küldése JSON formátumban
      this.message = ''; // Üzenet mező törlése
    } else {
      alert('Minden mezőt ki kell tölteni!');
    }
  }
}
