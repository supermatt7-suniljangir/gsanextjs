import fountains from "@/data/fountains.js";
import buddhaStatues from "@/data/buddha_statue.js";
import column_design from "@/data/column_design.js";
import flower_pots from "@/data/flower_pot.js";
import garden_stepping from "@/data/garden_stepping.js";
import gazebo from "@/data/gazebo.js";
import house_name_plate from "@/data/house_name_plate.js";
import jalli from "@/data/jalli.js";
import lamp_post from "@/data/lamp_post.js";
import garden_bench from "@/data/garden_bench.js";
import marble_urli from "@/data/marble_urli.js";
import mural_display from "@/data/mural_display.js";
import murti from "@/data/murti.js";
import stone_gate from "@/data/stone_gate.js";
import temple from "@/data/temple.js";
import tulshi_pota from "@/data/tulshi_pota.js";
import wall_mural from "@/data/wall_mural.js";
import waterfall from "@/data/waterfall.js";

const categories = {
  fountain: {
    category: "fountain",
    price: "2500-5000",
    background: "/assets/fountain/bg.webp",
    media: fountains,
  },
  "buddha-statue": {
    category: "buddha-statue",
    price: "3000-7000",
    background: "/assets/buddha-statue/bg.webp",
    media: buddhaStatues,
  },
  "column-design": {
    category: "column-design",
    price: "4000-9000",
    background: "/assets/column-design/bg.webp",
    media: column_design,
  },
  "flower-pot": {
    category: "flower-pot",
    price: "1500-4000",
    background: "/assets/flower-pot/bg.webp",
    media: flower_pots,
  },
  "garden-banch": {
    category: "garden-banch",
    price: "5000-12000",
    background: "/assets/garden-bench/bg.webp",
    media: garden_bench,
  },
  "garden-stepping": {
    category: "garden-stepping",
    price: "2000-6000",
    background: "/assets/garden-stepping/bg.webp",
    media: garden_stepping,
  },
  gazebo: {
    category: "gazebo",
    price: "10000-25000",
    background: "/assets/gazebo/bg.webp",
    media: gazebo,
  },
  "house-name-plate": {
    category: "house-name-plate",
    price: "2000-5000",
    background: "/assets/house-name-plate/bg.webp",
    media: house_name_plate,
  },
  jalli: {
    category: "jalli",
    price: "3000-7000",
    background: "/assets/jalli/bg.webp",
    media: jalli,
  },
  "lamp-post": {
    category: "lamp-post",
    price: "5000-15000",
    background: "/assets/lamp-post/bg.webp",
    media: lamp_post,
  },
  "marble-urli": {
    category: "marble-urli",
    price: "4000-9000",
    background: "/assets/marble-urli/bg.webp",
    media: marble_urli,
  },
  "mural-display": {
    category: "mural-display",
    price: "6000-14000",
    background: "/assets/mural-display/bg.webp",
    media: mural_display,
  },
  murti: {
    category: "murti",
    price: "8000-20000",
    background: "/assets/murti/bg.webp",
    media: murti,
  },
  "stone-gate": {
    category: "stone-gate",
    price: "15000-30000",
    background: "/assets/stone-gate/bg.webp",
    media: stone_gate,
  },
  temple: {
    category: "temple",
    price: "12000-35000",
    background: "/assets/temple/bg.webp",
    media: temple,
  },
  "tulshi-pota": {
    category: "tulshi-pota",
    price: "2500-6000",
    background: "/assets/tulshi-pota/bg.webp",
    media: tulshi_pota,
  },
  "wall-mural": {
    category: "wall-mural",
    price: "4000-10000",
    background: "/assets/wall-mural/bg.webp",
    media: wall_mural,
  },
  waterfall: {
    category: "waterfall",
    price: "7000-20000",
    background: "/assets/waterfall/bg.webp",
    media: waterfall,
  },
};
// Convert to array for navigation and such.
const categoryArray = Object.entries(categories).map(([key, value]) => ({
  id: key,
  ...value,
}));

export { categories, categoryArray };
