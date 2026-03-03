let attempt = 0;
let maxRetries = 5;
let success = false;

do {
    attempt++;

    const randomValue = Math.random(); // generates value between 0 and 1

    if (randomValue > 0.6) {
        success = true;
        console.log(`Attempt ${attempt}:SUCCESS`);
    } else {
        console.log(`Attempt ${attempt}:FAILED`);
    }

} while (!success && attempt < maxRetries);