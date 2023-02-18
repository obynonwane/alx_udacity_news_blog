import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  email: string = '';
  password: string = '';

  message = {};

  @Output() messageData: EventEmitter<any> = new EventEmitter();

  ngOnInit(): void {}

  submitMessage() {
    this.message = {
      email: this.email,
      password: this.password,
    };

    this.emitToParent();
    this.clearForms();
  }

  emitToParent() {
    this.messageData.emit(this.message);
  }

  clearForms() {
    this.email = '';
    this.password = '';
  }
}
