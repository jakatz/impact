var squadsData = [
  {
    squadName: 'Skin Gaming',
    members: [
      {
        'name': 'Matt Graser',
        'product': 'CSGO Jackpot'
      },
      {
        'name': 'Morgan Biemiller',
        'product': 'CSGO Jackpot'
      },
      {
        'name': 'Karl Jacober',
        'product': 'CSGO Jackpot'
      }
    ]
  },
  {
    squadName: 'CSGO Slots',
    members: [
      {
        'name': 'Matt Graser',
        'product': 'CSGO Jackpot'
      },
      {
        'name': 'Morgan Biemiller',
        'product': 'CSGO Jackpot'
      },
      {
        'name': 'Karl Jacober',
        'product': 'CSGO Jackpot'
      }
    ]
  }
];

Template.squadsList.helpers({
  squads: squadsData
});