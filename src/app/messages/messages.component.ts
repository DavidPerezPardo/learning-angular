import { Component, OnInit } from '@angular/core';
// service messages import
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // message property is public because it's going to bind in the template
  // Angular only binds to public component properties.
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
