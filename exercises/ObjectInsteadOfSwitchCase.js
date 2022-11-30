const SUPER_HERO = "Hulk";

const LOKI_COSTUMES = {
  Iron_Man: () => console.log("Magneto"),
  Thor: () => console.log("Odin"),
  Hulk: () => console.log("Thanos"),
};

const LOKI_DEFAULT = () => console.log("Loki");

const RESULT = LOKI_COSTUMES[SUPER_HERO]
  ? LOKI_COSTUMES[SUPER_HERO]()
  : LOKI_DEFAULT();
