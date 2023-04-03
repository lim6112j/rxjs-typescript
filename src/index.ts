import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  map,
  share,
  tap,
} from "rxjs";
const $inputValue = document.getElementById("inputValue")!;
const textInput$ = fromEvent(document.getElementById("rxjs")!, "keyup").pipe(
  debounceTime(300),
  map((event: any) => event.target.value),
  tap((value) => console.log(value)),
  map((value) => ($inputValue.innerHTML = value.trim())),
  distinctUntilChanged(),
  share()
);
textInput$.subscribe((value) => console.log(value));
