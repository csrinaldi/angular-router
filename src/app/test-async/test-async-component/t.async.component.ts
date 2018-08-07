import { Component, OnInit } from '@angular/core';
import {TestAsyncService} from '../test.async.service';

@Component({
  selector: 'test-async',
  templateUrl: './t.async.component.html',
  styleUrls: ['./t.async.component.css']
})
export class TAsyncComponent implements OnInit {

  constructor(private testService: TestAsyncService) { }

  ngOnInit() {

  }

  onClick() {
  }

}
