import TypeIt from "typeit";

// document.addEventListener("DOMContentLoaded", function () {
//   new TypeIt("#type-code", {
//     strings: [
//       `<span class='blue'>import </span>
//        <span class="red"> React </span>
//        <span class="blue"> from </span>
//        <span class="green">'react</span>';`,
//       ` `,
//       `<span class='blue'>function</span>
//        <span class="red"> helloWorld </span>
//        () {`,
//       `<span class='blue'> return </span>
//        &lt;div&gt; Hello World!  &lt;/div&gt;`,
//       `}`,
//       ` `,
//       `
//          <span class='red'>  ReactDOM.render</span>(&ltHelloWorld &gt,<span class='purple'>document</span>.<span class='red'>getElementById</span>(<span class='green'>'root'</span>));`,
//       ` `,
//       ` `,
//       `// I need some coffee ! `,
//     ],
//     speed: 40,
//     waitUntilVisible: true,
//   })
//     .pause(3000)
//     .delete()
//     .type(
//       `<span class='blue'>const </span>
//        coffeeCup =
//         <span class='blue'> new </span>
//         <span class="red"> Coffee</span>
//         ();
//          <div class="text-black"> .</div>
//         <div>  <span class='blue'> if </span> ( coffeeCup.isEmpty() ) { </div>
//          <div> coffee.<span class="red">refill</span>(); </div>
//          <div>}</div>
//          <div class="text-black"> .</div>
//          <div>  <span class='blue'> if </span> ( !coffeeCup.isEmpty() ) { </div>
//          <div> coffee.<span class="red">drink</span>(); </div>
//          <div>}</div>
//          <div class="text-black"> .</div>
//          work.<span class="red">execute</span>();

//       `,
//       {}
//     )
//     .go();
// });

document.addEventListener("DOMContentLoaded", function () {
  new TypeIt("#type-code", {
    strings: [
      `<span class='blue'>const </span>
             coffeeCup =
              <span class='blue'> new </span>
              <span class="red"> Coffee</span>
              ();
               <div class="text-black"> .</div>
              <div>  <span class='blue'> if </span> ( coffeeCup.isEmpty() ) { </div>
               <div> coffee.<span class="red">refill</span>(); </div>
               <div>}</div>
               <div class="text-black"> .</div>
               <div>  <span class='blue'> if </span> ( !coffeeCup.isEmpty() ) { </div>
               <div> coffee.<span class="red">drink</span>(); </div>
               <div>}</div>
               <div class="text-black"> .</div>
               work.<span class="red">execute</span>();
            `,
    ],
    speed: 40,
    waitUntilVisible: true,
  }).go();
});
