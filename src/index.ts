import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  share,
  tap,
} from "rxjs";
import { log } from "./utils";
const $inputValue = document.getElementById("inputValue")!;
const textInput$ = fromEvent(document.getElementById("rxjs")!, "keyup").pipe(
  debounceTime(300),
  map((event: any) => event.target.value),
  tap(log("after deboudce")),
  map((value) => ($inputValue.innerHTML = value.trim())),
  distinctUntilChanged(),
  share()
);
textInput$.subscribe(log("after distinctUntilChanged"));
