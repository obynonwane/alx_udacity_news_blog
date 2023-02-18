import { Component, Injectable, OnInit } from '@angular/core';
import { PostService } from './postService/post.service';
import { ContactService } from './contact/contact.service';

@Injectable()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'news_posts';
  posts: any = [];

  constructor(
    private postService: PostService,
    private contactService: ContactService
  ) {}

  async ngOnInit(): Promise<void> {
    const response = await this.postService.getPost().subscribe((data) => {
      this.posts = data;
    });
  }

  receiveMessage(message: any) {
    this.contactService.sendMessage(message).subscribe((data) => {
      console.log(data);
    });
  }
}
