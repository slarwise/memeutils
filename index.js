const BASE_URL = "https://api.memegen.link";
const DEFAULT_TEXT = ["Hehe", "Cat"];

async function main() {
  const args = process.argv.slice(2);
  let text = [];
  switch (args.length) {
    case 0:
      text = DEFAULT_TEXT;
      break;
    case 1:
      text = [args[0], DEFAULT_TEXT[1]];
      break;
    default:
      text = [args[0], args[1]]
      break;
  }
  const templates_result = await fetch(`${BASE_URL}/templates`);
  const templates = await templates_result.json();
  const randomTemplate = templates[Math.floor(Math.random() * templates.length)];
  const url = `${BASE_URL}/${randomTemplate.id}/${text[0]}/${text[1]}`;
  console.log(url);
}

main();