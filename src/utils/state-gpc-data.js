// Lightweight initial dataset for GPC activation by state.
// Extend this over time as policy changes; dates are ISO strings.

export const stateCodeToName = {
  AL: 'Alabama',
  AK: 'Alaska',
  AZ: 'Arizona',
  AR: 'Arkansas',
  CA: 'California',
  CO: 'Colorado',
  CT: 'Connecticut',
  DE: 'Delaware',
  FL: 'Florida',
  GA: 'Georgia',
  HI: 'Hawaii',
  ID: 'Idaho',
  IL: 'Illinois',
  IN: 'Indiana',
  IA: 'Iowa',
  KS: 'Kansas',
  KY: 'Kentucky',
  LA: 'Louisiana',
  ME: 'Maine',
  MD: 'Maryland',
  MA: 'Massachusetts',
  MI: 'Michigan',
  MN: 'Minnesota',
  MS: 'Mississippi',
  MO: 'Missouri',
  MT: 'Montana',
  NE: 'Nebraska',
  NV: 'Nevada',
  NH: 'New Hampshire',
  NJ: 'New Jersey',
  NM: 'New Mexico',
  NY: 'New York',
  NC: 'North Carolina',
  ND: 'North Dakota',
  OH: 'Ohio',
  OK: 'Oklahoma',
  OR: 'Oregon',
  PA: 'Pennsylvania',
  RI: 'Rhode Island',
  SC: 'South Carolina',
  SD: 'South Dakota',
  TN: 'Tennessee',
  TX: 'Texas',
  UT: 'Utah',
  VT: 'Vermont',
  VA: 'Virginia',
  WA: 'Washington',
  WV: 'West Virginia',
  WI: 'Wisconsin',
  WY: 'Wyoming',
  DC: 'District of Columbia'
};

// Map state names back to their USPS codes for TopoJSON lookup
const stateNameToCode = Object.entries(stateCodeToName).reduce(
  (acc, [code, name]) => {
    acc[name] = code;
    return acc;
  },
  {}
);

export function getStateCodeByName(name) {
  return stateNameToCode[name] || null;
}

// Initial example data; mark California and Colorado as active with example dates.
// This structure supports: status, since date, and notes for tooltip.
export const gpcByState = {
  CA: { active: true, since: '1/1/2023', note: 'CCPA/CPRA guidance' },
  CO: { active: true, since: '7/1/2024', note: 'Colorado Privacy Act' },
  CT: { active: true },
  DE: { active: true },
  MD: { active: true },
  MN: { active: true },
  MT: { active: true },
  NE: { active: true },
  NH: { active: true },
  NJ: { active: true },
  OR: { active: true },
  TX: { active: true }
};

export function getStateGpcInfo(stateCode) {
  const data = gpcByState[stateCode];
  return {
    name: stateCodeToName[stateCode] || stateCode,
    active: Boolean(data && data.active),
    since: data && data.since ? data.since : null,
    note: data && data.note ? data.note : null
  };
}
