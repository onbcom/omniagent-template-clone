import { writeFile, mkdir } from "fs/promises";
import { existsSync } from "fs";
import { join, extname } from "path";

const BASE = "public/images";

const IMAGE_URLS = [
  // Favicon
  { url: "https://framerusercontent.com/images/aEwx6eeM18pMrwRxK4bYPLXhduk.png", name: "favicon.png", dir: "public/seo" },
  // Background
  { url: "https://framerusercontent.com/images/g0QcWrxr87K0ufOxIUFBakwYA8.png", name: "hero-bg-pattern.png" },
  // Hero dashboard
  { url: "https://framerusercontent.com/images/RaTk45fj3liAREeMLUGV34vBf9Y.png?width=1536&height=1024", name: "hero-dashboard.png" },
  // Avatars
  { url: "https://framerusercontent.com/images/r3db9Fvw0izSpE5Mvg1s4n3yw.png", name: "avatar-1.png" },
  { url: "https://framerusercontent.com/images/UaCrJmEIuheeobCl9Q4FRgIXmk.png", name: "avatar-2.png" },
  { url: "https://framerusercontent.com/images/a2Z3ZvmZfdFDbQtSD3NwCBZTA4.png", name: "avatar-3.png" },
  { url: "https://framerusercontent.com/images/ZI5BuIsbw50xj9j15FIyBzAtj84.png", name: "avatar-4.png" },
  { url: "https://framerusercontent.com/images/diwW1emLUnGNlb0jlCsaYxh6dU.png", name: "avatar-5.png" },
  { url: "https://framerusercontent.com/images/d7vqdAkEKKvkSFhhZeJzzML8ew.png", name: "avatar-6.png" },
  { url: "https://framerusercontent.com/images/4Tu3MLr2nBnSK71MQFtgY6HqoAI.png", name: "avatar-7.png" },
  { url: "https://framerusercontent.com/images/YdOM0TgSRNQlZCZYiSVRSV8wg8.png", name: "avatar-8.png" },
  // Logo / brand
  { url: "https://framerusercontent.com/images/feBvkfMDBTYj2ha7KII7rIM8UQ.png", name: "omni-logo.png" },
  { url: "https://framerusercontent.com/images/oXyjAVmr7px4KHJsRHyg36qFU.png?width=192&height=192", name: "omni-icon-small.png" },
  { url: "https://framerusercontent.com/images/HaHpdvUDmPrc74XmeJ9ueLwy0.png?width=512&height=512", name: "omni-icon-large.png" },
  // Feature section images
  { url: "https://framerusercontent.com/images/tPHtRe7DKNaA38JY5kthLVqJkCo.png?width=334&height=334", name: "integration-icons.png" },
  { url: "https://framerusercontent.com/images/hLqPV5T4OGRpjlGYRH7TcyG7H4E.png?width=2400&height=1350", name: "dashboard-mockup.png" },
  { url: "https://framerusercontent.com/images/ig7Nwla3ZPCLJLcMOrqK6r8C4.jpg?width=1960&height=897", name: "enterprise-bg.jpg" },
  { url: "https://framerusercontent.com/images/IpKswZJkpyKmTcFys4pzCwQAY.png?scale-down-to=512&width=768&height=768", name: "signal-icon.png" },
  // Testimonial person images
  { url: "https://framerusercontent.com/images/cnoqyR0pP1TZH4mat7QT2G4.png?width=670&height=691", name: "person-lisa.png" },
  { url: "https://framerusercontent.com/images/QeuGTgYfitOMW6uUgqekouo43zs.jpg?width=2396&height=2832", name: "person-sarah.jpg" },
  { url: "https://framerusercontent.com/images/8WzhM2YUoa8TYRvpbtksR7IG5M.jpg?width=730&height=575", name: "person-michael.jpg" },
  // Large feature image
  { url: "https://framerusercontent.com/images/3bwkBnTtiQOcfPh74JTjsALYMAU.jpg?scale-down-to=1024&width=2776&height=2057", name: "feature-large.jpg" },
  // Pipeline agent icons
  { url: "https://framerusercontent.com/images/Mlqm7ti10iS9SZ8EJ6VRutP2XM.png?width=204&height=204", name: "agent-icon-1.png" },
  { url: "https://framerusercontent.com/images/OnjC0crVsJMD19LynX2wzhLUoGU.png?width=204&height=204", name: "agent-icon-2.png" },
  { url: "https://framerusercontent.com/images/PK81IedzCnWinbSwOUH8ebpKjSw.png?width=114&height=114", name: "agent-icon-3.png" },
  { url: "https://framerusercontent.com/images/aznLw6iYWDsAvuAcyJDzqR948.png?width=512&height=512", name: "agent-icon-4.png" },
  { url: "https://framerusercontent.com/images/0puBcKsNd2AgJcOTwSigbrvFa1Q.png?width=76&height=96", name: "agent-icon-5.png" },
  { url: "https://framerusercontent.com/images/by05lHJgMVEPEJd6sMwwEPKgGK8.png?width=512&height=512", name: "agent-icon-6.png" },
  { url: "https://framerusercontent.com/images/EWYC3F26NDpSsmEOD0OmJeObA8.png?width=980&height=980", name: "agent-icon-7.png" },
  // Review avatar images
  { url: "https://framerusercontent.com/images/Z2JA3RUtf0RiDyY9hxqYb0hP74.jpg?width=640&height=640", name: "reviewer-1.jpg" },
  { url: "https://framerusercontent.com/images/83QQxxpilsGO85WWoX8V3cGpOLs.jpg?width=640&height=640", name: "reviewer-2.jpg" },
  { url: "https://framerusercontent.com/images/lP1HBeds236gqWBiqdo5TTKGipk.jpg?width=640&height=640", name: "reviewer-3.jpg" },
  // Case study flower images
  { url: "https://framerusercontent.com/images/6SAyOfESoLOUfA713jKihmF4SY.jpg?width=1920&height=2880", name: "flower-lilac.jpg" },
  { url: "https://framerusercontent.com/images/YeBKGVO1W97BabL8gNvY18nPM.jpg?width=2000&height=1880", name: "flower-purple.jpg" },
  { url: "https://framerusercontent.com/images/WCj59RNre0YWmCBubK7oEtC2sBE.jpg?width=1920&height=2880", name: "flower-yellow.jpg" },
  // Arrow SVGs
  { url: "https://framerusercontent.com/images/6tTbkXggWgQCAJ4DO2QEdXXmgM.svg", name: "arrow-back.svg" },
  { url: "https://framerusercontent.com/images/11KSGbIZoRSg4pjdnUoif6MKHI.svg", name: "arrow-next.svg" },
  // Team/testimonial section images
  { url: "https://framerusercontent.com/images/ywUbdXvJPFSruczm4BsRf3C8K2k.jpeg?scale-down-to=1024&width=1280&height=1175", name: "team-mockup-1.jpeg" },
  { url: "https://framerusercontent.com/images/aur9YHhb9ATOxZWyPjXGrFXPbME.jpeg?width=1280&height=1224", name: "team-mockup-2.jpeg" },
  { url: "https://framerusercontent.com/images/29JiTNIDP2xT4hLbMy8FpB2RJ6w.png?width=1608&height=1496", name: "team-mockup-3.png" },
  // More person images for testimonials grid
  { url: "https://framerusercontent.com/images/6cHyRb6k3nAb0Ga8l6tgP93ZN0.jpg?width=2832&height=4240", name: "person-woman-blue.jpg" },
  { url: "https://framerusercontent.com/images/Tk7ThHcSpGXnlc9vG5Rw2Krn7lw.jpg?width=4991&height=4016", name: "person-man-glasses.jpg" },
  { url: "https://framerusercontent.com/images/pNIvm8AzxM9r42e1KkxsT0NVE.jpg?width=5760&height=3840", name: "person-woman-smiling.jpg" },
  { url: "https://framerusercontent.com/images/CqqlqgzvDNiQwiTmiW4deqNvf0.jpg?width=4000&height=6000", name: "person-man-suit.jpg" },
  // Blog images
  { url: "https://framerusercontent.com/images/JeKJESJ7S6twpvuyTJDwtQflGk.png?width=2138&height=1128", name: "blog-featured.png" },
  { url: "https://framerusercontent.com/images/hGNQkp9OZPEvKPGQpPbFdFtZZq0.jpg?width=2000&height=3000", name: "blog-author.jpg" },
  { url: "https://framerusercontent.com/images/ZeUFmkXlps8RdA2lXBHyYnipSQ.jpg?width=3600&height=2400", name: "blog-thumb-1.jpg" },
  { url: "https://framerusercontent.com/images/KadWReFiNPJK1dLt6DhkBTiX57M.png?width=2106&height=1145", name: "blog-thumb-2.png" },
  { url: "https://framerusercontent.com/images/AfyfTgR0EEbdH18S1R0pe2dJn4M.jpg?width=5760&height=3840", name: "blog-thumb-3.jpg" },
  // Logo wordmark
  { url: "https://framerusercontent.com/images/xKKyreeY9182G8JYAXZ6D8KTBfI.png?width=2046&height=446", name: "omni-wordmark.png" },
  // CTA / footer decoration images
  { url: "https://framerusercontent.com/images/dwzys07iCmuoYkQEX2M9fJN0T78.png?scale-down-to=1024", name: "cta-decoration-left.png" },
  { url: "https://framerusercontent.com/images/tQdRTYpsukhoM40XtJdCzEpapFw.png?scale-down-to=1024", name: "cta-decoration-right.png" },
  // ROI calculator image
  { url: "https://framerusercontent.com/images/qGNQjQMV2WSwW9dgs3ieblsBCY.png?width=1565&height=697", name: "roi-badge.png" },
  // Smart adaptive preview
  { url: "https://framerusercontent.com/images/judNdENmNGVcZmvfMVag1YSY0tY.png?scale-down-to=1024&width=1200&height=1280", name: "smart-adaptive.png" },
  // Large decorative SVG
  { url: "https://framerusercontent.com/images/tlWoVIJFEvXUVTt6NzyDHMOSRAA.svg?width=6412&height=2232", name: "footer-wave.svg" },
];

async function download(url, filepath) {
  try {
    const res = await fetch(url);
    if (!res.ok) {
      console.error(`  FAIL ${res.status}: ${url}`);
      return;
    }
    const buffer = Buffer.from(await res.arrayBuffer());
    await writeFile(filepath, buffer);
    console.log(`  OK: ${filepath} (${(buffer.length / 1024).toFixed(1)}KB)`);
  } catch (err) {
    console.error(`  ERR: ${url} - ${err.message}`);
  }
}

async function main() {
  // Create directories
  await mkdir("public/images", { recursive: true });
  await mkdir("public/seo", { recursive: true });

  console.log(`Downloading ${IMAGE_URLS.length} assets...`);

  // Download in batches of 6
  const batch = 6;
  for (let i = 0; i < IMAGE_URLS.length; i += batch) {
    const chunk = IMAGE_URLS.slice(i, i + batch);
    await Promise.all(
      chunk.map(({ url, name, dir }) => {
        const targetDir = dir || BASE;
        return download(url, join(targetDir, name));
      })
    );
  }

  console.log("Done!");
}

main();
