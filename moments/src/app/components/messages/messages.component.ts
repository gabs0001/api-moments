import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { MessagesService } from '../../services/messages.service';

@Component({
  selector: 'app-messages',
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})

export class MessagesComponent implements OnInit {
  faTimes = faTimes;

  constructor(public messagesService: MessagesService) { }

  ngOnInit(): void { }
}
