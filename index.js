
var mathActivitySelection = prompt("Choose an Activity:\n1️⃣ Forward Counting\n2️⃣ Backward Counting\n3️⃣ Multiplication Table\n\nEnter 1, 2, or 3:");

document.writeln(`
<div class="mathfinity">
  <h1 class="title">✨ MathFinity ✨</h1>
  <p class="intro">Welcome to the magical world of numbers! Choose your Math Adventure </p>
`);

var start, end;

// ///////////////////// Forward Counting 

if (mathActivitySelection === "1") {
  start = +prompt("Enter starting number (e.g., 1)");
  end = +prompt("Enter ending number (e.g., 20)");

  if (isNaN(start) || isNaN(end) || start > end) {
    document.writeln(`<div class="error"><h2>⚠️ Invalid Range!</h2><p>Please refresh and try again.</p></div>`);
  } else {
    document.writeln(`
      <div class="activity forward">
        <h2>🔢 Forward Counting</h2>
        <p>Counting from ${start} ➡️ ${end}</p>
        <div class="numbers">
    `);
    for (let i = start; i <= end; i++) {
      document.writeln(`<span class="num">${i}</span>`);
    }
    document.writeln(`</div></div>`);
  }

  // ///////////////////// Backward Counting
} else if (mathActivitySelection === "2") {
  start = +prompt("Enter starting number (e.g., 20)");
  end = +prompt("Enter ending number (e.g., 1)");

  if (isNaN(start) || isNaN(end) || start < end) {
    document.writeln(`<div class="error"><h2>⚠️ Invalid Range!</h2><p>Please refresh and try again.</p></div>`);
  } else {
    document.writeln(`
      <div class="activity backward">
        <h2>🔁 Backward Counting</h2>
        <p>Counting from ${start} ⬅️ ${end}</p>
        <div class="numbers">
    `);
    for (let i = start; i >= end; i--) {
      document.writeln(`<span class="num">${i}</span>`);
    }
    document.writeln(`</div></div>`);
  }


  // /////////////// Multiplication Table
} else if (mathActivitySelection === "3") {
  var tableNumber = +prompt("Enter table number (e.g., 5)");
  start = +prompt("Enter starting multiplier (e.g., 1)");
  end = +prompt("Enter ending multiplier (e.g., 10)");

  if (isNaN(tableNumber) || tableNumber < 1 || start > end) {
    document.writeln(`<div class="error"><h2>⚠️ Invalid Input!</h2><p>Please refresh and try again.</p></div>`);
  } else {
    document.writeln(`
      <div class="activity table">
        <h2>✖️ Multiplication Table</h2>
        <p>Table of ${tableNumber}</p>
        <div class="table-grid">
    `);
    for (let i = start; i <= end; i++) {
      document.writeln(`<div class="table-box bounce">${tableNumber} × ${i} = ${tableNumber * i}</div>`);
    }
    document.writeln(`</div></div>`);
  }

} else {
  document.writeln(`
    <div class="error404">
      <h3>🚫 Please Select a Valid Activity!</h3>
      <p>Choose 1, 2, or 3 to enjoy your Math Adventure ✨</p>
      <img src="./assets/error.gif" alt="error" class="error-img">
    </div>
  `);
}

document.writeln(`</div>`);
