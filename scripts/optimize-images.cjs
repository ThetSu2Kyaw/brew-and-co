const sharp = require("sharp");
const fs = require("fs").promises;
const path = require("path");

const PUBLIC = path.resolve(__dirname, "..", "public", "images");

const IMAGES = [
  ["https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg", "hero-bg", 1920, 850],
  ["https://images.pexels.com/photos/2251552/pexels-photo-2251552.jpeg", "about-hero", 1920, 700],
  ["https://images.pexels.com/photos/2251552/pexels-photo-2251552.jpeg", "team", 1200, 700],
  ["https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg", "events/open-mic-night", 800, 500],
  ["https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg", "events/coffee-day", 800, 500],
  ["https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg", "events/online-tasting", 800, 500],
  ["https://images.pexels.com/photos/302903/pexels-photo-302903.jpeg", "menu/classic-latte", 800, 500],
  ["https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg", "menu/cappuccino", 800, 500],
  ["https://images.pexels.com/photos/1415756/pexels-photo-1415756.jpeg", "menu/flat-white", 800, 500],
  ["https://images.pexels.com/photos/20513594/pexels-photo-20513594.jpeg", "menu/pour-over", 800, 500],
  ["https://images.pexels.com/photos/6213741/pexels-photo-6213741.jpeg", "menu/mocha", 800, 500],
  ["https://images.pexels.com/photos/33975489/pexels-photo-33975489.jpeg", "menu/americano", 800, 500],
  ["https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg", "menu/cold-brew", 800, 500],
  ["https://images.pexels.com/photos/4869293/pexels-photo-4869293.jpeg", "menu/iced-latte", 800, 500],
  ["https://images.pexels.com/photos/16785688/pexels-photo-16785688.jpeg", "menu/nitro-cold-brew", 800, 500],
  ["https://images.pexels.com/photos/4438010/pexels-photo-4438010.jpeg", "menu/iced-chai-latte", 800, 500],
  ["https://images.pexels.com/photos/31599066/pexels-photo-31599066.jpeg", "menu/matcha-lemonade", 800, 500],
  ["https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg", "menu/butter-croissant", 800, 500],
  ["https://images.pexels.com/photos/10225264/pexels-photo-10225264.jpeg", "menu/blueberry-muffin", 800, 500],
  ["https://images.pexels.com/photos/5419176/pexels-photo-5419176.jpeg", "menu/cinnamon-roll", 800, 500],
  ["https://images.pexels.com/photos/31116124/pexels-photo-31116124.jpeg", "menu/chocolate-chip-cookie", 800, 500],
  ["https://images.pexels.com/photos/37022335/pexels-photo-37022335.jpeg", "menu/banana-bread", 800, 500],
  ["https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg", "menu/avocado-toast", 800, 500],
  ["https://images.pexels.com/photos/8207391/pexels-photo-8207391.jpeg", "menu/breakfast-baguette", 800, 500],
  ["https://images.pexels.com/photos/31647294/pexels-photo-31647294.jpeg", "menu/turkey-havarti", 800, 500],
  ["https://images.pexels.com/photos/17402671/pexels-photo-17402671.jpeg", "menu/tomato-basil-soup", 800, 500],
];

async function ensureDir(fp) {
  await fs.mkdir(path.dirname(fp), { recursive: true });
}

async function downloadImage(url) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  const buf = Buffer.from(await res.arrayBuffer());
  if (buf.length < 100) throw new Error(`Response too small (${buf.length} bytes)`);
  return buf;
}

async function process() {
  console.log("Brew & Co. — Image Optimizer\n");

  let ok = 0;
  let fail = 0;

  for (const [url, name, w, h] of IMAGES) {
    const outPath = `${PUBLIC}/${name}.webp`;
    const label = name.replace("menu/", "").replace("events/", "");

    try {
      await fs.access(outPath);
      console.log(`  SKIP  ${label}.webp (exists)`);
      ok++;
      continue;
    } catch {
      // proceed
    }

    console.log(`  DOWNLOADING  ${label}...`);

    try {
      const imgBuf = await downloadImage(url);
      await ensureDir(outPath);
      const info = await sharp(imgBuf).resize(w, h, { fit: "cover", position: "center" }).webp({ quality: 80 }).toFile(outPath);
      const stats = await fs.stat(outPath);
      console.log(`  DONE (${(stats.size / 1024).toFixed(0)} KB)`);
      ok++;
    } catch (err) {
      console.log(`  FAILED: ${err.message}`);
      fail++;
    }
  }

  console.log(`\nDone — ${ok} processed, ${fail} failed`);
}

process().catch(console.error);
