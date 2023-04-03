import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  share,
  tap,
} from "rxjs";
import { log } from "./utils";
const $inputValue = document.getElementById("inputValue")
  ? (document.getElementById("inputValue") as HTMLInputElement)
  : document.createElement("div");
const $rxjs = document.getElementById("rxjs")
  ? (document.getElementById("rxjs") as HTMLInputElement)
  : document.createElement("div");
const textInput$ = fromEvent($rxjs, "keyup").pipe(
  debounceTime(300),
  map((event: Event) => (event.target as HTMLInputElement).value),
  tap(log("after deboudce")),
  map((value) => ($inputValue.innerHTML = value.trim())),
  distinctUntilChanged(),
  share()
);
textInput$.subscribe(log("after distinctUntilChanged"));
