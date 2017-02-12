soundboxControllers.controller('root.controller', [
    '$scope',
    function(
        $scope
    ) {
        $scope.model = {
            pageElements: {
                currentlyPlayingExpanded: false,
                player: {
                    player1: [
                        [
                            { src: 'https://www.youtube.com/watch?v=qL3osHj-Myc?ecver=2' }
                        ], [
                            { src: 'https://www.youtube.com/watch?v=8myYyMg1fFE' }
                        ]
                    ],
                    player2: [
                        [
                            { src: 'https://www.youtube.com/watch?v=qL3osHj-Myc?ecver=2' }
                        ], [
                            { src: 'https://www.youtube.com/watch?v=8myYyMg1fFE' }
                        ]
                    ],
                }
            }
        };
    }
]);