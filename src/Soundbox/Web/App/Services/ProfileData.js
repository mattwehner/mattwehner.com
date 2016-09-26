soundboxServices.factory('ProfileData', [
    function(
    ) {
        return {
            Profiles: {
                id: 'p1',
                name: 'Dungeon Master',
                campaigns: ['ca1'],
                characters: ['ch1', 'ch2', 'ch3', 'ch4'],
                playlists: ['pl1', 'pl2', 'pl3', 'pl4'],
                soundboards: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8']
            },
            Campaigns: [
                {
                    id: 'ca1',
                    name: 'Approaching Darkness',
                    imageUrl: 'http://gilbertsollars.com/images/wallpapers/fantasy-forest-wallpaper/fantasy-forest-wallpaper-13.jpg',
                    characters: ['ch1', 'ch2', 'ch3', 'ch4'],
                    playlists: ['pl1', 'pl2', 'pl3', 'pl4'],
                    soundboards: ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8']
                }
            ],
            Characters: [
                {
                    id: 'ch1',
                    name: 'Tian A\'Alor',
                    imageUrl: 'http://www.joshuad.net/new-bard-handbook-files/imgs/header.jpg',
                    playlists: ['s1'],
                    soundboards: []
                },
                {
                    id: 'ch2',
                    name: 'Tian A\'Alor',
                    imageUrl: 'http://www.joshuad.net/new-bard-handbook-files/imgs/header.jpg',
                    playlists: ['s1'],
                    soundboards: []
                },
                {
                    id: 'ch3',
                    name: 'Tian A\'Alor',
                    imageUrl: 'http://www.joshuad.net/new-bard-handbook-files/imgs/header.jpg',
                    playlists: ['s1'],
                    soundboards: []
                },
                {
                    id: 'ch4',
                    name: 'Tian A\'Alor',
                    imageUrl: 'http://www.joshuad.net/new-bard-handbook-files/imgs/header.jpg',
                    playlists: ['s1'],
                    soundboards: []
                }
            ],
            Soundboards: [
                {
                    id: 's1',
                    name: 'Tian A\'Alor',
                    sounds: [
                        {
                            name: 'sound 1',
                            url: 'aurl'
                        }
                    ]
                }
            ]
        };
    }
]);