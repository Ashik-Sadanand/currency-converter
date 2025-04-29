// unitlogic.js - External JavaScript logic for unit conversions

window.unitLogic = {
  length: {
    ratios: {
      mm: 0.001,
      cm: 0.01,
      m: 1,
      km: 1000,
      in: 0.0254,
      ft: 0.3048,
      yd: 0.9144,
      mi: 1609.34,
      "nautical mile": 1852
    },
    convert(from, to, value) {
      return (value * this.ratios[from]) / this.ratios[to];
    }
  },
  mass: {
    ratios: {
      mg: 0.000001,
      g: 0.001,
      kg: 1,
      tonne: 1000,
      oz: 0.0283495,
      lb: 0.453592,
      st: 6.35029,
      "US ton": 907.18474,
      "UK ton": 1016.0469088
    },
    convert(from, to, value) {
      return (value * this.ratios[from]) / this.ratios[to];
    }
  },
  temp: {
    convert(from, to, value) {
      let c;
      if (from === "C") c = value;
      else if (from === "F") c = (value - 32) * 5 / 9;
      else if (from === "K") c = value - 273.15;
      else if (from === "R") c = (value - 491.67) * 5 / 9;
      if (to === "C") return c;
      else if (to === "F") return c * 9 / 5 + 32;
      else if (to === "K") return c + 273.15;
      else if (to === "R") return (c + 273.15) * 9 / 5;
    },
    ratios: {
      C: 1, F: 1, K: 1, R: 1 // Placeholder
    }
  },
  time: {
    ratios: {
      ms: 0.001,
      s: 1,
      min: 60,
      h: 3600,
      day: 86400,
      week: 604800,
      month: 2629800, // average month
      year: 31557600,
      decade: 315576000,
      century: 3155760000,
      millennium: 31557600000
    },
    convert(from, to, value) {
      return (value * this.ratios[from]) / this.ratios[to];
    }
  },
  storage: {
    ratios: {
      b: 1,
      B: 8,
      KB: 8192,
      MB: 8388608,
      GB: 8589934592,
      TB: 8796093022208,
      PB: 9007199254740992,
      EB: 9223372036854775808
    },
    convert(from, to, value) {
      return (value * this.ratios[from]) / this.ratios[to];
    }
  },
  energy: {
    ratios: {
      J: 1,
      kJ: 1000,
      cal: 4.184,
      kcal: 4184,
      Wh: 3600,
      kWh: 3600000,
      BTU: 1055.06
    },
    convert(from, to, value) {
      return (value * this.ratios[from]) / this.ratios[to];
    }
  },
  power: {
    ratios: {
      W: 1,
      kW: 1000,
      hp: 745.7
    },
    convert(from, to, value) {
      return (value * this.ratios[from]) / this.ratios[to];
    }
  },
  electrical: {
    ratios: {
      A: 1,
      V: 1,
      Ohm: 1,
      W: 1,
      kW: 1000
    },
    convert(from, to, value) {
      return from === to ? value : 'N/A'; // placeholder
    }
  },
  pressure: {
    ratios: {
      Pa: 1,
      kPa: 1000,
      bar: 100000,
      atm: 101325,
      psi: 6894.76,
      mmHg: 133.322
    },
    convert(from, to, value) {
      return (value * this.ratios[from]) / this.ratios[to];
    }
  },
  speed: {
    ratios: {
      "m/s": 1,
      "km/h": 0.277778,
      "mph": 0.44704,
      "knots": 0.514444,
      "ft/s": 0.3048
    },
    convert(from, to, value) {
      return (value * this.ratios[from]) / this.ratios[to];
    }
  },
  area: {
    ratios: {
      "mm²": 0.000001,
      "cm²": 0.0001,
      "m²": 1,
      "km²": 1000000,
      "in²": 0.00064516,
      "ft²": 0.092903,
      "yd²": 0.836127,
      acre: 4046.86,
      "mi²": 2589988.11,
      hectare: 10000
    },
    convert(from, to, value) {
      return (value * this.ratios[from]) / this.ratios[to];
    }
  },
  volume: {
    ratios: {
      ml: 0.001,
      cl: 0.01,
      dl: 0.1,
      l: 1,
      "cm³": 0.001,
      "m³": 1000,
      "fl oz": 0.0295735,
      gill: 0.118294,
      cup: 0.24,
      pt: 0.473176,
      qt: 0.946353,
      gal: 3.78541,
      "in³": 0.0163871,
      "ft³": 28.3168,
      "yd³": 764.555,
      barrel: 119.24, // oil barrel
      bushel: 35.2391,
      peck: 8.80977
    },
    convert(from, to, value) {
      return (value * this.ratios[from]) / this.ratios[to];
    }
  },
  cooking: {
    ratios: {
      tsp: 0.00492892,
      tbsp: 0.0147868,
      "fl oz": 0.0295735,
      cup: 0.24,
      pt: 0.473176,
      qt: 0.946353,
      gal: 3.78541,
      ml: 0.001,
      l: 1,
      dash: 0.000616115,
      pinch: 0.000308057,
      smidgen: 0.000154028
    },
    convert(from, to, value) {
      return (value * this.ratios[from]) / this.ratios[to];
    }
  },
  density: {
    ratios: {
      "kg/m³": 1,
      "g/cm³": 1000,
      "lb/ft³": 16.0185,
      "lb/gal": 119.826
    },
    convert(from, to, value) {
      return (value * this.ratios[from]) / this.ratios[to];
    }
  },
  frequency: {
    ratios: {
      Hz: 1,
      kHz: 1000,
      MHz: 1000000,
      GHz: 1000000000
    },
    convert(from, to, value) {
      return (value * this.ratios[from]) / this.ratios[to];
    }
  }
};
